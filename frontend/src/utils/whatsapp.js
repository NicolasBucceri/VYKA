const WHATSAPP_NUMBER = "5491126154277";

const WHATSAPP_MESSAGES = {
  proyecto:
    "Hola equipo de VYKA, vi su sitio web y me gustaría hablar sobre mi proyecto.",

  diagnostico:
    "Hola equipo de VYKA, me gustaría iniciar un diagnóstico para evaluar mi proyecto o mi web.",

  soporte:
    "Hola equipo de VYKA, necesito conectar con soporte y hacer una consulta.",

  presupuesto:
    "Hola equipo de VYKA, me gustaría solicitar información sobre el desarrollo de una página web.",

  consulta:
    "Hola equipo de VYKA, vi su página y me gustaría hacer una consulta.",
};

export function openWhatsApp(type = "consulta") {
  const message = WHATSAPP_MESSAGES[type] || WHATSAPP_MESSAGES.consulta;

  const encoded = encodeURIComponent(message);

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;

  window.open(url, "_blank", "noopener,noreferrer");
}