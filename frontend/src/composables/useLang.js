import { ref } from "vue";
import es from "@/lang/es.json";
import en from "@/lang/en.json";

const STORAGE_KEY = "vyka_lang";

const messages = { es, en };

// detectar idioma inicial
function getInitialLang() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved && messages[saved]) return saved;

  const browser = navigator.language?.slice(0, 2);
  if (messages[browser]) return browser;

  return "es";
}

const lang = ref(getInitialLang());

// aplicar idioma al HTML
document.documentElement.lang = lang.value;

export function useLang() {

  const setLang = (newLang) => {
    if (!messages[newLang]) return;

    lang.value = newLang;
    localStorage.setItem(STORAGE_KEY, newLang);

    // accesibilidad + SEO
    document.documentElement.lang = newLang;
  };

  const t = (key) => {
    const parts = key.split(".");
    let value = messages[lang.value];

    for (const p of parts) {
      value = value?.[p];
    }

    return value ?? key;
  };

  return {
    lang,
    setLang,
    t
  };
}