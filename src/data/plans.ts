export interface Plan {
  id: string;
  name: string;
  price: string;
  subtitle: string;
  features: string[];
  recommended?: boolean;
  highlight?: string;
  apps?: string[];
  ctaText?: string;
  category?: 'hogar' | 'internet' | 'movil';
}

export const homePlans: Plan[] = [
  {
    id: "internet-79k",
    name: "Internet Fibra 900 Mega",
    price: "79.900",
    subtitle: "Solo Internet",
    highlight: "Súper Precio",
    features: [
      "900 Megas (según cobertura)",
      "Incluye Amazon Prime (12 meses)",
      "Claro Drive 25GB incluido",
      "McAfee Premium (1 equipo)",
      "Telefonía Fija Ilimitada"
    ],
    apps: ["Amazon Prime"]
  },
  {
    id: "hogar-intermedio-2ott",
    name: "Tripleplay Intermedio Plus",
    price: "119.900",
    subtitle: "TV + Internet + Fija",
    recommended: true,
    highlight: "Más Vendido",
    features: [
      "Fibra 900 Megas",
      "Dos (2) OTT a elección",
      "TV Digital Intermedio Plus",
      "Dos (2) Decos (HD + Digital)",
      "Una (1) Asistencia a elección",
      "McAfee Premium (3 equipos)"
    ],
    apps: ["Netflix", "Win Play", "Max", "Disney+", "Prime Video"]
  },
  {
    id: "hogar-superior",
    name: "Tripleplay Superior",
    price: "129.900",
    subtitle: "Máxima Entretenimiento",
    highlight: "Oferta Premium",
    features: [
      "Fibra 900 Megas",
      "Dos (2) OTT a elección",
      "TV Digital Superior",
      "Dos (2) Decos (HD + Digital)",
      "Una (1) Asistencia Médica/Mascotas",
      "McAfee Premium (3 equipos)",
      "Todo Incluido"
    ],
    apps: ["Netflix", "Win Play", "Max", "Disney+", "Prime Video"]
  },
  {
    id: "internet-super-bundle",
    name: "Internet Súper Bundle",
    price: "109.900",
    subtitle: "Internet + 3 Apps",
    highlight: "Para Streamers",
    features: [
      "900 Megas Fibra Óptica",
      "HBO Max (Sin anuncios)",
      "Amazon Prime Video",
      "Win Play Incluido",
      "Claro Drive + McAfee",
      "Telefonía Fija Ilimitada"
    ],
    apps: ["HBO Max", "Amazon Prime", "Win Play"]
  }
];

export const mobilePlans: Plan[] = [
  {
    id: "movil-65gb",
    name: "65 GB",
    price: "53.900",
    subtitle: "Postpago",
    features: ["Minutos ilimitados", "Redes sin consumo", "Claro Video", "Música"]
  },
  {
    id: "movil-75gb",
    name: "75 GB",
    price: "56.900",
    subtitle: "Postpago",
    features: ["+ Amazon Prime", "Redes ilimitadas", "LDI ilimitado", "Drive"]
  },
  {
    id: "movil-100gb",
    name: "100 GB",
    price: "65.900",
    subtitle: "Recomendado",
    recommended: true,
    features: ["+ Amazon Prime", "Claro Video", "Drive 100GB", "LDI ilimitado"]
  },
  {
    id: "movil-130gb",
    name: "130 GB",
    price: "75.900",
    subtitle: "Postpago",
    features: ["+ Amazon Prime", "Todos los beneficios", "Roaming internacional"]
  },
  {
    id: "movil-libre",
    name: "Libre",
    price: "99.900",
    subtitle: "Datos Ilimitados",
    features: ["Netflix Incluido", "Amazon Prime", "Max Beneficios", "Premium"]
  }
];
