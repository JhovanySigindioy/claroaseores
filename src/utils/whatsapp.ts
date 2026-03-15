export const CONTACT_NUMBER = "573024902653";

export const openWhatsApp = (planName: string) => {
  const message = `Hola José, estoy interesado en el plan ${planName}. Me gustaría recibir más información para contratarlo.`;
  const url = `https://api.whatsapp.com/send?phone=${CONTACT_NUMBER}&text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
};
