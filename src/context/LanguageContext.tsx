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
    industries: string;
    services: string;
    branding?: string;
    digitalPerformance?: string;
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
      industries: "Industries",
      services: "Services",
      branding: "Industries",
      digitalPerformance: "Services",
      about: "About",
      letsTalk: "Let's Talk",
      menu: "Menu",
    },
    hero: {
      category: "Branding · Technology · Performance",
      heading1: "BUILD",
      heading2: "BRAN",
      heading3: "DS.",
      subtitle:
        "We build high-impact digital platforms, enterprise search systems, and performance growth engines that scale ambitious businesses into industry leaders.",
      auditBtn: "Run Free Growth Audit",
      callBtn: "Book Discovery Call",
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
        "Owlio Works is a digital growth & engineering studio based in India & globally, specializing in secure, scalable search systems and modern digital platforms for high-growth businesses. We are your end-to-end technical growth partner, focused on building enterprise infrastructure that lasts.",
      storyTitle: "OUR STORY",
      storyDesc:
        "Founded by seasoned engineers and growth architects, Owlio Works was established to replace traditional agency bureaucracy with relentless technical execution. We build high-converting digital experiences, robust search architectures, and scalable enterprise platforms that drive sustainable revenue and outpace market competition.",
      missionTitle: "OUR MISSION",
      missionDesc:
        "Our mission is to empower visionary founders and market leaders with resilient digital infrastructure, uncompromising performance, and algorithmic search dominance. We engineer future-proof technology assets and seamless user journeys that deliver measurable commercial impact for the next decade.",
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
      industries: "उद्योग",
      services: "सेवाएं",
      branding: "उद्योग",
      digitalPerformance: "सेवाएं",
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
        "हम एक इंटीग्रेटेड सर्च, रूपांतरण और परफॉर्मेंस इंजन हैं जो स्टार्टअप्स को खास पहचान दिलाते हैं।",
      auditBtn: "मुफ्त SEO ऑडिट करें",
      callBtn: "इंट्रो कॉल बुक करें",
    },
    partners: {
      trustedBy: "विश्वसनीय भागीदार",
      headline: "हम हर क्लाइंट को एक साथ खुश और सफल रखते हैं।",
      viewAll: "सभी क्लाइंट्स देखें",
      title: "उभरते शीर्ष ब्रांड्स द्वारा विश्वसनीय",
    },
    whatWeDo: {
      tag: "हम क्या करते हैं",
      titleStart: "हम मिलकर क्या कर सकते ",
      titleHighlight: "हैं?",
      subtitle: "दो मजबूत विशेषज्ञताएं, एक एकीकृत टीम।",
      card1: {
        tag: "उद्योग विशेषज्ञता",
        title: "प्रमुख उद्योग",
        desc: "विशेष रूप से तैयार किए गए ग्रोथ सिस्टम।",
        pills: ["D2C और ई-कॉमर्स", "B2B SaaS", "फिनटेक", "हेल्थटेक"],
        btn: "उद्योग देखें",
      },
      card2: {
        tag: "ग्रोथ विशेषज्ञता",
        title: "डिजिटल और परफॉर्मेंस",
        desc: "सदा सक्रिय विकास इंजन।",
        pills: ["वेबसाइट विकास", "SEO · AEO · GEO", "सोशल मीडिया"],
        btn: "सेवाएं देखें",
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
      description: "Owlio Works एक डिजिटल ग्रोथ और इंजीनियरिंग स्टूडियो है।",
      storyTitle: "हमारी कहानी",
      storyDesc: "हम व्यर्थ की मीटिंग्स की जगह तकनीकी निष्पादन को प्राथमिकता देते हैं।",
      missionTitle: "हमारा मिशन",
      missionDesc: "लचीले डिजिटल इंफ्रास्ट्रक्चर से सशक्त बनाना।",
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
      work: "Trabajos",
      clients: "Clientes",
      industries: "Industrias",
      services: "Servicios",
      branding: "Industrias",
      digitalPerformance: "Servicios",
      about: "Nosotros",
      letsTalk: "Hablemos",
      menu: "Menú",
    },
    hero: {
      category: "Búsqueda · Conversión · Crecimiento",
      heading1: "TU MARCA",
      heading2: "MERECE",
      heading3: "ATENCIÓN.",
      subtitle: "Construimos canales de crecimiento de alto impacto.",
      auditBtn: "Auditoría SEO Gratis",
      callBtn: "Reservar Llamada",
    },
    partners: {
      trustedBy: "Confiado Por",
      headline: "Mantenemos satisfecho a cada cliente a la vez.",
      viewAll: "Ver todos los clientes",
      title: "Confiado por Marcas Líderes",
    },
    whatWeDo: {
      tag: "Lo Que Hacemos",
      titleStart: "¿Qué podemos lograr ",
      titleHighlight: "juntos?",
      subtitle: "Dos áreas de práctica, un equipo integrado.",
      card1: {
        tag: "Especialización Sectorial",
        title: "Industrias",
        desc: "Arquitecturas de crecimiento especializadas para su sector.",
        pills: ["D2C y Comercio Electrónico", "B2B SaaS", "FinTech", "HealthTech"],
        btn: "Explorar Industrias",
      },
      card2: {
        tag: "Área de Crecimiento",
        title: "Digital y Rendimiento",
        desc: "El motor siempre activo para un ROI comprobable.",
        pills: ["Desarrollo Web", "SEO · AEO · GEO", "Marketing Digital"],
        btn: "Explorar Servicios",
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
      description: "Owlio Works es un estudio de ingeniería digital y crecimiento.",
      storyTitle: "NUESTRA HISTORIA",
      storyDesc: "Ejecución técnica de precisión.",
      missionTitle: "NUESTRA MISIÓN",
      missionDesc: "Capacitar a fundadores visionarios.",
      learnMoreBtn: "SABER MÁS",
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
      work: "案例作品",
      clients: "合作客户",
      industries: "行业领域",
      services: "服务方案",
      branding: "行业领域",
      digitalPerformance: "服务方案",
      about: "关于我们",
      letsTalk: "立即洽谈",
      menu: "菜单",
    },
    hero: {
      category: "搜索 · 转化 · 增长",
      heading1: "让你的品牌",
      heading2: "获得瞩目",
      heading3: "焦点关注。",
      subtitle: "助力初创企业迅速脱颖而出。",
      auditBtn: "获取免费SEO审计",
      callBtn: "预约咨询通话",
    },
    partners: {
      trustedBy: "信赖品牌",
      headline: "专注服务每一位客户。",
      viewAll: "查看全部客户",
      title: "深受新锐领军品牌信赖",
    },
    whatWeDo: {
      tag: "业务板块",
      titleStart: "我们能共同成就",
      titleHighlight: "什么？",
      subtitle: "两大专业实践，一支全能团队。",
      card1: {
        tag: "垂直行业实践",
        title: "专注行业",
        desc: "量身定制的高成效增长架构。",
        pills: ["D2C电商", "B2B SaaS", "金融科技", "健康科技"],
        btn: "了解专注行业",
      },
      card2: {
        tag: "增长实践",
        title: "服务方案",
        desc: "全天候运转的增长引擎。",
        pills: ["网站开发", "SEO · AEO · GEO", "社交媒体营销"],
        btn: "探索服务方案",
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
      description: "专注于为现代企业构建安全、可扩展的系统。",
      storyTitle: "发展历程",
      storyDesc: "以极致的技术执行力为品牌创造增长。",
      missionTitle: "核心使命",
      missionDesc: "赋能全球创业者与知名品牌。",
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
      work: "Работы",
      clients: "Клиенты",
      industries: "Индустрии",
      services: "Услуги",
      branding: "Индустрии",
      digitalPerformance: "Услуги",
      about: "О нас",
      letsTalk: "Обсудить проект",
      menu: "Меню",
    },
    hero: {
      category: "Поиск · Конверсия · Рост",
      heading1: "ВАШ БРЕНД",
      heading2: "ЗАСЛУЖИВАЕТ",
      heading3: "ВНИМАНИЯ.",
      subtitle: "Комплексный движок роста.",
      auditBtn: "Бесплатный SEO-аудит",
      callBtn: "Записаться на звонок",
    },
    partners: {
      trustedBy: "Нам доверяют",
      headline: "Делаем счастливым каждого клиента.",
      viewAll: "Все клиенты",
      title: "Нам доверяют растущие бренды",
    },
    whatWeDo: {
      tag: "Что мы делаем",
      titleStart: "Чего мы можем достичь ",
      titleHighlight: "вместе?",
      subtitle: "Два направления, одна команда.",
      card1: {
        tag: "Отраслевая экспертиза",
        title: "Индустрии",
        desc: "Специализированные стратегии.",
        pills: ["D2C и e-Commerce", "B2B SaaS", "FinTech", "HealthTech"],
        btn: "Смотреть индустрии",
      },
      card2: {
        tag: "Практика роста",
        title: "Услуги",
        desc: "Движок постоянного роста.",
        pills: ["Разработка сайтов", "SEO", "SMM"],
        btn: "Смотреть услуги",
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
      description: "Студия цифровой инженерии и органического роста.",
      storyTitle: "НАША ИСТОРИЯ",
      storyDesc: "Быстрая техническая разработка.",
      missionTitle: "НАША МИССИЯ",
      missionDesc: "Обеспечить доминирование в поиске.",
      learnMoreBtn: "ПОДРОБНЕЕ",
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
      work: "프로젝트",
      clients: "고객사",
      industries: "산업 분야",
      services: "서비스",
      branding: "산업 분야",
      digitalPerformance: "서비스",
      about: "회사 소개",
      letsTalk: "상담 시작",
      menu: "메뉴",
    },
    hero: {
      category: "검색 · 전환 · 성장",
      heading1: "당신의 브랜드는",
      heading2: "주목받을",
      heading3: "자격이 있습니다.",
      subtitle: "스타트업을 돋보이게 만드는 성장 파이프라인.",
      auditBtn: "무료 SEO 진단 신청",
      callBtn: "소개 상담 예약",
    },
    partners: {
      trustedBy: "파트너 신뢰",
      headline: "모든 고객사를 만족시키는 파트너.",
      viewAll: "고객사 전체 보기",
      title: "신뢰받는 파트너",
    },
    whatWeDo: {
      tag: "서비스 소개",
      titleStart: "우리가 함께 만들 수 있는 ",
      titleHighlight: "것은?",
      subtitle: "두 가지 전문 분야, 하나의 통합 팀.",
      card1: {
        tag: "산업별 전문 영역",
        title: "주요 산업군",
        desc: "최적화된 성장 아키텍처.",
        pills: ["D2C & 이커머스", "B2B SaaS", "핀테크", "헬스케어"],
        btn: "산업 분야 보기",
      },
      card2: {
        tag: "그로스 실무 영역",
        title: "서비스",
        desc: "상시 가동되는 성장 엔진.",
        pills: ["웹사이트 개발", "SEO · AEO · GEO", "마케팅"],
        btn: "서비스 보기",
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
      description: "엔드투엔드 디지털 엔지니어링 파트너.",
      storyTitle: "우리의 이야기",
      storyDesc: "정밀한 기술 실행으로 비즈니스 성장.",
      missionTitle: "우리의 미션",
      missionDesc: "견고한 인프라 제공.",
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
      work: "実績",
      clients: "クライアント",
      industries: "業界分野",
      services: "サービス",
      branding: "業界分野",
      digitalPerformance: "サービス",
      about: "会社概要",
      letsTalk: "お問い合わせ",
      menu: "メニュー",
    },
    hero: {
      category: "検索 · コンバージョン · 成長",
      heading1: "あなたのブランドは",
      heading2: "注目される",
      heading3: "価値がある。",
      subtitle: "成長パイプラインを構築します。",
      auditBtn: "無料SEO診断を実施",
      callBtn: "オンライン相談を予約",
    },
    partners: {
      trustedBy: "導入実績",
      headline: "確かな成果を提供します。",
      viewAll: "すべてのクライアントを見る",
      title: "新鋭ブランドから選ばれる信頼",
    },
    whatWeDo: {
      tag: "提供ソリューション",
      titleStart: "共に創り出せる",
      titleHighlight: "価値とは？",
      subtitle: "2つの専門領域、1つの統合チーム。",
      card1: {
        tag: "業界別ソリューション",
        title: "対応業界",
        desc: "成長アーキテクチャを構築。",
        pills: ["D2C & Eコマース", "B2B SaaS", "FinTech", "HealthTech"],
        btn: "業界分野を見る",
      },
      card2: {
        tag: "成長グロース領域",
        title: "サービス",
        desc: "常に稼働する成長エンジン。",
        pills: ["Web開発", "SEO · AEO · GEO", "マーケティング"],
        btn: "サービスを見る",
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
      description: "最新企業向けの安全で拡張性の高いシステム構築。",
      storyTitle: "ストーリー",
      storyDesc: "確固たる技術力で本質的な売上成長を実現。",
      missionTitle: "ミッション",
      missionDesc: "強靭なデジタルインフラを提供。",
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
