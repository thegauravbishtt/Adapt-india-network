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
    home: string;
    work: string;
    clients: string;
    industries: string;
    services: string;
    about: string;
    blog: string;
    letsTalk: string;
    menu: string;
  };
  hero: {
    line1: string;
    line2: string;
    category: string;
    heading1: string;
    heading2: string;
    heading3: string;
    subtitle: string;
    auditBtn: string;
    callBtn: string;
    workBtn?: string;
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
    id: "case-hcl",
    name: "HCL Technologies",
    category: "ENTERPRISE SD-WAN & ILL",
    headline: "Mission-Critical Multi-Cloud Routing",
    description: "Redundant dual-homed Internet Leased Lines and automated SD-WAN orchestration across development centers.",
    src: "/case-hcl.jpg",
  },
  {
    id: "case-cushman",
    name: "Cushman & Wakefield",
    category: "CORPORATE CONNECTIVITY",
    headline: "High-Throughput Leased Lines & Failover",
    description: "Zero-downtime corporate WAN infrastructure with sub-4ms latency SLA across regional headquarters.",
    src: "/case-cushman.jpg",
  },
  {
    id: "case-cornitos",
    name: "Cornitos (Greendot Health)",
    category: "MANUFACTURING & SUPPLY WAN",
    headline: "Pan-India Hybrid Network Fabric",
    description: "Integrated private MPLS and redundant leased line connectivity linking factories and central logistics.",
    src: "/case-cornitos.jpg",
  },
  {
    id: "case-mallcom",
    name: "Mallcom India",
    category: "INDUSTRIAL TELECOM",
    headline: "Enterprise Multi-Site MPLS Backbone",
    description: "Secure, low-jitter multi-protocol label switching connecting manufacturing plants and administrative hubs.",
    src: "/case-mallcom.jpg",
  },
  {
    id: "case-miarcus",
    name: "Miarcus Retail",
    category: "RETAIL SD-WAN",
    headline: "Cloud-Managed Branch WAN Deployment",
    description: "Rapid deployment of managed 4G/fiber hybrid SD-WAN across 100+ high-traffic nationwide retail stores.",
    src: "/case-miarcus.jpg",
  },
  {
    id: "work-sdwan-mesh",
    name: "Global Tech Hub",
    category: "AI & CLOUD ROUTING",
    headline: "Next-Gen Software-Defined WAN",
    description: "Dynamic packet steering and encrypted overlays guaranteeing 99.99% application uptime.",
    src: "/services/sdwan_clean.jpg",
  },
  {
    id: "work-datacenter",
    name: "Enterprise Financial Core",
    category: "CYBER SECURITY & DATA",
    headline: "Dedicated Fiber Leased Line Grid",
    description: "Symmetric Gigabit bandwidth and direct peering with tier-1 internet exchanges.",
    src: "/services/broadband_clean.jpg",
  },
];

