"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "en" | "hi" | "es" | "zh" | "ru" | "ko" | "ja";

export interface LanguageOption {
  code: Language;
  label: string;
  nativeLabel: string;
  flag: string;
}

export const LANGUAGES: LanguageOption[] = [
  { code: "en", label: "English", nativeLabel: "English", flag: "🇺🇸" },
  { code: "hi", label: "Hindi", nativeLabel: "हिंदी", flag: "🇮🇳" },
  { code: "es", label: "Spanish", nativeLabel: "Español", flag: "🇪🇸" },
  { code: "zh", label: "Chinese", nativeLabel: "中文", flag: "🇨🇳" },
  { code: "ru", label: "Russian", nativeLabel: "Русский", flag: "🇷🇺" },
  { code: "ko", label: "Korean", nativeLabel: "한국어", flag: "🇰🇷" },
  { code: "ja", label: "Japanese", nativeLabel: "日本語", flag: "🇯🇵" },
];

export interface FeaturedWorkItem {
  id: string;
  name: string;
  category: string;
  headline: string;
  description: string;
  src: string;
}

export interface Translations {
  navbar: {
    work: string;
    clients: string;
    branding: string;
    digitalPerformance: string;
    about: string;
    letsTalk: string;
    menu: string;
  };
  hero: {
    category: string;
    heading1: string;
    heading2: string;
    heading3: string;
    subtitle: string;
    auditBtn: string;
    callBtn: string;
  };
  partners: {
    trustedBy: string;
    headline: string;
    viewAll: string;
    title: string;
  };
  whatWeDo: {
    tag: string;
    titleStart: string;
    titleHighlight: string;
    subtitle: string;
    card1: {
      tag: string;
      title: string;
      desc: string;
      pills: string[];
      btn: string;
    };
    card2: {
      tag: string;
      title: string;
      desc: string;
      pills: string[];
      btn: string;
    };
  };
  featuredWork: {
    tag: string;
    titlePart1: string;
    titleHighlight: string;
    viewAll: string;
    viewWorkBtn: string;
    items: FeaturedWorkItem[];
  };
  about: {
    tag: string;
    description: string;
    storyTitle: string;
    storyDesc: string;
    missionTitle: string;
    missionDesc: string;
    learnMoreBtn: string;
  };
  nextDecade: {
    titleLine1: string;
    titleLine2: string;
    titleLine3: string;
    titleLine4: string;
    description: string;
  };
}

export const defaultFeaturedWorkItems: FeaturedWorkItem[] = [
  {
    id: "creative1",
    name: "Smokey Lounge",
    category: "HOSPITALITY & DINING",
    headline: "Culinary Elegance Under The Stars",
    description: "End-to-end launch branding and experiential digital campaign for Smokey's flagship rooftop lounge.",
    src: "/creative1.png",
  },
  {
    id: "creative2",
    name: "PM GatiShakti",
    category: "PUBLIC SECTOR & POLICY",
    headline: "National Logistics Policy Launch",
    description: "Omnichannel digital rollout and media broadcast for the National Logistics Policy with NICDC.",
    src: "/creative2.png",
  },
  {
    id: "creative3",
    name: "The Sell Campaign",
    category: "ADVERTISING & COPY",
    headline: "The More You Tell, The More You Sell",
    description: "High-conversion retro print and performance copy strategy driving 4.2x ROAS in omnichannel retail.",
    src: "/creative3.png",
  },
  {
    id: "creative4",
    name: "Pasta Delizioso",
    category: "FOOD & GOURMET",
    headline: "Alfredo Panne Chicken Gourmet",
    description: "Visual identity and mouth-watering performance creative campaign for artisanal gourmet dining.",
    src: "/creative4.png",
  },
  {
    id: "creative5",
    name: "Let's Do Lunch",
    category: "EDITORIAL & CAFE",
    headline: "Vintage Editorial Dining Campaign",
    description: "Atmospheric newspaper-style creative concept and localized activation for urban cafes.",
    src: "/creative5.png",
  },
  {
    id: "creative6",
    name: "Berry Basil Lady",
    category: "BEVERAGE & MIXOLOGY",
    headline: "Signature Drink Deserves Attention",
    description: "Craft cocktail digital visual campaign that generated 1.2M+ organic impressions.",
    src: "/creative6.png",
  },
  {
    id: "creative7",
    name: "Weekend Personality",
    category: "EXPERIENTIAL & NIGHTLIFE",
    headline: "Your Weekend Personality Lives Here",
    description: "Vibrant personality-led social campaign for leading nightlife and weekend destinations.",
    src: "/creative7.png",
  },
];

