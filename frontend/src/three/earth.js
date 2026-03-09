import * as THREE from "three";

const earthTexUrl = "https://mapplix.github.io/earth/earth.png";

export function createEarth(canvas, opts = {}) {
  const posZ = opts.posZ ?? 1250;

  // ===== Planeta
  const oceanColor = opts.oceanColor ?? "#FFFFFF";
  const landColor = opts.landColor ?? "#CFCFCF";
  const landContrast = opts.landContrast ?? 1.45;
  const landThreshold = opts.landThreshold ?? 0.5;
  const mapInvert = opts.mapInvert ?? false;

  // ===== Wrap look
  const wrapColor = opts.wireColor ?? "#2D8CFF";
  const wrapGlowColor = opts.wireDeep ?? "#1B4FA6";
  const wrapOpacity = opts.wrapOpacity ?? 0.22;
  const wrapThickness = opts.wrapThickness ?? 0.07;
  const wrapFresnelPow = opts.wrapFresnelPow ?? 2.1;
  const wrapFresnelGain = opts.wrapFresnelGain ?? 1.1;
  const wrapCenterFloor = opts.wrapCenterFloor ?? 0.28;
  const wrapGlowOpacity = opts.wrapGlowOpacity ?? 0.06;
  const wrapGlowThickness = opts.wrapGlowThickness ?? 0.11;

  // ===== Partículas
  const pulseColor = opts.pulseColor ?? "#E0EEEF";
  const starColor = opts.starColor ?? "#FFFFFF";

  // ===== Tamaños
  const baseR = opts.baseR ?? 165;
  const globeR = baseR * (opts.globeScale ?? 0.78);
  const shellR = baseR * (opts.shell1Scale ?? 1.02);

  // ===== Perf
  const maxDpr = opts.maxDpr ?? 1.5;

  // ===== Ripple (points)
  const rippleSpeed = opts.rippleSpeed ?? 1.25;
  const rippleFreq = opts.rippleFreq ?? 26.0;
  const rippleDecay = opts.rippleDecay ?? 1.35;
  const rippleAmp = opts.rippleAmp ?? 0.95;
  const rippleWidth = opts.rippleWidth ?? 0.06;

  // ===== Wrap wave
  const wrapWaveAmp = opts.wrapWaveAmp ?? shellR * 0.010;
  const wrapWaveFreq = opts.wrapWaveFreq ?? 3.0;
  const wrapWaveSpeed = opts.wrapWaveSpeed ?? 1.2;

  // ===== Wrap throb
  const wrapThrobAmp = opts.wrapThrobAmp ?? 0.40;
  const wrapThrobSpeed = opts.wrapThrobSpeed ?? 1.35;

  // ===== Wrap ripple
  const wrapRippleAmp = opts.wrapRippleAmp ?? 1.15;
  const wrapRippleSpeed = opts.wrapRippleSpeed ?? 1.25;
  const wrapRippleFreq = opts.wrapRippleFreq ?? 26.0;
  const wrapRippleDecay = opts.wrapRippleDecay ?? 1.35;
  const wrapRippleWidth = opts.wrapRippleWidth ?? 0.06;

  // ---------- Renderer
  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true,
    powerPreference: "high-performance",
  });
  renderer.setClearColor(0x000000, 0);

  if ("outputColorSpace" in renderer) renderer.outputColorSpace = THREE.SRGBColorSpace;
  else renderer.outputEncoding = THREE.sRGBEncoding;

  // ---------- Scene/Camera
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(22, 1, 1, 10000);
  camera.position.z = posZ; // Se queda fijo aquí

  // ---------- Lights
  scene.add(new THREE.HemisphereLight("#ffffff", "#0a0a1a", 1.25));
  const dir = new THREE.DirectionalLight("#ffffff", 1.05);
  dir.position.set(2, 1, 2);
  scene.add(dir);

  const loader = new THREE.TextureLoader();
  let tex = null;

  // =========================
  // GLOBO
  // =========================
  const globeMat = new THREE.MeshStandardMaterial({
    map: null,
    color: new THREE.Color("#ffffff"),
    roughness: 0.78,
    metalness: 0.0,
    transparent: true,
    opacity: 1.0,
  });

  globeMat.onBeforeCompile = (shader) => {
    shader.uniforms.uOcean = { value: new THREE.Color(oceanColor) };
    shader.uniforms.uLand = { value: new THREE.Color(landColor) };
    shader.uniforms.uContrast = { value: landContrast };
    shader.uniforms.uThreshold = { value: landThreshold };
    shader.uniforms.uInvert = { value: mapInvert ? 1.0 : 0.0 };

    shader.fragmentShader = shader.fragmentShader.replace(
      "#include <common>",
      `
      #include <common>
      uniform vec3 uOcean;
      uniform vec3 uLand;
      uniform float uContrast;
      uniform float uThreshold;
      uniform float uInvert;
      float luma(vec3 c){ return dot(c, vec3(0.299, 0.587, 0.114)); }
      `
    );

    shader.fragmentShader = shader.fragmentShader.replace(
      "#include <map_fragment>",
      `
      #include <map_fragment>
      float m = luma(diffuseColor.rgb);
      m = (m - uThreshold) * uContrast + 0.5;
      m = clamp(m, 0.0, 1.0);
      m = smoothstep(0.15, 0.85, m);
      m = mix(m, 1.0 - m, step(0.5, uInvert));
      diffuseColor.rgb = mix(uOcean, uLand, m);
      `
    );
  };

  const globeGeo = new THREE.IcosahedronGeometry(globeR, 4);
  const globe = new THREE.Mesh(globeGeo, globeMat);

  loader.load(earthTexUrl, (t) => {
    tex = t;
    if ("colorSpace" in tex) tex.colorSpace = THREE.SRGBColorSpace;
    else tex.encoding = THREE.sRGBEncoding;
    tex.anisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy()) || 1;
    globeMat.map = tex;
    globeMat.needsUpdate = true;
  });

  // ---------- Glass
  const glassGeo = new THREE.SphereGeometry(globeR * 1.01, 48, 48);
  const glassMat = new THREE.MeshPhysicalMaterial({
    color: new THREE.Color("#ffffff"),
    roughness: 0.1,
    metalness: 0.0,
    transparent: true,
    opacity: opts.glassOpacity ?? 0.12,
    transmission: opts.glassTransmission ?? 0.9,
    thickness: opts.glassThickness ?? 0.6,
    clearcoat: 1.0,
    depthWrite: false,
  });
  const glass = new THREE.Mesh(glassGeo, glassMat);

  // =========================
  // WRAP (Líneas técnicas)
  // =========================
  function toBarycentric(geo) {
    const g = geo.toNonIndexed();
    const count = g.attributes.position.count;
    const bary = new Float32Array(count * 3);
    for (let i = 0; i < count; i += 3) {
      bary[(i + 0) * 3 + 0] = 1; bary[(i + 1) * 3 + 1] = 1; bary[(i + 2) * 3 + 2] = 1;
    }
    g.setAttribute("aBary", new THREE.BufferAttribute(bary, 3));
    return g;
  }

  const wrapUniforms = (color, opacity, thickness) => ({
    uTime: { value: 0 },
    uColor: { value: new THREE.Color(color) },
    uOpacity: { value: opacity },
    uThickness: { value: thickness },
    uFresnelPow: { value: wrapFresnelPow },
    uFresnelGain: { value: wrapFresnelGain },
    uCenterFloor: { value: wrapCenterFloor },
    uWaveAmp: { value: wrapWaveAmp },
    uWaveFreq: { value: wrapWaveFreq },
    uWaveSpeed: { value: wrapWaveSpeed },
    uThrobAmp: { value: wrapThrobAmp },
    uThrobSpeed: { value: wrapThrobSpeed },
    uHit: { value: new THREE.Vector3(999, 999, 999) },
    uHitTime: { value: -999 },
    uRippleAmp: { value: wrapRippleAmp },
    uRippleSpeed: { value: wrapRippleSpeed },
    uRippleFreq: { value: wrapRippleFreq },
    uRippleDecay: { value: wrapRippleDecay },
    uRippleWidth: { value: wrapRippleWidth },
  });

  function makeWrapMaterial(color, opacity, thickness) {
    return new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      uniforms: wrapUniforms(color, opacity, thickness),
      vertexShader: `
        attribute vec3 aBary;
        varying vec3 vBary;
        varying vec3 vNView;
        varying float vWave;
        varying float vRipple;
        varying float vBand;
        varying float vCrest;
        uniform float uTime;
        uniform float uWaveAmp;
        uniform float uWaveFreq;
        uniform float uWaveSpeed;
        uniform vec3 uHit;
        uniform float uHitTime;
        uniform float uRippleSpeed;
        uniform float uRippleFreq;
        uniform float uRippleDecay;
        uniform float uRippleAmp;
        uniform float uRippleWidth;

        float hash13(vec3 p){
          p = fract(p * 0.1031);
          p += dot(p, p.yzx + 33.33);
          return fract((p.x + p.y) * p.z);
        }

        void main(){
          vBary = aBary;
          vec3 p = position;
          vec3 nObj = normalize(p);
          float seed = hash13(p);
          float t = uTime * uWaveSpeed;
          float w1 = sin((p.x * 1.05 + p.y * 1.45 + p.z * 0.85) * uWaveFreq + t + seed * 6.2831);
          float wave = w1 * uWaveAmp;
          float tHit = uTime - uHitTime;
          float ripple = 0.0;
          float band = 0.0;
          float crest = 0.0;
          if (tHit > 0.0 && tHit < 3.0) {
            float d = distance(normalize(p), normalize(uHit));
            float front = d - (tHit * uRippleSpeed);
            band = 1.0 - smoothstep(0.0, uRippleWidth, abs(front));
            float w = sin(front * uRippleFreq);
            float decay = exp(-tHit * uRippleDecay);
            ripple = band * w * decay * uRippleAmp;
            crest = smoothstep(0.76, 0.98, (w * 0.5 + 0.5)) * band * decay;
          }
          p += nObj * (wave + ripple * uWaveAmp * 0.65);
          vWave = w1; vRipple = ripple; vBand = band; vCrest = crest;
          vec4 mv = modelViewMatrix * vec4(p, 1.0);
          vNView = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * mv;
        }
      `,
      fragmentShader: `
        varying vec3 vBary;
        varying vec3 vNView;
        varying float vWave;
        varying float vRipple;
        varying float vBand;
        varying float vCrest;
        uniform vec3 uColor;
        uniform float uOpacity;
        uniform float uThickness;
        uniform float uFresnelPow;
        uniform float uFresnelGain;
        uniform float uCenterFloor;
        uniform float uTime;
        uniform float uThrobAmp;
        uniform float uThrobSpeed;

        float edgeFactor(vec3 bary, float thick){
          float d = min(bary.x, min(bary.y, bary.z));
          float aa = fwidth(d);
          return 1.0 - smoothstep(thick - aa, thick + aa, d);
        }

        void main(){
          float throb = 1.0 + uThrobAmp * sin(uTime * uThrobSpeed + vWave * 2.4);
          float thick = uThickness * throb * (1.0 + abs(vRipple) * 1.35);
          float edge = edgeFactor(vBary, thick);
          float fres = pow(1.0 - abs(vNView.z), uFresnelPow) * uFresnelGain;
          float alpha = uOpacity * edge * mix(uCenterFloor, 1.0, clamp(fres, 0.0, 1.0));
          alpha *= (1.0 + vBand * 0.35 + vCrest * 0.55);
          if(alpha < 0.002) discard;
          gl_FragColor = vec4(uColor * (1.0 + vBand * 0.35 + vCrest * 1.1), alpha);
        }
      `,
    });
  }

  const wrapGeo = toBarycentric(new THREE.IcosahedronGeometry(shellR, opts.shellDetail ?? 3));
  const wrapMat = makeWrapMaterial(wrapColor, wrapOpacity, wrapThickness);
  const wrapGlowMat = makeWrapMaterial(wrapGlowColor, wrapGlowOpacity, wrapGlowThickness);
  const wrapMesh = new THREE.Mesh(wrapGeo, wrapMat);
  const wrapGlowMesh = new THREE.Mesh(wrapGeo, wrapGlowMat);

  // =========================
  // PULSE / STARS
  // =========================
  const pulseMat = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    uniforms: {
      uTime: { value: 0 }, uColor: { value: new THREE.Color(pulseColor) },
      uSize: { value: opts.pulseSize ?? 4.2 }, uStrength: { value: opts.pulseStrength ?? 1.6 }, uSpeed: { value: opts.pulseSpeed ?? 2.0 },
      uHit: { value: new THREE.Vector3(999, 999, 999) }, uHitTime: { value: -999 },
      uRippleSpeed: { value: rippleSpeed }, uRippleFreq: { value: rippleFreq },
      uRippleDecay: { value: rippleDecay }, uRippleAmp: { value: rippleAmp }, uRippleWidth: { value: rippleWidth },
    },
    vertexShader: `
      attribute float aSeed; varying float vA;
      uniform float uTime, uSize, uStrength, uSpeed, uHitTime, uRippleSpeed, uRippleFreq, uRippleDecay, uRippleAmp, uRippleWidth;
      uniform vec3 uHit;
      void main() {
        float p = sin(uTime * uSpeed + aSeed * 6.2831);
        float a = smoothstep(0.15, 1.0, (p * 0.5 + 0.5)) * uStrength;
        float t = uTime - uHitTime;
        float ripple = 0.0;
        if(t > 0.0 && t < 3.0){
          float d = distance(normalize(position), normalize(uHit));
          float front = d - (t * uRippleSpeed);
          float band = 1.0 - smoothstep(0.0, uRippleWidth, abs(front));
          ripple = band * (0.6 + 0.4 * sin(front * uRippleFreq)) * exp(-t * uRippleDecay) * uRippleAmp;
        }
        vA = clamp(a + ripple, 0.0, 1.0);
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = uSize * (300.0 / -mv.z) * (0.55 + 0.85 * vA);
        gl_Position = projectionMatrix * mv;
      }
    `,
    fragmentShader: `
      uniform vec3 uColor; varying float vA;
      void main() {
        float d = length(gl_PointCoord.xy - 0.5);
        gl_FragColor = vec4(uColor, smoothstep(0.5, 0.1, d) * vA);
      }
    `,
  });

  const starMat = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    uniforms: {
      uTime: { value: 0 }, uColor: { value: new THREE.Color(starColor) },
      uSize: { value: opts.starSize ?? 12.0 }, uTwinkle: { value: opts.starTwinkle ?? 1.35 }, uSpeed: { value: opts.starSpeed ?? 1.25 },
    },
    vertexShader: `
      attribute float aSeed; varying float vA;
      uniform float uTime, uSize, uTwinkle, uSpeed;
      void main() {
        float tw = sin(uTime * uSpeed + aSeed * 9.0);
        vA = smoothstep(0.05, 1.0, (tw * 0.5 + 0.5)) * uTwinkle;
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = uSize * (320.0 / -mv.z) * (0.6 + 1.2 * vA);
        gl_Position = projectionMatrix * mv;
      }
    `,
    fragmentShader: `
      uniform vec3 uColor; varying float vA;
      void main() {
        vec2 uv = gl_PointCoord.xy - 0.5;
        float d = length(uv);
        float glow = exp(-d * 10.0) + 0.5 * (exp(-abs(uv.x)*25.0) + exp(-abs(uv.y)*25.0));
        gl_FragColor = vec4(uColor, glow * smoothstep(0.5, 0.05, d) * vA);
      }
    `,
  });

  // Generación de geometría de puntos
  const pulsePos = [], pulseSeeds = [], posArr = wrapGeo.attributes.position.array;
  for (let i = 0; i < posArr.length; i += 9) {
    let u = Math.random(), v = Math.random(); if (u + v > 1) { u = 1 - u; v = 1 - v; }
    pulsePos.push(posArr[i]*u + posArr[i+3]*v + posArr[i+6]*(1-u-v), posArr[i+1]*u + posArr[i+4]*v + posArr[i+7]*(1-u-v), posArr[i+2]*u + posArr[i+5]*v + posArr[i+8]*(1-u-v));
    pulseSeeds.push(Math.random());
  }
  const pulseGeom = new THREE.BufferGeometry();
  pulseGeom.setAttribute("position", new THREE.Float32BufferAttribute(pulsePos, 3));
  pulseGeom.setAttribute("aSeed", new THREE.Float32BufferAttribute(pulseSeeds, 1));
  const pulsePoints = new THREE.Points(pulseGeom, pulseMat);

  const starPos = [], starSeeds = [];
  for (let i = 0; i < wrapGeo.attributes.position.count; i++) {
    if (Math.random() > (opts.starDensity ?? 0.22)) continue;
    starPos.push(wrapGeo.attributes.position.getX(i), wrapGeo.attributes.position.getY(i), wrapGeo.attributes.position.getZ(i));
    starSeeds.push(Math.random());
  }
  const starGeom = new THREE.BufferGeometry();
  starGeom.setAttribute("position", new THREE.Float32BufferAttribute(starPos, 3));
  starGeom.setAttribute("aSeed", new THREE.Float32BufferAttribute(starSeeds, 1));
  const starPoints = new THREE.Points(starGeom, starMat);

  const shell = new THREE.Group();
  shell.add(wrapGlowMesh, wrapMesh, pulsePoints, starPoints);
  const root = new THREE.Group();
  root.add(globe, glass, shell);
  scene.add(root);

  // Interacción
  const raycaster = new THREE.Raycaster();
  const ndc = new THREE.Vector2();

  function setHit(clientX, clientY, strength = 1.0) {
    const rect = canvas.getBoundingClientRect();
    ndc.set(((clientX - rect.left) / rect.width) * 2 - 1, -(((clientY - rect.top) / rect.height) * 2 - 1));
    raycaster.setFromCamera(ndc, camera);
    const hit = raycaster.intersectObject(wrapMesh, false)[0] || raycaster.intersectObject(globe, false)[0];
    if (!hit) return;
    const pLocal = wrapMesh.worldToLocal(hit.point.clone());
    wrapMat.uniforms.uHit.value.copy(pLocal); wrapMat.uniforms.uHitTime.value = wrapMat.uniforms.uTime.value;
    wrapGlowMat.uniforms.uHit.value.copy(pLocal); wrapGlowMat.uniforms.uHitTime.value = wrapMat.uniforms.uTime.value;
    pulseMat.uniforms.uHit.value.copy(pLocal); pulseMat.uniforms.uHitTime.value = pulseMat.uniforms.uTime.value;
  }

  let active = false, x0 = 0, y0 = 0, dx = 0, dy = 0;
  const onDown = (e) => { active = true; x0 = e.clientX; y0 = e.clientY; setHit(e.clientX, e.clientY, 1.35); };
  const onMove = (e) => { if (!active) return; dx = (5 * dx + (x0 - (x0 = e.clientX))) / 6; dy = (5 * dy + (y0 - (y0 = e.clientY))) / 6; };
  const onUp = () => (active = false);

  canvas.addEventListener("pointerdown", onDown, { passive: true });
  window.addEventListener("pointermove", onMove, { passive: true });
  window.addEventListener("pointerup", onUp, { passive: true });

  // LOOP
  let raf = 0;
  function tick(t) {
    raf = requestAnimationFrame(tick);
    const time = t * 0.001;
    wrapMat.uniforms.uTime.value = time;
    wrapGlowMat.uniforms.uTime.value = time;
    pulseMat.uniforms.uTime.value = time;
    starMat.uniforms.uTime.value = time;

    shell.rotateY(0.003);
    root.rotation.y -= dx * 0.005;
    root.rotation.x -= dy * 0.005;
    dx *= 0.95; dy *= 0.95;

    // ELIMINADA LA ACTUALIZACIÓN DE camera.position.z AQUÍ
    renderer.render(scene, camera);
  }

  const resize = () => {
    const parent = canvas.parentElement;
    const w = parent?.clientWidth || 1, h = parent?.clientHeight || 1;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, maxDpr));
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  };

  window.addEventListener("resize", resize, { passive: true });
  resize();
  tick(0);

  return {
    destroy() {
      cancelAnimationFrame(raf);
      canvas.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("resize", resize);
      renderer.dispose();
      globeGeo.dispose(); globeMat.dispose();
      wrapGeo.dispose(); wrapMat.dispose();
    }
  };
}