export const translations: Record<Language, Translations> = {
  en: {
    navbar: {
      home: "Home",
      work: "Our Work",
      clients: "Clients",
      industries: "Industries",
      services: "Our Services",
      about: "About Us",
      blog: "Blog",
      letsTalk: "Let's Talk →",
      menu: "Menu",
    },
    hero: {
      line1: "We build & scale",
      line2: "iconic brands online!",
      category: "Branding · Digital · Performance",
      heading1: "We build & scale",
      heading2: "",
      heading3: "iconic brands online!",
      subtitle:
        "We're the integrated brand, digital and performance partner that gets everyone talking – so your brand can show up, stand out and sell more.",
      auditBtn: "Book a Consultation",
      callBtn: "Book a Consultation",
      workBtn: "See our work",
    },
    partners: {
      trustedBy: "Trusted By",
      headline: "We keep every client ahead with results that matter.",
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
        desc: "From high-growth D2C and B2B SaaS to FinTech and HealthTech — specialized growth frameworks tailored for your specific domain.",
        pills: [
          "D2C & E-Commerce",
          "B2B SaaS & Tech",
          "FinTech & Web3",
          "HealthTech & Wellness",
          "AI & DeepTech",
          "EdTech & Creators",
          "Real Estate",
          "CleanTech",
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
          "Content Strategy",
          "Email & Automation",
          "UI/UX Design",
          "Analytics & Conversion",
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
      tag: "ABOUT ADAPT INDIA NETWORK",
      description:
        "Adapt India Network is a premier enterprise telecom and network infrastructure provider in India. In alliance with Tata Teleservices (TTBS) and ACT Enterprise, we deliver carrier-grade Internet Leased Lines, SD-WAN, MPLS VPN, Cloud Telephony, and edge cybersecurity with 99.999% SLA uptime.",
      storyTitle: "OUR MISSION",
      storyDesc:
        "Founded to deliver mission-critical connectivity without compromise, we operate dual-active 24/7 Network Operations Centers (NOC) and high-availability fiber rings across 60+ Indian commercial hubs.",
      missionTitle: "OUR COMMITMENT",
      missionDesc:
        "Our mission is to empower enterprises with resilient optical infrastructure, sub-50ms deterministic routing, and carrier-grade SLAs engineered for continuous business operations.",
      learnMoreBtn: "EXPLORE SOLUTIONS",
    },
    nextDecade: {
      titleLine1: "BUILT FOR",
      titleLine2: "THE",
      titleLine3: "NEXT",
      titleLine4: "DECADE.",
      description:
        "WE ENGINEER INFRASTRUCTURE FOR ENDURING SUCCESS. OUR MANDATE IS TO FUSE TECHNICAL INTEGRITY WITH SUPERIOR PRODUCT DESIGN.",
    },
  },
  hi: {
    navbar: {
      home: "होम",
      work: "हमारा काम",
      clients: "क्लाइंट्स",
      industries: "उद्योग",
      services: "हमारी सेवाएं",
      about: "हमारे बारे में",
      blog: "ब्लॉग",
      letsTalk: "बात करें →",
      menu: "मेनू",
    },
    hero: {
      line1: "हम ऑनलाइन प्रतिष्ठित",
      line2: "ब्रांड्स का निर्माण करते हैं!",
      category: "ब्रांडिंग · तकनीक · परफॉर्मेंस",
      heading1: "हम ऑनलाइन प्रतिष्ठित",
      heading2: "",
      heading3: "ब्रांड्स का निर्माण करते हैं!",
      subtitle:
        "हम आधुनिक वेबसाइट्स, स्केलेबल ऍप्लिकेशन्स और डिजिटल ग्रोथ सिस्टम्स बनाते हैं जो आपके व्यवसाय को नई ऊंचाइयों पर ले जाते हैं।",
      auditBtn: "मुफ्त ग्रोथ ऑडिट प्राप्त करें",
      callBtn: "कॉल बुक करें",
    },
    partners: {
      trustedBy: "विश्वसनीय ब्रांड्स",
      headline: "हम हर क्लाइंट के लिए उत्कृष्ट परिणाम सुनिश्चित करते हैं।",
      viewAll: "सभी क्लाइंट्स देखें",
      title: "उभरते शीर्ष ब्रांड्स द्वारा विश्वसनीय",
    },
    whatWeDo: {
      tag: "हम क्या करते हैं",
      titleStart: "हम मिलकर क्या हासिल ",
      titleHighlight: "कर सकते हैं?",
      subtitle: "आधुनिक तकनीक और परिणाम-उन्मुख रणनीतियां — दो विशेषज्ञताएं, एक समर्पित टीम।",
      card1: {
        tag: "उद्योग विशेषज्ञता",
        title: "प्रमुख उद्योग",
        desc: "D2C, B2B SaaS, फिनटेक और हेल्थटेक के लिए विशेष रूप से तैयार किए गए विकास समाधान।",
        pills: ["D2C और ई-कॉमर्स", "B2B SaaS", "फिनटेक और वेब3", "हेल्थटेक", "AI स्टार्टअप्स", "रियल एस्टेट"],
        btn: "उद्योग देखें",
      },
      card2: {
        tag: "ग्रोथ व तकनीक",
        title: "डिजिटल और परफॉर्मेंस",
        desc: "वेबसाइट, सर्च रैंकिंग और कन्वर्जन बढ़ाने के लिए हमेशा सक्रिय विकास इंजन।",
        pills: ["वेबसाइट और ऐप विकास", "SEO · AEO · GEO", "परफॉर्मेंस मार्केटिंग", "UI/UX डिज़ाइन", "कंटेंट रणनीति"],
        btn: "सेवाएं देखें",
      },
    },
    featuredWork: {
      tag: "प्रमुख कार्य",
      titlePart1: "जबरदस्त प्रभाव। ",
      titleHighlight: "सटीक परिणाम।",
      viewAll: "सभी कार्य देखें",
      viewWorkBtn: "कार्य देखें",
      items: defaultFeaturedWorkItems,
    },
    about: {
      tag: "ADAPT INDIA NETWORK के बारे में",
      description:
        "Adapt India Network नई दिल्ली स्थित एक स्वतंत्र डिजिटल मार्केटिंग एजेंसी है। हम आधुनिक वेबसाइट्स, ऍप्लिकेशन्स और डिजिटल विकास प्रणालियां डिजाइन और विकसित करते हैं।",
      storyTitle: "हमारी कहानी",
      storyDesc: "हम पारंपरिक एजेंसी की जटिलताओं को समाप्त कर सीधे डेवलपर्स और डिजाइनर्स के साथ पारदर्शी सहयोग प्रदान करते हैं।",
      missionTitle: "हमारा मिशन",
      missionDesc: "हमारा लक्ष्य संस्थापकों और व्यवसायों को मजबूत डिजिटल बुनियादी ढांचा और बेहतरीन प्रदर्शन प्रदान करना है।",
      learnMoreBtn: "और जानें",
    },
    nextDecade: {
      titleLine1: "अगले दशक",
      titleLine2: "के लिए",
      titleLine3: "तैयार",
      titleLine4: "सिस्टम।",
      description: "हम दीर्घकालिक सफलता के लिए तकनीकी इंफ्रास्ट्रक्चर का निर्माण करते हैं।",
    },
  },
  es: {
    navbar: {
      home: "Inicio",
      work: "Trabajos",
      clients: "Clientes",
      industries: "Industrias",
      services: "Servicios",
      about: "Nosotros",
      blog: "Blog",
      letsTalk: "Hablemos →",
      menu: "Menú",
    },
    hero: {
      line1: "¡Construimos y escalamos",
      line2: "marcas icónicas en línea!",
      category: "Branding · Tecnología · Rendimiento",
      heading1: "¡Construimos y escalamos",
      heading2: "",
      heading3: "marcas icónicas en línea!",
      subtitle:
        "Diseñamos y desarrollamos plataformas web modernas, aplicaciones escalables y motores de crecimiento digital para empresas.",
      auditBtn: "Auditoría de Crecimiento Gratis",
      callBtn: "Reservar Llamada",
    },
    partners: {
      trustedBy: "Marcas que confían",
      headline: "Impulsamos resultados medibles para cada cliente.",
      viewAll: "Ver todos los clientes",
      title: "Confiado por Marcas Líderes",
    },
    whatWeDo: {
      tag: "Lo Que Hacemos",
      titleStart: "¿Qué podemos lograr ",
      titleHighlight: "juntos?",
      subtitle: "Tecnología, diseño y estrategias orientadas a resultados tangibles.",
      card1: {
        tag: "Especialización Sectorial",
        title: "Industrias",
        desc: "Estrategias de crecimiento adaptadas a D2C, SaaS B2B, FinTech y HealthTech.",
        pills: ["D2C y Comercio Electrónico", "B2B SaaS", "FinTech", "HealthTech", "Startups de IA", "Bienes Raíces"],
        btn: "Explorar Industrias",
      },
      card2: {
        tag: "Área de Crecimiento",
        title: "Digital y Rendimiento",
        desc: "El motor integral para aumentar tráfico, conversiones y retorno de inversión.",
        pills: ["Desarrollo Web y Apps", "SEO · AEO · GEO", "Marketing Digital", "Diseño UI/UX", "Automatización"],
        btn: "Explorar Servicios",
      },
    },
    featuredWork: {
      tag: "Trabajos Destacados",
      titlePart1: "Gran impacto visual. ",
      titleHighlight: "Resultados reales.",
      viewAll: "Ver todos los proyectos",
      viewWorkBtn: "Ver proyecto",
      items: defaultFeaturedWorkItems,
    },
    about: {
      tag: "SOBRE ADAPT INDIA NETWORK",
      description:
        "Adapt India Network es una agencia de marketing digital independiente con sede en Nueva Delhi, India. Diseñamos y desarrollamos sitios web modernos y sistemas de crecimiento.",
      storyTitle: "NUESTRA HISTORIA",
      storyDesc: "Sustituimos la burocracia tradicional de las agencias por colaboración directa con diseñadores e ingenieros.",
      missionTitle: "NUESTRA MISIÓN",
      missionDesc: "Capacitar a fundadores con infraestructura digital escalable, diseño intuitivo y rendimiento duradero.",
      learnMoreBtn: "CONOCER MÁS",
    },
    nextDecade: {
      titleLine1: "CONSTRUIDO",
      titleLine2: "PARA LA",
      titleLine3: "PRÓXIMA",
      titleLine4: "DÉCADA.",
      description: "DISEÑAMOS INFRAESTRUCTURA PARA UN ÉXITO DURADERO.",
    },
  },
  zh: {
    navbar: {
      home: "首页",
      work: "案例作品",
      clients: "合作客户",
      industries: "行业领域",
      services: "服务方案",
      about: "关于我们",
      blog: "博客",
      letsTalk: "立即洽谈 →",
      menu: "菜单",
    },
    hero: {
      line1: "我们打造并拓展",
      line2: "线上标志性品牌！",
      category: "品牌设计 · 前沿技术 · 业务增长",
      heading1: "我们打造并拓展",
      heading2: "",
      heading3: "线上标志性品牌！",
      subtitle: "我们为雄心勃勃的企业设计并构建现代化网站、应用程序及数字化增长体系。",
      auditBtn: "免费增长审计",
      callBtn: "预约沟通",
    },
    partners: {
      trustedBy: "合作品牌",
      headline: "以硬核技术与卓越设计助力客户全面成功。",
      viewAll: "查看所有客户",
      title: "深受新锐领军品牌信赖",
    },
    whatWeDo: {
      tag: "核心业务",
      titleStart: "我们能共同成就",
      titleHighlight: "什么？",
      subtitle: "前沿科技与增长策略无缝融合——两大核心能力，一支全栈精英团队。",
      card1: {
        tag: "行业解决方案",
        title: "专注行业",
        desc: "覆盖D2C电商、企业级SaaS、金融科技与健康医疗等定制化增长框架。",
        pills: ["D2C与电商", "B2B SaaS", "金融科技", "医疗健康", "人工智能AI", "房产科技"],
        btn: "了解专注行业",
      },
      card2: {
        tag: "数字增长体系",
        title: "服务方案",
        desc: "全天候驱动品牌声量、精准流量与商业转化的增长引擎。",
        pills: ["网站与APP开发", "SEO · AEO · GEO", "精准效果营销", "UI/UX设计", "内容策略"],
        btn: "探索服务方案",
      },
    },
    featuredWork: {
      tag: "精选案例",
      titlePart1: "引爆全网声量。 ",
      titleHighlight: "铸就真实成效。",
      viewAll: "查看全部案例",
      viewWorkBtn: "查看案例",
      items: defaultFeaturedWorkItems,
    },
    about: {
      tag: "关于 ADAPT INDIA NETWORK",
      description:
        "Adapt India Network 是一家位于印度新德里的独立数字营销机构。我们为全球企业设计并构建高性能网站、应用程序与数字化增长体系。",
      storyTitle: "发展历程",
      storyDesc: "我们告别传统机构的繁琐流程，让客户直接与资深设计师和工程师协同，高效交付高品质项目。",
      missionTitle: "核心使命",
      missionDesc: "赋能全球创业者与企业领袖，打造兼具极致性能、出众设计与持久商业价值的数字基础设施。",
      learnMoreBtn: "了解更多",
    },
    nextDecade: {
      titleLine1: "为下一个",
      titleLine2: "十年",
      titleLine3: "精心",
      titleLine4: "铸就。",
      description: "交付经久不衰的高转化体验。",
    },
  },
  ru: {
    navbar: {
      home: "Главная",
      work: "Портфолио",
      clients: "Клиенты",
      industries: "Отрасли",
      services: "Услуги",
      about: "О нас",
      blog: "Блог",
      letsTalk: "Связаться →",
      menu: "Меню",
    },
    hero: {
      line1: "Мы создаем и развиваем",
      line2: "культовые бренды в сети!",
      category: "Брендинг · Технологии · Рост",
      heading1: "Мы создаем и развиваем",
      heading2: "",
      heading3: "культовые бренды в сети!",
      subtitle:
        "Мы проектируем и разрабатываем современные веб-сайты, масштабируемые платформы и цифровые системы роста для бизнеса.",
      auditBtn: "Бесплатный аудит роста",
      callBtn: "Записаться на звонок",
    },
    partners: {
      trustedBy: "Нам доверяют",
      headline: "Обеспечиваем измеримые результаты для каждого клиента.",
      viewAll: "Все клиенты",
      title: "Нам доверяют растущие бренды",
    },
    whatWeDo: {
      tag: "Что мы делаем",
      titleStart: "Чего мы можем достичь ",
      titleHighlight: "вместе?",
      subtitle: "Дизайн, код и стратегия для масштабирования вашего бизнеса.",
      card1: {
        tag: "Отраслевая экспертиза",
        title: "Отрасли",
        desc: "Специализированные решения для D2C, B2B SaaS, FinTech и HealthTech.",
        pills: ["D2C и e-Commerce", "B2B SaaS", "FinTech и Web3", "HealthTech", "AI Стартапы", "Недвижимость"],
        btn: "Смотреть отрасли",
      },
      card2: {
        tag: "Практика роста",
        title: "Цифровые услуги",
        desc: "Постоянно работающий двигатель для трафика, лидогенерации и высокой конверсии.",
        pills: ["Разработка сайтов и приложений", "SEO · AEO · GEO", "Performance-маркетинг", "UI/UX Дизайн", "Контент"],
        btn: "Смотреть услуги",
      },
    },
    featuredWork: {
      tag: "Избранные работы",
      titlePart1: "Максимум внимания. ",
      titleHighlight: "Реальный результат.",
      viewAll: "Все проекты",
      viewWorkBtn: "Смотреть проект",
      items: defaultFeaturedWorkItems,
    },
    about: {
      tag: "О КОМПАНИИ ADAPT INDIA NETWORK",
      description:
        "Adapt India Network — независимое агентство цифрового маркетинга из Нью-Дели, Индия. Мы создаем современные веб-решения и системы роста для растущих компаний по всему миру.",
      storyTitle: "НАША ИСТОРИЯ",
      storyDesc: "Мы отказались от бюрократии агентств в пользу прямого общения с ведущими разработчиками и дизайнерами.",
      missionTitle: "НАША МИССИЯ",
      missionDesc: "Предоставить основателям надежную цифровую инфраструктуру, безупречную скорость и долгосрочный успех.",
      learnMoreBtn: "УЗНАТЬ БОЛЬШЕ",
    },
    nextDecade: {
      titleLine1: "СОЗДАНО",
      titleLine2: "ДЛЯ",
      titleLine3: "СЛЕДУЮЩЕГО",
      titleLine4: "ДЕСЯТИЛЕТИЯ.",
      description: "МЫ СОЗДАЕМ ИНФРАСТРУКТУРУ ДЛЯ УСПЕХА.",
    },
  },
  ko: {
    navbar: {
      home: "홈",
      work: "포트폴리오",
      clients: "고객사",
      industries: "산업 분야",
      services: "서비스",
      about: "회사 소개",
      blog: "블로그",
      letsTalk: "상담하기 →",
      menu: "메뉴",
    },
    hero: {
      line1: "온라인에서 상징적인 브랜드를",
      line2: "구축하고 성장시킵니다!",
      category: "브랜딩 · 기술 엔지니어링 · 퍼포먼스 성장",
      heading1: "온라인에서 상징적인 브랜드를",
      heading2: "",
      heading3: "구축하고 성장시킵니다!",
      subtitle:
        "우리는 고성장 기업을 위한 현대적인 웹사이트, 확장 가능한 애플리케이션 및 디지털 성장 시스템을 설계하고 구축합니다.",
      auditBtn: "무료 성장 진단 신청",
      callBtn: "상담 예약하기",
    },
    partners: {
      trustedBy: "신뢰하는 고객사",
      headline: "모든 고객에게 검증된 성과를 제공합니다.",
      viewAll: "모든 파트너 보기",
      title: "주목받는 혁신 브랜드들의 선택",
    },
    whatWeDo: {
      tag: "서비스 소개",
      titleStart: "우리가 함께 만들 수 있는 ",
      titleHighlight: "미래는?",
      subtitle: "디자인과 코딩, 그리고 전략이 결합된 원스톱 전문가 팀.",
      card1: {
        tag: "산업별 전문 솔루션",
        title: "주요 산업군",
        desc: "D2C 커머스, B2B SaaS, 핀테크 및 헬스케어를 위한 맞춤형 성장 프레임워크.",
        pills: ["D2C & 이커머스", "B2B SaaS", "핀테크 & Web3", "헬스케어", "인공지능 AI", "부동산 프롭테크"],
        btn: "산업 분야 보기",
      },
      card2: {
        tag: "그로스 & 디지털 솔루션",
        title: "디지털 서비스",
        desc: "트래픽, 브랜드 인지도, 전환율을 지속적으로 극대화하는 성장 엔진.",
        pills: ["웹사이트 및 앱 개발", "SEO · AEO · GEO", "퍼포먼스 마케팅", "UI/UX 디자인", "콘텐츠 전략"],
        btn: "서비스 보기",
      },
    },
    featuredWork: {
      tag: "주요 프로젝트",
      titlePart1: "압도적인 화제성. ",
      titleHighlight: "확실한 성과.",
      viewAll: "전체 프로젝트 보기",
      viewWorkBtn: "프로젝트 보기",
      items: defaultFeaturedWorkItems,
    },
    about: {
      tag: "ADAPT INDIA NETWORK 소개",
      description:
        "Adapt India Network는 인도 뉴델리에 본사를 둔 독립 디지털 마케팅 에이전시입니다. 우리는 전 세계 성장하는 기업을 위해 최신 웹사이트와 디지털 성장 시스템을 구축합니다.",
      storyTitle: "우리의 스토리",
      storyDesc: "불필요한 중간 관리 없이 클라이언트가 실무 디자이너 및 엔지니어와 직접 소통하여 최상의 결과물을 만듭니다.",
      missionTitle: "우리의 미션",
      missionDesc: "안정적인 기술 인프라와 뛰어난 사용자 경험을 통해 비즈니스가 지속적으로 번창하도록 돕습니다.",
      learnMoreBtn: "더 알아보기",
    },
    nextDecade: {
      titleLine1: "다음 10년을",
      titleLine2: "위해",
      titleLine3: "설계된",
      titleLine4: "시스템.",
      description: "지속적인 성공을 위한 인프라 설계.",
    },
  },
  ja: {
    navbar: {
      home: "ホーム",
      work: "実績・事例",
      clients: "クライアント",
      industries: "業界分野",
      services: "サービス",
      about: "会社概要",
      blog: "ブログ",
      letsTalk: "お問い合わせ →",
      menu: "メニュー",
    },
    hero: {
      line1: "象徴的なブランドを",
      line2: "オンラインで構築・拡大します！",
      category: "ブランディング · テクノロジー · 成果創出",
      heading1: "象徴的なブランドを",
      heading2: "",
      heading3: "オンラインで構築・拡大します！",
      subtitle:
        "成長企業のために、最新のWebサイト、拡張性の高いシステム、そして持続的なデジタル成長基盤を設計・構築します。",
      auditBtn: "無料成長診断を受ける",
      callBtn: "個別相談を予約する",
    },
    partners: {
      trustedBy: "導入企業・パートナー",
      headline: "すべてのクライアントに確かな成果と価値を届けます。",
      viewAll: "すべてのクライアントを見る",
      title: "新鋭ブランドから選ばれる信頼",
    },
    whatWeDo: {
      tag: "提供ソリューション",
      titleStart: "共に創り出せる",
      titleHighlight: "新たな価値とは？",
      subtitle: "洗練されたデザインと確かな技術力 — 2つの強みを融合した統合チーム。",
      card1: {
        tag: "業界別ソリューション",
        title: "対応業界",
        desc: "D2C、B2B SaaS、FinTech、HealthTechなど、各分野に最適化した成長設計。",
        pills: ["D2C & Eコマース", "B2B SaaS", "FinTech & Web3", "HealthTech", "AIスタートアップ", "不動産テック"],
        btn: "対応業界を見る",
      },
      card2: {
        tag: "グロース & テクノロジー",
        title: "サービス一覧",
        desc: "トラフィック獲得からCVR向上まで、持続的に機能するデジタル成長エンジン。",
        pills: ["Webサイト・アプリ開発", "SEO · AEO · GEO", "パフォーマンスマーケティング", "UI/UXデザイン", "コンテンツ戦略"],
        btn: "サービスを見る",
      },
    },
    featuredWork: {
      tag: "注目の実績",
      titlePart1: "圧倒的な反響。 ",
      titleHighlight: "確かな成果。",
      viewAll: "すべての実績を見る",
      viewWorkBtn: "実績を見る",
      items: defaultFeaturedWorkItems,
    },
    about: {
      tag: "ADAPT INDIA NETWORK について",
      description:
        "Adapt India Network は、インド・ニューデリーを拠点とする独立系デジタルマーケティングエージェンシーです。世界中の成長企業に向けて、最新のWebサイトや成長システムを構築しています。",
      storyTitle: "私たちのストーリー",
      storyDesc: "従来のエージェンシーのような無駄な階層を省き、開発者やデザイナーと直接対話できる透明な開発体制を提供します。",
      missionTitle: "ミッション",
      missionDesc: "強固な技術基盤と優れたユーザー体験を通じて、次の10年を見据えた持続的な成功を支援します。",
      learnMoreBtn: "詳細を見る",
    },
    nextDecade: {
      titleLine1: "次の10年を",
      titleLine2: "見据えた",
      titleLine3: "強靭な",
      titleLine4: "基盤。",
      description: "持続的な成功のためのインフラを構築します。",
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
        if (typeof document !== "undefined") {
          document.documentElement.lang = savedLang;
        }
      }
    } catch {
      // ignore
    }

    const handleCustomChange = (e: Event) => {
      const customEvent = e as CustomEvent<Language>;
      if (customEvent.detail) {
        setLanguageState(customEvent.detail);
      }
    };

    window.addEventListener("owlio_lang_change", handleCustomChange);
    return () => {
      window.removeEventListener("owlio_lang_change", handleCustomChange);
    };
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem("owlio_lang", lang);
      if (typeof document !== "undefined") {
        document.documentElement.lang = lang;
      }
      window.dispatchEvent(new CustomEvent("owlio_lang_change", { detail: lang }));
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
    // Fallback gracefully to English if outside provider
    return {
      language: "en" as Language,
      setLanguage: () => {},
      currentLanguageOption: LANGUAGES[0],
      languages: LANGUAGES,
      t: translations.en,
    };
  }
  return context;
}