export const translations: Record<Language, Translations> = {
  en: {
    navbar: {
      work: "Work",
      clients: "Clients",
      branding: "Branding",
      digitalPerformance: "Digital & Performance",
      about: "About",
      letsTalk: "Let's Talk",
      menu: "Menu",
    },
    hero: {
      category: "Search · Conversion · Growth",
      heading1: "YOUR BRAND",
      heading2: "DESERVES",
      heading3: "ATTENTION.",
      subtitle:
        "We are the integrated search, conversion, and performance engine that gets startups noticed. We build high-impact growth pipelines so your brand can show up, stand out, and scale faster.",
      auditBtn: "Run Free SEO Audit",
      callBtn: "Book an Intro Call",
    },
    partners: {
      trustedBy: "Trusted By",
      headline: "We don't believe in monogamy – we keep every client happy at once.",
      viewAll: "View all clients",
      title: "Trusted by Leading Emerging Brands",
    },
    whatWeDo: {
      tag: "What We Do",
      titleStart: "What can we do ",
      titleHighlight: "together?",
      subtitle:
        "Trends, technology and tactics are never stagnant – and neither are we. Two practices, one integrated team.",
      card1: {
        tag: "The Industry Practice",
        title: "Industries",
        desc: "From high-growth D2C and B2B SaaS to FinTech and HealthTech — specialized growth architectures tailored for your specific domain.",
        pills: [
          "D2C & E-Commerce",
          "B2B SaaS & Tech",
          "FinTech & Web3",
          "HealthTech & Wellness",
          "AI & DeepTech Startups",
          "EdTech & Creator Economy",
          "Real Estate & PropTech",
          "Mobility & CleanTech",
        ],
        btn: "Explore Industries",
      },
      card2: {
        tag: "The Growth Practice",
        title: "Digital & Performance",
        desc: "The always-on engine – presence, traffic and pipeline, engineered to measurable metrics and positive ROI.",
        pills: [
          "Website & App Development",
          "SEO · AEO · GEO",
          "Social Media Marketing",
          "Performance Marketing",
          "Performance Content",
          "Content Marketing",
          "Influencer Marketing",
          "Email & Automation",
          "ORM & Analytics",
        ],
        btn: "Explore Digital",
      },
    },
    featuredWork: {
      tag: "Featured Work",
      titlePart1: "A lot of buzz. ",
      titleHighlight: "Less scroll.",
      viewAll: "View all work",
      viewWorkBtn: "View work",
      items: defaultFeaturedWorkItems,
    },
    about: {
      tag: "ABOUT OWLIO WORKS",
      description:
        "Owlio Works is a digital growth and engineering studio based in India & globally, specializing in secure, scalable search systems and modern digital platforms for high-growth businesses. We are your end-to-end technical growth partner, focused on building enterprise infrastructure that lasts.",
      storyTitle: "OUR STORY",
      storyDesc:
        "Founded by seasoned growth architects and software engineers, Owlio Works was born to break away from sluggish agency retainers. We replace bureaucratic meetings with relentless technical execution—engineering search algorithms, high-conversion funnels, and scalable architectures that drive real enterprise revenue.",
      missionTitle: "OUR MISSION",
      missionDesc:
        "To empower visionary founders and global brands with resilient digital infrastructure, unmatched search dominance, and conversion excellence that endures across algorithmic shifts.",
      learnMoreBtn: "LEARN MORE",
    },
    nextDecade: {
      titleLine1: "BUILT FOR",
      titleLine2: "THE",
      titleLine3: "NEXT",
      titleLine4: "DECADE.",
      description:
        "WE ENGINEER INFRASTRUCTURE FOR ENDURING SUCCESS. OUR MANDATE IS TO FUSE TECHNICAL INTEGRITY WITH SUPERIOR PRODUCT DESIGN, DELIVERING SCALABLE, SECURE ASSETS AND HIGH-CONVERSION EXPERIENCES THAT ENDURE FOR THE NEXT DECADE.",
    },
  },
  hi: {
    navbar: {
      work: "हमारा काम",
      clients: "क्लाइंट्स",
      branding: "ब्रांडिंग",
      digitalPerformance: "डिजिटल और परफॉर्मेंस",
      about: "हमारे बारे में",
      letsTalk: "बात करें",
      menu: "मेनू",
    },
    hero: {
      category: "सर्च · रूपांतरण · विकास",
      heading1: "आपका ब्रांड",
      heading2: "हकदार है",
      heading3: "अटेंशन का.",
      subtitle:
        "हम एक इंटीग्रेटेड सर्च, रूपांतरण और परफॉर्मेंस इंजन हैं जो स्टार्टअप्स को खास पहचान दिलाते हैं। हम हाई-इम्पैक्ट ग्रोथ पाइपलाइन तैयार करते हैं ताकि आपका ब्रांड आगे बढ़े, अलग दिखे और तेजी से स्केल करे।",
      auditBtn: "मुफ्त SEO ऑडिट करें",
      callBtn: "इंट्रो कॉल बुक करें",
    },
    partners: {
      trustedBy: "विश्वसनीय भागीदार",
      headline: "हम सिर्फ एक तक सीमित नहीं रहते — हम हर क्लाइंट को एक साथ खुश और सफल रखते हैं।",
      viewAll: "सभी क्लाइंट्स देखें",
      title: "उभरते शीर्ष ब्रांड्स द्वारा विश्वसनीय",
    },
    whatWeDo: {
      tag: "हम क्या करते हैं",
      titleStart: "हम मिलकर क्या कर सकते ",
      titleHighlight: "हैं?",
      subtitle:
        "ट्रेंड्स, तकनीक और रणनीतियां कभी स्थिर नहीं रहतीं — और न ही हम। दो मजबूत विशेषज्ञताएं, एक एकीकृत टीम।",
      card1: {
        tag: "उद्योग विशेषज्ञता",
        title: "प्रमुख उद्योग",
        desc: "D2C और SaaS से लेकर फिनटेक और हेल्थटेक तक — आपके क्षेत्र के लिए विशेष रूप से तैयार किए गए ग्रोथ सिस्टम।",
        pills: [
          "D2C और ई-कॉमर्स",
          "B2B SaaS और टेक",
          "फिनटेक और Web3",
          "हेल्थटेक और वेलनेस",
          "AI और डीपटेक",
          "एडटेक और क्रिएटर्स",
          "रियल एस्टेट और प्रॉपटेक",
          "क्लीनटेक और मोबिलिटी",
        ],
        btn: "उद्योग देखें",
      },
      card2: {
        tag: "ग्रोथ विशेषज्ञता",
        title: "डिजिटल और परफॉर्मेंस",
        desc: "सदा सक्रिय विकास इंजन — ट्रैफिक, विजिबिलिटी और वास्तविक रिटर्न देने वाली सटीक मार्केटिंग प्रणाली।",
        pills: [
          "वेबसाइट और ऐप विकास",
          "SEO · AEO · GEO",
          "सोशल मीडिया मार्केटिंग",
          "परफॉर्मेंस मार्केटिंग",
          "परफॉर्मेंस कंटेंट",
          "कंटेंट मार्केटिंग",
          "इन्फ्लुएंसर मार्केटिंग",
          "ईमेल और ऑटोमेशन",
          "ORM और एनालिटिक्स",
        ],
        btn: "डिजिटल सेवाएं देखें",
      },
    },
    featuredWork: {
      tag: "प्रमुख कार्य",
      titlePart1: "जबरदस्त चर्चा। ",
      titleHighlight: "कम स्क्रॉल।",
      viewAll: "सभी कार्य देखें",
      viewWorkBtn: "कार्य देखें",
      items: defaultFeaturedWorkItems,
    },
    about: {
      tag: "OWLIO WORKS के बारे में",
      description:
        "Owlio Works भारत और वैश्विक स्तर पर स्थित एक डिजिटल ग्रोथ और इंजीनियरिंग स्टूडियो है, जो आधुनिक व्यवसायों के लिए सुरक्षित, स्केलेबल सर्च सिस्टम और डिजिटल प्लेटफॉर्म बनाने में विशेषज्ञता रखता है। हम आपके एंड-टू-एंड तकनीकी भागीदार हैं, जो टिकाऊ इंफ्रास्ट्रक्चर के निर्माण पर केंद्रित हैं।",
      storyTitle: "हमारी कहानी",
      storyDesc:
        "अनुभवी ग्रोथ आर्किटेक्ट्स द्वारा स्थापित, Owlio Works पारंपरिक एजेंसियों के सुस्त तरीकों को बदलने के लिए बना है। हम व्यर्थ की मीटिंग्स की जगह तकनीकी निष्पादन को प्राथमिकता देते हैं।",
      missionTitle: "हमारा मिशन",
      missionDesc:
        "महत्वाकांक्षी संस्थापकों और वैश्विक ब्रांड्स को लचीले डिजिटल इंफ्रास्ट्रक्चर, मजबूत सर्च दबदबे और उच्च-रूपांतरण अनुभवों से सशक्त बनाना।",
      learnMoreBtn: "और जानें",
    },
    nextDecade: {
      titleLine1: "अगले दशक",
      titleLine2: "के लिए",
      titleLine3: "तैयार",
      titleLine4: "सिस्टम।",
      description:
        "हम दीर्घकालिक सफलता के लिए तकनीकी इंफ्रास्ट्रक्चर का निर्माण करते हैं। हमारा उद्देश्य तकनीकी मजबूती को उत्कृष्ट उत्पाद डिजाइन के साथ जोड़ना है, ताकि ऐसे अनुभव मिलें जो अगले दशक तक टिके रहें।",
    },
  },
  es: {
    navbar: {
      work: "Trabajos",
      clients: "Clientes",
      branding: "Branding",
      digitalPerformance: "Digital y Rendimiento",
      about: "Nosotros",
      letsTalk: "Hablemos",
      menu: "Menú",
    },
    hero: {
      category: "Búsqueda · Conversión · Crecimiento",
      heading1: "TU MARCA",
      heading2: "MERECE",
      heading3: "ATENCIÓN.",
      subtitle:
        "Somos el motor integrado de búsqueda, conversión y rendimiento que hace destacar a las startups. Construimos canales de crecimiento de alto impacto para que tu marca se posicione, destaque y escale más rápido.",
      auditBtn: "Auditoría SEO Gratis",
      callBtn: "Reservar Llamada",
    },
    partners: {
      trustedBy: "Confiado Por",
      headline: "No creemos en la exclusividad única: mantenemos satisfecho a cada cliente a la vez.",
      viewAll: "Ver todos los clientes",
      title: "Confiado por Marcas Líderes",
    },
    whatWeDo: {
      tag: "Lo Que Hacemos",
      titleStart: "¿Qué podemos lograr ",
      titleHighlight: "juntos?",
      subtitle:
        "Las tendencias, la tecnología y las tácticas nunca se detienen, y nosotros tampoco. Dos áreas de práctica, un equipo integrado.",
      card1: {
        tag: "Especialización Sectorial",
        title: "Industrias",
        desc: "Desde D2C y SaaS B2B hasta FinTech y HealthTech: arquitecturas de crecimiento especializadas para su sector.",
        pills: [
          "D2C y Comercio Electrónico",
          "B2B SaaS y Tecnología",
          "FinTech y Web3",
          "HealthTech y Bienestar",
          "Startups de IA y DeepTech",
          "EdTech y Creadores",
          "Bienes Raíces y PropTech",
          "Movilidad y CleanTech",
        ],
        btn: "Explorar Industrias",
      },
      card2: {
        tag: "Área de Crecimiento",
        title: "Digital y Rendimiento",
        desc: "El motor siempre activo: visibilidad, tráfico y ventas optimizadas para un ROI medible y comprobable.",
        pills: [
          "Desarrollo Web y Apps",
          "SEO · AEO · GEO",
          "Marketing en Redes Sociales",
          "Marketing de Rendimiento",
          "Contenido de Rendimiento",
          "Marketing de Contenidos",
          "Marketing de Influencers",
          "Email y Automatización",
          "ORM y Analítica",
        ],
        btn: "Explorar Digital",
      },
    },
    featuredWork: {
      tag: "Trabajos Destacados",
      titlePart1: "Gran impacto. ",
      titleHighlight: "Menos scroll.",
      viewAll: "Ver todos los trabajos",
      viewWorkBtn: "Ver trabajo",
      items: defaultFeaturedWorkItems,
    },
    about: {
      tag: "SOBRE OWLIO WORKS",
      description:
        "Owlio Works es un estudio de ingeniería digital y crecimiento con sede en India y alcance global, especializado en sistemas de software seguros y escalables para empresas modernas. Somos su socio técnico integral, enfocado en construir infraestructura empresarial duradera.",
      storyTitle: "NUESTRA HISTORIA",
      storyDesc:
        "Fundada por arquitectos de crecimiento e ingenieros de software, Owlio Works nació para sustituir las agencias lentas tradicionales por ejecución técnica de precisión.",
      missionTitle: "NUESTRA MISIÓN",
      missionDesc:
        "Capacitar a fundadores visionarios y marcas globales con infraestructura digital resiliente y máxima autoridad de búsqueda.",
      learnMoreBtn: "SABER MÁS",
    },
    nextDecade: {
      titleLine1: "CONSTRUIDO",
      titleLine2: "PARA LA",
      titleLine3: "PRÓXIMA",
      titleLine4: "DÉCADA.",
      description:
        "DISEÑAMOS INFRAESTRUCTURA PARA UN ÉXITO DURADERO. NUESTRO MANDATO ES FUSIONAR LA INTEGRIDAD TÉCNICA CON EL DISEÑO DE PRODUCTO SUPERIOR, OFRECIENDO ACTIVOS ESCALABLES Y EXPERIENCIAS QUE PERDUREN LA PRÓXIMA DÉCADA.",
    },
  },
  zh: {
    navbar: {
      work: "案例作品",
      clients: "合作客户",
      branding: "品牌策划",
      digitalPerformance: "数字与效果增长",
      about: "关于我们",
      letsTalk: "立即洽谈",
      menu: "菜单",
    },
    hero: {
      category: "搜索 · 转化 · 增长",
      heading1: "让你的品牌",
      heading2: "获得瞩目",
      heading3: "焦点关注。",
      subtitle:
        "我们是一家集搜索优化、高转化与效果增长于一体的引擎，助力初创企业迅速脱颖而出。我们打造高影响力的增长管道，让您的品牌展露锋芒、保持领先并加速扩张。",
      auditBtn: "获取免费SEO审计",
      callBtn: "预约咨询通话",
    },
    partners: {
      trustedBy: "信赖品牌",
      headline: "我们专注服务每一位客户 — 同时让每一个品牌实现突破性增长。",
      viewAll: "查看全部客户",
      title: "深受新锐领军品牌信赖",
    },
    whatWeDo: {
      tag: "业务板块",
      titleStart: "我们能共同成就",
      titleHighlight: "什么？",
      subtitle:
        "趋势、技术与策略瞬息万变 — 我们始终快人一步。两大专业实践，一支全能团队。",
      card1: {
        tag: "垂直行业实践",
        title: "专注行业",
        desc: "从D2C电商、企业SaaS到金融科技与健康科技 — 量身定制的高成效增长架构。",
        pills: [
          "D2C 与品牌电商",
          "B2B SaaS 与科技",
          "金融科技 与 Web3",
          "健康科技 与 营养健康",
          "AI 与硬科技初创",
          "教育科技 与 创作者经济",
          "房地产 与 房产科技",
          "出行 与 清洁能源",
        ],
        btn: "了解专注行业",
      },
      card2: {
        tag: "增长实践",
        title: "数字与效果增长",
        desc: "全天候运转的增长引擎 — 精准流量、曝光与高转化销售漏斗，直接带来投资回报率。",
        pills: [
          "网站与应用开发",
          "SEO · AEO · GEO",
          "社交媒体营销",
          "效果营销与广告",
          "高转化内容产出",
          "内容营销策略",
          "KOL红人营销",
          "邮件营销与自动化",
          "口碑管理与数据分析",
        ],
        btn: "探索数字方案",
      },
    },
    featuredWork: {
      tag: "精选案例",
      titlePart1: "引爆关注度。 ",
      titleHighlight: "告别冗长浏览。",
      viewAll: "查看全部案例",
      viewWorkBtn: "查看项目",
      items: defaultFeaturedWorkItems,
    },
    about: {
      tag: "关于 OWLIO WORKS",
      description:
        "Owlio Works 是一家总部位于印度并辐射全球的数字增长与工程工作室，专注于为现代企业构建安全、可扩展的软件系统与搜索架构。我们是您全方位的技术增长伙伴，致力于打造经久不衰的企业级基础设施。",
      storyTitle: "发展历程",
      storyDesc:
        "由资深增长架构师与软件工程师共同创立，Owlio Works 旨在打破传统代理商冗长的会议体制，以极致的技术执行力为品牌创造实打实的业务增长。",
      missionTitle: "核心使命",
      missionDesc:
        "赋能全球雄心勃勃的创业者与知名品牌，打造抗风险的数字基础设施、无可匹敌的搜索主导地位与高转化体验。",
      learnMoreBtn: "了解更多",
    },
    nextDecade: {
      titleLine1: "为下一个",
      titleLine2: "十年",
      titleLine3: "精心",
      titleLine4: "铸就。",
      description:
        "我们为企业的长久成功构筑数字化基石。我们的使命是将坚实的技术底座与卓越的产品设计深度融合，交付经久不衰的高转化体验。",
    },
  },
  ru: {
    navbar: {
      work: "Работы",
      clients: "Клиенты",
      branding: "Брендинг",
      digitalPerformance: "Digital & Перформанс",
      about: "О нас",
      letsTalk: "Обсудить проект",
      menu: "Меню",
    },
    hero: {
      category: "Поиск · Конверсия · Рост",
      heading1: "ВАШ БРЕНД",
      heading2: "ЗАСЛУЖИВАЕТ",
      heading3: "ВНИМАНИЯ.",
      subtitle:
        "Мы — комплексный движок поиска, конверсий и перформанс-маркетинга, который делает стартапы заметными. Мы создаем высокоэффективные воронки роста, чтобы ваш бренд лидировал и масштабировался быстрее.",
      auditBtn: "Бесплатный SEO-аудит",
      callBtn: "Записаться на звонок",
    },
    partners: {
      trustedBy: "Нам доверяют",
      headline: "Мы не ограничиваемся одним проектом — мы делаем счастливым каждого клиента одновременно.",
      viewAll: "Все клиенты",
      title: "Нам доверяют растущие бренды",
    },
    whatWeDo: {
      tag: "Что мы делаем",
      titleStart: "Чего мы можем достичь ",
      titleHighlight: "вместе?",
      subtitle:
        "Тренды, технологии и тактики не стоят на месте — и мы тоже. Два направления, одна сплоченная команда.",
      card1: {
        tag: "Отраслевая экспертиза",
        title: "Индустрии",
        desc: "От быстрорастущих D2C и B2B SaaS до FinTech и HealthTech — специализированные стратегии под ваш сегмент.",
        pills: [
          "D2C и Электронная коммерция",
          "B2B SaaS и Технологии",
          "FinTech и Web3",
          "HealthTech и Здоровье",
          "AI и DeepTech Стартапы",
          "EdTech и Создатели контента",
          "Недвижимость и PropTech",
          "Мобильность и CleanTech",
        ],
        btn: "Смотреть индустрии",
      },
      card2: {
        tag: "Практика роста",
        title: "Digital & Перформанс",
        desc: "Движок постоянного роста — узнаваемость, органический трафик и воронки с прозрачным ROI.",
        pills: [
          "Разработка сайтов и приложений",
          "SEO · AEO · GEO",
          "SMM Продвижение",
          "Перформанс маркетинг",
          "Конверсионный контент",
          "Контент маркетинг",
          "Работа с инфлюенсерами",
          "Email & Автоматизация",
          "ORM & Аналитика данных",
        ],
        btn: "Смотреть Digital",
      },
    },
    featuredWork: {
      tag: "Избранные работы",
      titlePart1: "Максимум шума. ",
      titleHighlight: "Минимум скролла.",
      viewAll: "Все кейсы",
      viewWorkBtn: "Смотреть кейс",
      items: defaultFeaturedWorkItems,
    },
    about: {
      tag: "О КОМПАНИИ OWLIO WORKS",
      description:
        "Owlio Works — студия цифровой инженерии и органического роста со штаб-квартирой в Индии и глобальным охватом, специализирующаяся на безопасных, масштабируемых программных системах для современного бизнеса. Мы — ваш комплексный технический партнер.",
      storyTitle: "НАША ИСТОРИЯ",
      storyDesc:
        "Созданная опытными архитекторами роста, Owlio Works заменила медлительные агентства быстрой и бескомпромиссной технической разработкой.",
      missionTitle: "НАША МИССИЯ",
      missionDesc:
        "Обеспечить дальновидных основателей надежной цифровой инфраструктурой и абсолютным доминированием в поиске.",
      learnMoreBtn: "ПОДРОБНЕЕ",
    },
    nextDecade: {
      titleLine1: "СОЗДАНО",
      titleLine2: "ДЛЯ",
      titleLine3: "СЛЕДУЮЩЕГО",
      titleLine4: "ДЕСЯТИЛЕТИЯ.",
      description:
        "МЫ СОЗДАЕМ ИНФРАСТРУКТУРУ ДЛЯ ДОЛГОСРОЧНОГО УСПЕХА. НАША ЦЕЛЬ — ОБЪЕДИНИТЬ ТЕХНИЧЕСКУЮ НАДЕЖНОСТЬ С ВЫСОКИМ ДИЗАЙНОМ, ОБЕСПЕЧИВАЯ МАСШТАБИРУЕМЫЕ РЕШЕНИЯ НА ДЕСЯТИЛЕТИЯ ВПЕРЕД.",
    },
  },
  ko: {
    navbar: {
      work: "프로젝트",
      clients: "고객사",
      branding: "브랜딩",
      digitalPerformance: "디지털 & 퍼포먼스",
      about: "회사 소개",
      letsTalk: "상담 시작",
      menu: "메뉴",
    },
    hero: {
      category: "검색 · 전환 · 성장",
      heading1: "당신의 브랜드는",
      heading2: "주목받을",
      heading3: "자격이 있습니다.",
      subtitle:
        "스타트업을 돋보이게 만드는 검색, 전환, 퍼포먼스 통합 엔진입니다. 귀사의 브랜드가 눈에 띄고 빠르게 확장할 수 있도록 강력한 성장 파이프라인을 구축합니다.",
      auditBtn: "무료 SEO 진단 신청",
      callBtn: "소개 상담 예약",
    },
    partners: {
      trustedBy: "파트너 신뢰",
      headline: "우리는 모든 고객사를 동시에 만족시키며 최고의 성장을 이끕니다.",
      viewAll: "고객사 전체 보기",
      title: "글로벌 유망 브랜드들이 신뢰하는 파트너",
    },
    whatWeDo: {
      tag: "서비스 소개",
      titleStart: "우리가 함께 만들 수 있는 ",
      titleHighlight: "것은?",
      subtitle:
        "트렌드, 기술, 전략은 결코 멈추지 않으며 우리도 마찬가지입니다. 두 가지 전문 분야, 하나의 통합 팀.",
      card1: {
        tag: "산업별 전문 영역",
        title: "주요 산업군",
        desc: "D2C 커머스 및 B2B SaaS부터 핀테크, 헬스케어까지 — 귀사의 비즈니스에 최적화된 성장 아키텍처.",
        pills: [
          "D2C & 이커머스",
          "B2B SaaS & IT 테크",
          "핀테크 & Web3",
          "디지털 헬스케어 & 웰니스",
          "인공지능(AI) & 딥테크",
          "에듀테크 & 크리에이터",
          "부동산 & 프롭테크",
          "모빌리티 & 친환경 기술",
        ],
        btn: "산업 분야 보기",
      },
      card2: {
        tag: "그로스 실무 영역",
        title: "디지털 & 퍼포먼스",
        desc: "상시 가동되는 성장 엔진 — 인지도, 트래픽, 세일즈 파이프라인을 정밀한 수치와 ROI로 증명합니다.",
        pills: [
          "웹사이트 & 앱 개발",
          "SEO · AEO · GEO",
          "소셜 미디어 마케팅",
          "퍼포먼스 마케팅",
          "고전환 콘텐츠 제작",
          "콘텐츠 마케팅 전략",
          "인플루언서 마케팅",
          "이메일 & 자동화 마케팅",
          "브랜드 평판 & 데이터 분석",
        ],
        btn: "디지털 서비스 보기",
      },
    },
    featuredWork: {
      tag: "주요 프로젝트",
      titlePart1: "압도적인 화제성. ",
      titleHighlight: "간결한 스크롤.",
      viewAll: "전체 프로젝트 보기",
      viewWorkBtn: "작품 보기",
      items: defaultFeaturedWorkItems,
    },
    about: {
      tag: "OWLIO WORKS 소개",
      description:
        "Owlio Works는 인도와 글로벌 전역에서 활동하는 디지털 엔지니어링 및 성장 스튜디오로, 현대 기업을 위한 안전하고 확장 가능한 소프트웨어 시스템 구축을 전문으로 합니다. 우리는 지속 가능한 기업 인프라를 구축하는 엔드투엔드 파트너입니다.",
      storyTitle: "우리의 이야기",
      storyDesc:
        "성장 아키텍트와 소프트웨어 엔지니어들이 설립한 Owlio Works는 비효율적인 대행사 관행을 깨고 정밀한 기술 실행으로 비즈니스 성장을 만듭니다.",
      missionTitle: "우리의 미션",
      missionDesc:
        "비전 있는 창업자와 글로벌 브랜드에 견고한 디지털 인프라와 강력한 검색 지배력을 제공하는 것입니다.",
      learnMoreBtn: "더 알아보기",
    },
    nextDecade: {
      titleLine1: "다음 10년을",
      titleLine2: "위해",
      titleLine3: "설계된",
      titleLine4: "시스템.",
      description:
        "우리는 지속적인 성공을 위한 인프라를 설계합니다. 기술적 완성도와 탁월한 제품 디자인을 결합하여 향후 10년간 지속될 확장 가능하고 안전한 경험을 제공합니다.",
    },
  },
  ja: {
    navbar: {
      work: "実績",
      clients: "クライアント",
      branding: "ブランディング",
      digitalPerformance: "デジタル＆成果創出",
      about: "会社概要",
      letsTalk: "お問い合わせ",
      menu: "メニュー",
    },
    hero: {
      category: "検索 · コンバージョン · 成長",
      heading1: "あなたのブランドは",
      heading2: "注目される",
      heading3: "価値がある。",
      subtitle:
        "スタートアップの存在感を最大化する検索、コンバージョン、パフォーマンス統合エンジンです。ブランドが際立ち、迅速にスケールするための成長パイプラインを構築します。",
      auditBtn: "無料SEO診断を実施",
      callBtn: "オンライン相談を予約",
    },
    partners: {
      trustedBy: "導入実績",
      headline: "私たちはすべてのクライアントを同時に満足させ、確かな成果を提供します。",
      viewAll: "すべてのクライアントを見る",
      title: "成長著しい新鋭ブランドから選ばれる信頼",
    },
    whatWeDo: {
      tag: "提供ソリューション",
      titleStart: "共に創り出せる",
      titleHighlight: "価値とは？",
      subtitle:
        "トレンドや技術は常に進化しています。私たちは常に先を行きます。2つの専門領域、1つの統合チーム。",
      card1: {
        tag: "業界別ソリューション",
        title: "対応業界",
        desc: "D2C、B2B SaaSからFinTech、HealthTechまで — 貴社ドメインに特化した成長アーキテクチャを構築。",
        pills: [
          "D2C & Eコマース",
          "B2B SaaS & ITテクノロジー",
          "FinTech & Web3",
          "HealthTech & ウェルネス",
          "AI & ディープテック",
          "EdTech & クリエイター",
          "不動産 & PropTech",
          "モビリティ & クリーンテック",
        ],
        btn: "業界分野を見る",
      },
      card2: {
        tag: "成長グロース領域",
        title: "デジタル＆パフォーマンス",
        desc: "常に稼働する成長エンジン — 確かな認知、トラフィック、パイプラインを数値とROIで証明します。",
        pills: [
          "Web・アプリ開発",
          "SEO · AEO · GEO",
          "SNSマーケティング",
          "成果報酬型パフォーマンス広告",
          "高CVコンテンツ制作",
          "コンテンツマーケティング",
          "インフルエンサーマーケティング",
          "メール＆自動化マーケティング",
          "ブランド評価＆データ解析",
        ],
        btn: "デジタル領域を見る",
      },
    },
    featuredWork: {
      tag: "注目の実績",
      titlePart1: "圧倒的な反響。 ",
      titleHighlight: "無駄のないスクロール。",
      viewAll: "すべての実績を見る",
      viewWorkBtn: "実績を見る",
      items: defaultFeaturedWorkItems,
    },
    about: {
      tag: "OWLIO WORKS について",
      description:
        "Owlio Works は、インドおよびグローバルに展開するデジタルエンジニアリング＆グローススタジオです。最新企業向けの安全で拡張性の高いソフトウェアシステムと検索基盤の構築を専門としています。長年持続するエンタープライズインフラを支える技術パートナーです。",
      storyTitle: "ストーリー",
      storyDesc:
        "経験豊富なグロースアーキテクトとエンジニアによって設立された Owlio Works は、従来の非効率な代理店体制を脱却し、確固たる技術力で本質的な売上成長を実現します。",
      missionTitle: "ミッション",
      missionDesc:
        "先進的な創業者やグローバルブランドに、強靭なデジタルインフラと圧倒的な検索優位性を提供することです。",
      learnMoreBtn: "詳細を見る",
    },
    nextDecade: {
      titleLine1: "次の10年を",
      titleLine2: "見据えた",
      titleLine3: "強靭な",
      titleLine4: "基盤。",
      description:
        "私たちは持続的な成功のためのインフラを構築します。技術的信頼性と洗練されたプロダクトデザインを融合し、次の10年先も通用する拡張性と高CV体験を提供します。",
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  currentLanguageOption: LanguageOption;
  languages: LanguageOption[];
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    try {
      const savedLang = localStorage.getItem("owlio_lang") as Language;
      const validLangs: Language[] = ["en", "hi", "es", "zh", "ru", "ko", "ja"];
      if (validLangs.includes(savedLang)) {
        setLanguageState(savedLang);
      }
    } catch {
      // ignore
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem("owlio_lang", lang);
    } catch {
      // ignore
    }
  };

  const currentLanguageOption =
    LANGUAGES.find((item) => item.code === language) || LANGUAGES[0];
  const t = translations[language] || translations.en;

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        currentLanguageOption,
        languages: LANGUAGES,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
