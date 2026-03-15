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
      "Amazon Prime (12 meses)",
      "Claro Drive 25GB",
      "McAfee Premium",
      "Fija Ilimitada"
    ],
    apps: ["Amazon Prime"]
  },
  {
    id: "internet-89k",
    name: "Internet + 1 OTT",
    price: "89.900",
    subtitle: "Internet 900 Megas",
    highlight: "Ideal Streaming",
    features: [
      "Fibra 900 Megas",
      "1 OTT a elección",
      "Claro Drive 25GB",
      "McAfee Premium",
      "Fija Ilimitada"
    ],
    apps: ["Netflix", "Max", "Disney+", "Prime Video"]
  },
  {
    id: "internet-99k",
    name: "Internet + 2 OTT",
    price: "99.900",
    subtitle: "Internet 900 Megas",
    highlight: "Dúo Digital",
    features: [
      "Fibra 900 Megas",
      "2 OTT a elección",
      "Claro Drive 25GB",
      "McAfee Premium",
      "Fija Ilimitada"
    ],
    apps: ["Netflix", "Max", "Disney+", "Prime Video"]
  },
  {
    id: "hogar-duo-tv-104k",
    name: "Dúo TV + Internet",
    price: "104.900",
    subtitle: "TV Intermedio + Web",
    highlight: "Plan Familiar",
    features: [
      "Fibra 900 Megas",
      "TV Intermedio Plus",
      "1 OTT a elección",
      "1 Deco HD Incluido",
      "Fija Ilimitada"
    ],
    apps: ["Netflix", "Disney+", "Prime Video"]
  },
  {
    id: "internet-super-bundle",
    name: "Súper Bundle Internet",
    price: "109.900",
    subtitle: "Internet + 3 Apps",
    highlight: "Para Streamers",
    features: [
      "900 Megas Fibra",
      "HBO Max (Sin anuncios)",
      "Prime Video",
      "Win Play Incluido",
      "Fija Ilimitada"
    ],
    apps: ["HBO Max", "Prime Video", "Win Play"]
  },
  {
    id: "hogar-triple-promo-109k",
    name: "Tripleplay Promo",
    price: "109.900",
    subtitle: "TV + Internet + Fija",
    highlight: "Todo en Uno",
    features: [
      "Fibra 900 Megas",
      "TV Intermedio Plus",
      "1 OTT a elección",
      "2 Decos Incluidos",
      "1 Asistencia"
    ],
    apps: ["Netflix", "Prime Video", "Disney+"]
  },
  {
    id: "hogar-intermedio-119k",
    name: "Tripleplay Intermedio Plus",
    price: "119.900",
    subtitle: "TV + Internet + Fija",
    recommended: true,
    highlight: "Más Vendido",
    features: [
      "Fibra 900 Megas",
      "2 OTT a elección",
      "TV Intermedio Plus",
      "2 Decos Incluidos",
      "1 Asistencia"
    ],
    apps: ["Netflix", "Win Play", "Max", "Disney+", "Prime Video"]
  },
  {
    id: "hogar-superior-129k",
    name: "Tripleplay Superior",
    price: "129.900",
    subtitle: "Premium TV",
    highlight: "Máximo Nivel",
    features: [
      "Fibra 900 Megas",
      "2 OTT a elección",
      "TV Digital Superior",
      "2 Decos Incluidos",
      "Asistencia Médica"
    ],
    apps: ["Netflix", "Win Play", "Max", "Disney+", "Prime Video"]
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
