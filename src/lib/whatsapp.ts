const WHATSAPP_PHONE = "254742405841";

const CATALOG_MESSAGE = `Thank you for choosing Vape Nation KE! How may we be of help?`;

export const getWhatsAppCatalogUrl = () => {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(CATALOG_MESSAGE)}`;
};
