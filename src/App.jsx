import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  Moon,
  Sun,
  Languages,
  Code2,
  TerminalSquare,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  ChevronDown,
  Award,
  Sparkles,
  Menu,
  X,
  ExternalLink,
  Send,
  User,
  MessageSquare,
  Plane,
  GraduationCap,
  Trophy,
  FolderKanban,
  ArrowRight,
} from "lucide-react";

const SERVICE_ID = "service_dp7cob8";
const TEMPLATE_ID = "template_03kl8bm";
const PUBLIC_KEY = "3UcaVJHtnmdRz4Evi";

const translations = {
  en: {
    dir: "ltr",
    nav: [
      "Home",
      "About",
      "Journey",
      "Projects",
      "Skills",
      "Distinctions",
      "Languages",
      "Contact",
    ],
    heroBadge: "Computer Science Student · Seeking work-study opportunity for 2026",
    heroSubtitle: "Computer Science Student",
    heroTitleHighlight: "Portfolio",
    heroIntro:
      "I am a computer science student at ESAIP, building a structured engineering profile around systems, reliability and secure digital environments. My approach combines analysis, logic and technical rigor to design useful and well-organized solutions.",
    heroAvailability: "Open to a 2026 work-study opportunity",
    heroPrimaryCta: "Explore my projects",
    heroSecondaryCta: "Contact me",
    heroStats: [
      { label: "Work-study target", value: "2026" },
      { label: "Languages", value: "3" },
      { label: "Main focus", value: "Digital Reliability" },
    ],
    heroTags: ["Python", "SQL", "Linux", "Systems", "Security", "Reliability"],
    aboutTitle: "About",
    aboutLead:
      "I am developing an engineering profile built around structure, reliability and secure digital environments.",
    aboutBody:
      "Originally from Morocco, I obtained my scientific baccalaureate with honors before continuing my studies in France. At ESAIP, I developed my first technical foundations in Python, C, SQL, web development, Linux environments and network fundamentals. What first attracted me was the security of systems and digital environments. Then I discovered programming and understood how much analysis, logic and technical rigor can be used to build reliable tools.",
    aboutCards: [
      {
        title: "Balanced profile",
        text: "A positioning built around systems, reliability and secure digital environments, without giving the impression of hesitation or dispersion.",
      },
      {
        title: "Future engineer mindset",
        text: "Curious, structured and committed to learning through projects, teamwork and progressive technical growth.",
      },
      {
        title: "International perspective",
        text: "A multicultural background shaped between Morocco and France, with the ambition to work in demanding and evolving environments.",
      },
    ],
    journeyTitle: "Journey",
    journeyLead:
      "A few milestones that explain how my interest in systems and technology gradually became a coherent engineering direction.",
    journeyItems: [
      {
        period: "Early interest",
        title: "Curiosity for computers and digital systems",
        description:
          "Since middle school, I have been interested in computers, machines and the role technology plays in everyday life.",
        icon: "sparkles",
      },
      {
        period: "Morocco",
        title: "Scientific baccalaureate obtained with honors",
        description:
          "I earned a scientific baccalaureate in physics and chemistry, then chose to continue my studies in France.",
        icon: "graduation",
      },
      {
        period: "Morocco → France",
        title: "Move to France for engineering studies",
        description:
          "This step marked a turning point: discovering a new academic environment and building a long-term technical path.",
        icon: "plane",
      },
      {
        period: "ESAIP",
        title: "Technical foundations in programming, systems and data",
        description:
          "At ESAIP, I strengthened my skills in Python, C, SQL, HTML/CSS, Linux and networking fundamentals.",
        icon: "terminal",
      },
      {
        period: "Projects",
        title: "From theory to concrete projects",
        description:
          "School and team projects helped me apply logic, problem solving and technical discipline in real situations.",
        icon: "folder",
      },
      {
        period: "2025",
        title: "Thales STEM For All laureate",
        description:
          "A distinction that recognized my academic commitment and my involvement in science and technology.",
        icon: "award",
      },
    ],
    projectsTitle: "Projects",
    projectsLead:
      "Projects that reflect my current approach: using code to solve technical problems linked to reliability, structure and security.",
    projectLabel: "Project",
    projects: [
      {
        title: "SSL Checker",
        category: "Security + monitoring",
        description:
          "A project designed to monitor SSL certificates by checking validity, expiration dates and HTTPS connection reliability. I present it as a bridge between security logic, technical monitoring and operational reliability.",
        stack: ["Python", "HTTPS", "Monitoring", "Certificates"],
        links: [
          { label: "GitHub", href: "https://github.com/Derrazmouad0" },
          { label: "Live", href: "https://seal-beta-liart.vercel.app/" },
        ],
        featured: true,
      },
      {
        title: "ACT IN SPACE Hackathon",
        category: "Satellite data challenge",
        description:
          "A team reflection project focused on how satellite data can be better secured and better exploited. This experience highlighted collaboration, problem framing and solution design under time pressure.",
        stack: ["Teamwork", "Data", "Security", "Presentation"],
        links: [],
      },
      {
        title: "Battleship",
        category: "Advanced algorithmics",
        description:
          "A group project developed in the context of advanced algorithmics, based on the battleship game. It helped reinforce logic, structuring and collaborative development.",
        stack: ["Algorithmics", "C", "Logic"],
        links: [],
      },
      {
        title: "Le Compte est Bon",
        category: "C programming",
        description:
          "A C project built around a classic arithmetic problem-solving game. It strengthened my understanding of structured programming and algorithmic reasoning.",
        stack: ["C", "Algorithms", "Problem solving"],
        links: [],
      },
    ],
    skillsTitle: "Skills",
    skillsLead:
      "A junior profile in development, with skills selected to support a clear positioning around systems, structure and digital reliability.",
    skillGroups: [
      {
        title: "Technical skills",
        icon: "code",
        items: [
          "Python",
          "SQL",
          "C",
          "HTML / CSS",
          "Linux command line",
          "TCP/IP, HTTP, HTTPS",
          "Excel",
          "Microsoft Office",
          "Google Workspace",
          "Clipchamp",
        ],
      },
      {
        title: "Professional strengths",
        icon: "sparkles",
        items: [
          "Autonomy",
          "Rigor",
          "Adaptability",
          "Teamwork",
          "Communication",
          "Curiosity",
        ],
      },
    ],
    distinctionTitle: "Distinctions",
    distinctionLead: "A recognition I want to make clearly visible on the portfolio.",
    distinctionText:
      "Thales STEM For All Laureate 2025, awarded in recognition of academic excellence and commitment to science and technology.",
    languagesTitle: "Languages",
    languages: [
      { name: "Arabic", level: "Native" },
      { name: "French", level: "Fluent" },
      { name: "English", level: "Intermediate" },
    ],
    contactTitle: "Contact",
    contactLead:
      "For work-study opportunities, technical exchanges or project discussions.",
    formTitle: "Send a message",
    formName: "Full name",
    formEmail: "Email address",
    formSubject: "Subject",
    formMessage: "Your message",
    formButton: "Send message",
    formSending: "Sending...",
    formSuccess: "Message sent successfully.",
    formError: "An error occurred. Please try again later.",
    footer:
      "© 2026 Mouad Derraz. Portfolio designed to present a future engineering profile built around systems, reliability and secure digital environments.",
    location: "Aix-en-Provence, France",
    contactLabels: {
      email: "Email",
      phone: "Phone",
      location: "Location",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
  },

  fr: {
    dir: "ltr",
    nav: [
      "Accueil",
      "À propos",
      "Parcours",
      "Projets",
      "Compétences",
      "Distinctions",
      "Langues",
      "Contact",
    ],
    heroBadge: "Étudiant en informatique · Recherche d'alternance pour 2026",
    heroSubtitle: "Étudiant en informatique",
    heroTitleHighlight: "Portfolio",
    heroIntro:
      "Je suis étudiant en informatique à l’ESAIP et je construis un profil d’ingénieur structuré autour des systèmes, de la fiabilité et des environnements numériques sécurisés. Mon approche relie l’analyse, la logique et la rigueur technique pour concevoir des solutions utiles et bien organisées.",
    heroAvailability: "Disponible pour une alternance en 2026",
    heroPrimaryCta: "Découvrir mes projets",
    heroSecondaryCta: "Me contacter",
    heroStats: [
      { label: "Objectif", value: "Alternance 2026" },
      { label: "Langues", value: "3" },
      { label: "Fil conducteur", value: "Fiabilité numérique" },
    ],
    heroTags: ["Python", "SQL", "Linux", "Systèmes", "Sécurité", "Fiabilité"],
    aboutTitle: "À propos",
    aboutLead:
      "Je développe un profil d’ingénieur construit autour de la structure, de la fiabilité et des environnements numériques sécurisés.",
    aboutBody:
      "Originaire du Maroc, j’ai obtenu mon baccalauréat scientifique avec mention bien avant de poursuivre mes études en France. À l’ESAIP, j’ai construit mes premières bases techniques en Python, C, SQL, développement web, environnements Linux et fondamentaux réseaux. Ce qui m’a d’abord attiré, c’est la sécurité des systèmes et des environnements numériques. Ensuite, j’ai découvert la programmation et j’ai compris à quel point l’analyse, la logique et la rigueur technique permettent de construire des outils fiables.",
    aboutCards: [
      {
        title: "Profil équilibré",
        text: "Un positionnement construit autour des systèmes, de la fiabilité et des environnements numériques sécurisés, sans donner l’impression d’un parcours dispersé.",
      },
      {
        title: "Esprit futur ingénieur",
        text: "Curieux, structuré et engagé dans une progression continue à travers les projets, le travail d’équipe et l’apprentissage technique.",
      },
      {
        title: "Ouverture internationale",
        text: "Un parcours entre le Maroc et la France, avec l’ambition d’évoluer dans des environnements exigeants et en transformation.",
      },
    ],
    journeyTitle: "Parcours",
    journeyLead:
      "Quelques étapes clés pour comprendre comment mon intérêt pour les systèmes et la technologie est devenu une direction cohérente.",
    journeyItems: [
      {
        period: "Premières années",
        title: "Curiosité pour l’informatique et les systèmes numériques",
        description:
          "Depuis le collège, je m’intéresse aux ordinateurs, aux machines et à la place croissante de la technologie dans notre quotidien.",
        icon: "sparkles",
      },
      {
        period: "Maroc",
        title: "Baccalauréat scientifique obtenu avec mention bien",
        description:
          "J’ai obtenu un baccalauréat scientifique en sciences physiques et chimie, avant de faire le choix de poursuivre mes études en France.",
        icon: "graduation",
      },
      {
        period: "Maroc → France",
        title: "Départ en France pour poursuivre un cursus d’ingénieur",
        description:
          "Cette étape a marqué un tournant : nouveau cadre académique, nouvelle exigence et construction d’une trajectoire technique de long terme.",
        icon: "plane",
      },
      {
        period: "ESAIP",
        title: "Bases techniques en programmation, systèmes et donnée",
        description:
          "À l’ESAIP, j’ai consolidé mes compétences en Python, C, SQL, HTML/CSS, Linux et fondamentaux réseaux.",
        icon: "terminal",
      },
      {
        period: "Projets",
        title: "Passage de la théorie à des projets concrets",
        description:
          "Les projets académiques et collectifs m’ont permis d’appliquer la logique, la résolution de problème et la discipline technique à des cas réels.",
        icon: "folder",
      },
      {
        period: "2025",
        title: "Lauréat Thales STEM For All",
        description:
          "Une distinction qui a reconnu mon engagement académique et mon implication dans les sciences et les technologies.",
        icon: "award",
      },
    ],
    projectsTitle: "Projets",
    projectsLead:
      "Des projets qui reflètent ma manière actuelle d’aborder l’informatique : utiliser le code pour résoudre des problèmes liés à la fiabilité, à la structure et à la sécurité.",
    projectLabel: "Projet",
    projects: [
      {
        title: "SSL Checker",
        category: "Sécurité + monitoring",
        description:
          "Un projet conçu pour surveiller des certificats SSL en vérifiant leur validité, leur date d’expiration et la fiabilité des connexions HTTPS. Je le présente comme un pont entre logique de sécurité, supervision technique et fiabilité opérationnelle.",
        stack: ["Python", "HTTPS", "Monitoring", "Certificats"],
        links: [
          { label: "GitHub", href: "https://github.com/Derrazmouad0" },
          { label: "Démo", href: "https://seal-beta-liart.vercel.app/" },
        ],
        featured: true,
      },
      {
        title: "Hackathon ACT IN SPACE",
        category: "Défi autour des données satellitaires",
        description:
          "Un projet de réflexion en équipe centré sur une question : comment mieux sécuriser et mieux exploiter les données issues des satellites. Cette expérience a mis en avant la collaboration, le cadrage d’un problème et la construction rapide d’une proposition de valeur.",
        stack: ["Travail d’équipe", "Donnée", "Sécurité", "Présentation"],
        links: [],
      },
      {
        title: "Bataille navale",
        category: "Algorithmique avancée",
        description:
          "Un projet collectif réalisé dans le cadre d’un enseignement d’algorithmique avancée, autour du jeu de la bataille navale. Il m’a permis de renforcer mes bases en logique, structuration et développement en équipe.",
        stack: ["Algorithmique", "C", "Logique"],
        links: [],
      },
      {
        title: "Le Compte est Bon",
        category: "Programmation en C",
        description:
          "Un projet en langage C basé sur un problème classique de calcul et de résolution. Il a renforcé ma compréhension de la programmation structurée et du raisonnement algorithmique.",
        stack: ["C", "Algorithmes", "Résolution de problème"],
        links: [],
      },
    ],
    skillsTitle: "Compétences",
    skillsLead:
      "Un profil encore junior en développement, avec des compétences sélectionnées pour servir un positionnement clair autour des systèmes, de la structure et de la fiabilité numérique.",
    skillGroups: [
      {
        title: "Compétences techniques",
        icon: "code",
        items: [
          "Python",
          "SQL",
          "C",
          "HTML / CSS",
          "Ligne de commande Linux",
          "TCP/IP, HTTP, HTTPS",
          "Excel",
          "Microsoft Office",
          "Google Workspace",
          "Clipchamp",
        ],
      },
      {
        title: "Compétences professionnelles",
        icon: "sparkles",
        items: [
          "Autonomie",
          "Rigueur",
          "Adaptabilité",
          "Travail en équipe",
          "Communication",
          "Curiosité",
        ],
      },
    ],
    distinctionTitle: "Distinctions",
    distinctionLead: "Une reconnaissance que je souhaite rendre très visible sur le portfolio.",
    distinctionText:
      "Lauréat du prix Thales STEM For All 2025, distinction obtenue en reconnaissance de l’excellence académique et de l’engagement dans les sciences et les technologies.",
    languagesTitle: "Langues",
    languages: [
      { name: "Arabe", level: "Langue maternelle" },
      { name: "Français", level: "Courant" },
      { name: "Anglais", level: "Intermédiaire" },
    ],
    contactTitle: "Contact",
    contactLead:
      "Pour une opportunité d’alternance, un échange professionnel ou une discussion autour d’un projet.",
    formTitle: "M’écrire",
    formName: "Nom complet",
    formEmail: "Adresse e-mail",
    formSubject: "Sujet",
    formMessage: "Votre message",
    formButton: "Envoyer le message",
    formSending: "Envoi en cours...",
    formSuccess: "Message envoyé avec succès.",
    formError: "Une erreur est survenue. Veuillez réessayer plus tard.",
    footer:
      "© 2026 Mouad Derraz. Portfolio pensé pour présenter un profil de futur ingénieur construit autour des systèmes, de la fiabilité et des environnements numériques sécurisés.",
    location: "Aix-en-Provence, France",
    contactLabels: {
      email: "E-mail",
      phone: "Téléphone",
      location: "Localisation",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
  },

  ar: {
    dir: "rtl",
    nav: ["الرئيسية", "نبذة", "المسار", "المشاريع", "المهارات", "التميز", "اللغات", "التواصل"],
    heroBadge: "طالب علوم الحاسوب · أبحث عن فرصة تناوب في 2026",
    heroSubtitle: "طالب علوم الحاسوب",
    heroTitleHighlight: "الملف الشخصي",
    heroIntro:
      "أنا طالب في علوم الحاسوب في ESAIP وأبني مساراً هندسياً منظماً حول الأنظمة والموثوقية والبيئات الرقمية الآمنة. مقاربتي تجمع بين التحليل والمنطق والدقة التقنية من أجل تصميم حلول مفيدة ومنظمة.",
    heroAvailability: "متاح لفرصة تناوب في 2026",
    heroPrimaryCta: "اكتشف مشاريعي",
    heroSecondaryCta: "تواصل معي",
    heroStats: [
      { label: "الهدف", value: "تناوب 2026" },
      { label: "اللغات", value: "3" },
      { label: "المحور", value: "الموثوقية الرقمية" },
    ],
    heroTags: ["Python", "SQL", "Linux", "الأنظمة", "الأمن", "الموثوقية"],
    aboutTitle: "نبذة",
    aboutLead:
      "أطوّر ملفاً هندسياً منظماً حول البنية والموثوقية والبيئات الرقمية الآمنة.",
    aboutBody:
      "أنا من المغرب، وحصلت على البكالوريا العلمية بميزة جيدة قبل متابعة دراستي في فرنسا. في ESAIP طورت أولى أسسي التقنية في Python و C و SQL وتطوير الويب وبيئات Linux وأساسيات الشبكات. أكثر ما جذبني في البداية هو أمن الأنظمة والبيئات الرقمية، ثم اكتشفت البرمجة وفهمت كيف يمكن للتحليل والمنطق والدقة التقنية أن تبني أدوات موثوقة.",
    aboutCards: [
      {
        title: "ملف متوازن",
        text: "تموضع مبني حول الأنظمة والموثوقية والبيئات الرقمية الآمنة دون أن يبدو المسار مشتتاً أو غير واضح.",
      },
      {
        title: "عقلية مهندس مستقبلي",
        text: "فضول، تنظيم، وتطور مستمر من خلال المشاريع والعمل الجماعي والتعلم التقني.",
      },
      {
        title: "انفتاح دولي",
        text: "مسار بين المغرب وفرنسا مع طموح للعمل في بيئات مهنية متطلبة ومتغيرة.",
      },
    ],
    journeyTitle: "المسار",
    journeyLead: "محطات أساسية تشرح كيف أصبح اهتمامي بالأنظمة والتكنولوجيا اتجاهاً متماسكاً.",
    journeyItems: [
      {
        period: "البداية",
        title: "فضول مبكر تجاه الحاسوب والأنظمة الرقمية",
        description: "منذ الإعدادي وأنا مهتم بالحواسيب والآلات والمكانة المتزايدة للتكنولوجيا في حياتنا اليومية.",
        icon: "sparkles",
      },
      {
        period: "المغرب",
        title: "الحصول على البكالوريا العلمية بميزة جيدة",
        description: "حصلت على بكالوريا علمية في العلوم الفيزيائية والكيمياء ثم اخترت متابعة دراستي في فرنسا.",
        icon: "graduation",
      },
      {
        period: "المغرب → فرنسا",
        title: "الانتقال إلى فرنسا لمتابعة تكوين هندسي",
        description: "هذه المرحلة شكلت منعطفاً جديداً: بيئة أكاديمية مختلفة وبناء مسار تقني طويل المدى.",
        icon: "plane",
      },
      {
        period: "ESAIP",
        title: "بناء أساس في البرمجة والأنظمة والبيانات",
        description: "في ESAIP عززت مهاراتي في Python و C و SQL و HTML/CSS و Linux وأساسيات الشبكات.",
        icon: "terminal",
      },
      {
        period: "المشاريع",
        title: "الانتقال من النظري إلى مشاريع ملموسة",
        description: "المشاريع الأكاديمية والجماعية سمحت لي بتطبيق المنطق وحل المشكلات والانضباط التقني على حالات فعلية.",
        icon: "folder",
      },
      {
        period: "2025",
        title: "الفوز بجائزة Thales STEM For All",
        description: "تميّز يعكس التزامي الأكاديمي واهتمامي بالعلوم والتكنولوجيا.",
        icon: "award",
      },
    ],
    projectsTitle: "المشاريع",
    projectsLead:
      "مشاريع تعكس طريقتي الحالية في التعامل مع المعلوميات: استعمال الكود لحل مشاكل مرتبطة بالموثوقية والبنية والأمن.",
    projectLabel: "مشروع",
    projects: [
      {
        title: "SSL Checker",
        category: "أمن + مراقبة",
        description:
          "مشروع لمراقبة شهادات SSL عبر التحقق من صلاحيتها وتاريخ انتهائها وموثوقية اتصالات HTTPS. أقدمه كحل يجمع بين منطق الأمن والمراقبة التقنية والموثوقية التشغيلية.",
        stack: ["Python", "HTTPS", "Monitoring", "Certificates"],
        links: [
          { label: "GitHub", href: "https://github.com/Derrazmouad0" },
          { label: "عرض", href: "https://seal-beta-liart.vercel.app/" },
        ],
        featured: true,
      },
      {
        title: "هاكاثون ACT IN SPACE",
        category: "تحدي بيانات الأقمار الصناعية",
        description:
          "مشروع تفكير جماعي حول سؤال أساسي: كيف نؤمن بشكل أفضل البيانات القادمة من الأقمار الصناعية وكيف نستغلها بشكل أفضل. أبرز هذا التحدي العمل الجماعي وصياغة المشكلة وبناء فكرة تحت ضغط الوقت.",
        stack: ["عمل جماعي", "بيانات", "أمن", "عرض"],
        links: [],
      },
      {
        title: "المعركة البحرية",
        category: "خوارزميات متقدمة",
        description:
          "مشروع جماعي تم في إطار مادة الخوارزميات المتقدمة، ساعدني على تقوية المنطق والتنظيم والتطوير ضمن فريق.",
        stack: ["Algorithmics", "C", "Logic"],
        links: [],
      },
      {
        title: "Le Compte est Bon",
        category: "البرمجة بلغة C",
        description:
          "مشروع بلغة C مبني على مسألة حسابية كلاسيكية، وقد عزز فهمي للبرمجة المنظمة وللتفكير الخوارزمي.",
        stack: ["C", "Algorithms", "Problem solving"],
        links: [],
      },
    ],
    skillsTitle: "المهارات",
    skillsLead:
      "ملف لا يزال في مرحلة التطور، مع مهارات تم اختيارها لخدمة تموضع واضح حول الأنظمة والبنية والموثوقية الرقمية.",
    skillGroups: [
      {
        title: "المهارات التقنية",
        icon: "code",
        items: ["Python", "SQL", "C", "HTML / CSS", "Linux command line", "TCP/IP, HTTP, HTTPS", "Excel", "Microsoft Office", "Google Workspace", "Clipchamp"],
      },
      {
        title: "المهارات المهنية",
        icon: "sparkles",
        items: ["الاستقلالية", "الصرامة", "القدرة على التكيف", "العمل الجماعي", "التواصل", "الفضول"],
      },
    ],
    distinctionTitle: "التميّز",
    distinctionLead: "اعتراف أريد أن يكون واضحاً جداً داخل هذا الملف الشخصي.",
    distinctionText:
      "الفائز بجائزة Thales STEM For All لعام 2025، تقديراً للتفوق الأكاديمي والالتزام بمجالات العلوم والتكنولوجيا.",
    languagesTitle: "اللغات",
    languages: [
      { name: "العربية", level: "اللغة الأم" },
      { name: "الفرنسية", level: "بطلاقة" },
      { name: "الإنجليزية", level: "متوسط" },
    ],
    contactTitle: "التواصل",
    contactLead: "للتناوب أو التبادل المهني أو النقاش حول مشروع.",
    formTitle: "راسلني",
    formName: "الاسم الكامل",
    formEmail: "البريد الإلكتروني",
    formSubject: "الموضوع",
    formMessage: "رسالتك",
    formButton: "إرسال",
    formSending: "جارٍ الإرسال...",
    formSuccess: "تم إرسال الرسالة بنجاح.",
    formError: "حدث خطأ. حاول مرة أخرى لاحقاً.",
    footer:
      "© 2026 معاد دراز. ملف شخصي صُمم لتقديم ملامح مهندس مستقبلي مبني حول الأنظمة والموثوقية والبيئات الرقمية الآمنة.",
    location: "إيكس أون بروفانس، فرنسا",
    contactLabels: {
      email: "البريد الإلكتروني",
      phone: "الهاتف",
      location: "الموقع",
      linkedin: "لينكدإن",
      github: "GitHub",
    },
  },
};

const sectionIds = [
  "home",
  "about",
  "journey",
  "projects",
  "skills",
  "distinctions",
  "languages",
  "contact",
];

const socialLinks = [
  {
    key: "email",
    icon: Mail,
    href: "mailto:derrazmouad0@gmail.com",
    text: "derrazmouad0@gmail.com",
  },
  {
    key: "phone",
    icon: Phone,
    href: "tel:+33763583494",
    text: "+33 7 63 58 34 94",
  },
  {
    key: "location",
    icon: MapPin,
    href: "#",
    text: "Aix-en-Provence, France",
  },
  {
    key: "linkedin",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/mouad-derraz/",
    text: "linkedin.com/in/mouad-derraz",
  },
  {
    key: "github",
    icon: Github,
    href: "https://github.com/Derrazmouad0",
    text: "github.com/Derrazmouad0",
  },
];

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function getMainTitleStyle(theme) {
  return theme === "dark"
    ? { color: "#ffffff", textShadow: "0 0 18px rgba(255,255,255,0.08)" }
    : { color: "#000000" };
}

function useStoredTheme() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const saved = localStorage.getItem("mouad-theme-v2");
    if (saved === "light" || saved === "dark") setTheme(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("mouad-theme-v2", theme);
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return [theme, setTheme];
}

function AnimatedBackground({ theme }) {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      <div
        className={cn(
          "absolute inset-0 transition-all duration-700",
          theme === "dark"
            ? "bg-[radial-gradient(circle_at_15%_20%,rgba(6,182,212,0.15),transparent_25%),radial-gradient(circle_at_85%_10%,rgba(59,130,246,0.12),transparent_20%),radial-gradient(circle_at_50%_85%,rgba(16,185,129,0.10),transparent_25%),linear-gradient(180deg,#04070d,#071423_55%,#03060c)]"
            : "bg-[radial-gradient(circle_at_15%_20%,rgba(6,182,212,0.08),transparent_24%),radial-gradient(circle_at_85%_10%,rgba(59,130,246,0.08),transparent_20%),radial-gradient(circle_at_50%_85%,rgba(16,185,129,0.08),transparent_24%),linear-gradient(180deg,#f8fbff,#ecf7fb_55%,#f7fbff)]"
        )}
      />
      <div
        className={cn(
          "absolute inset-0 opacity-40",
          theme === "dark"
            ? "bg-[linear-gradient(rgba(34,211,238,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.05)_1px,transparent_1px)]"
            : "bg-[linear-gradient(rgba(14,165,233,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.08)_1px,transparent_1px)]"
        )}
        style={{ backgroundSize: "44px 44px" }}
      />
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className={cn(
            "absolute rounded-full",
            theme === "dark" ? "bg-cyan-300/40" : "bg-sky-500/25"
          )}
          style={{
            width: i % 3 === 0 ? 3 : 2,
            height: i % 3 === 0 ? 3 : 2,
            left: `${(i * 11) % 100}%`,
            top: `${(i * 17) % 100}%`,
          }}
          animate={{ opacity: [0.2, 0.8, 0.2], y: [0, -10, 0] }}
          transition={{ duration: 4 + i * 0.3, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

function Section({ id, title, lead, children, className = "", theme }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.7 }}
      className={cn("relative mx-auto w-full max-w-7xl px-6 py-20 md:px-10 lg:px-12", className)}
    >
      <div className="mb-12 text-center">
        <div className="mb-4 flex items-center justify-center gap-4">
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-sky-400/60 to-transparent" />
          <span
            className="text-xs uppercase tracking-[0.35em]"
            style={theme === "dark" ? { color: "#ffffff" } : { color: "#000000" }}
          >
            {title}
          </span>
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-sky-400/60 to-transparent" />
        </div>
        <h2
          className="text-3xl font-semibold tracking-tight md:text-5xl"
          style={getMainTitleStyle(theme)}
        >
          {title}
        </h2>
        {lead && (
          <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-300 md:text-lg">
            {lead}
          </p>
        )}
      </div>
      {children}
    </motion.section>
  );
}

function GlassCard({ children, className = "" }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      className={cn(
        "rounded-[28px] border border-white/25 bg-white/60 p-6 shadow-[0_18px_60px_rgba(15,23,42,0.08)] backdrop-blur-2xl dark:border-cyan-400/10 dark:bg-white/5 dark:shadow-[0_18px_60px_rgba(6,182,212,0.08)]",
        className
      )}
    >
      {children}
    </motion.div>
  );
}

function iconForJourney(name) {
  switch (name) {
    case "plane":
      return Plane;
    case "graduation":
      return GraduationCap;
    case "terminal":
      return TerminalSquare;
    case "folder":
      return FolderKanban;
    case "award":
      return Trophy;
    default:
      return Sparkles;
  }
}

function iconForSkill(name) {
  return name === "code" ? Code2 : Sparkles;
}

function ContactForm({ t }) {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("loading");
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        PUBLIC_KEY
      );
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    } catch (error) {
      console.error(error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2">
          <label className="block">
            <span className="mb-2 flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
              <User className="h-4 w-4" />
              {t.formName}
            </span>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full rounded-2xl border border-white/20 bg-white/70 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-400 dark:border-white/10 dark:bg-white/5 dark:text-white"
            />
          </label>
          <label className="block">
            <span className="mb-2 flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
              <Mail className="h-4 w-4" />
              {t.formEmail}
            </span>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full rounded-2xl border border-white/20 bg-white/70 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-400 dark:border-white/10 dark:bg-white/5 dark:text-white"
            />
          </label>
        </div>
        <label className="block">
          <span className="mb-2 flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
            <MessageSquare className="h-4 w-4" />
            {t.formSubject}
          </span>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full rounded-2xl border border-white/20 bg-white/70 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-400 dark:border-white/10 dark:bg-white/5 dark:text-white"
          />
        </label>
        <label className="block">
          <span className="mb-2 flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
            <Send className="h-4 w-4" />
            {t.formMessage}
          </span>
          <textarea
            name="message"
            rows="6"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full rounded-2xl border border-white/20 bg-white/70 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-400 dark:border-white/10 dark:bg-white/5 dark:text-white"
          />
        </label>
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-gradient-to-r from-sky-500 to-cyan-400 px-6 py-3 text-sm font-medium text-white transition hover:-translate-y-1 disabled:opacity-70"
        >
          {status === "loading" ? t.formSending : t.formButton}
          <Send className="h-4 w-4" />
        </button>
      </form>
      {status === "success" && <p className="mt-4 text-sm text-emerald-500">{t.formSuccess}</p>}
      {status === "error" && <p className="mt-4 text-sm text-red-500">{t.formError}</p>}
    </>
  );
}

export default function App() {
  const [theme, setTheme] = useStoredTheme();
  const [lang, setLang] = useState("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const t = translations[lang];

  useEffect(() => {
    document.documentElement.dir = t.dir;
    document.documentElement.lang = lang;
  }, [t.dir, lang]);

  useEffect(() => {
    document.title = "Mouad Derraz | Portfolio";
    let link = document.querySelector("link[rel='icon']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
    }
    link.href = "/favicon-portfolio.png";
  }, []);

  const navItems = useMemo(
    () => t.nav.map((label, index) => ({ label, id: sectionIds[index] })),
    [t.nav]
  );

  return (
    <div className={cn(theme === "dark" ? "dark" : "", "min-h-screen overflow-x-hidden")}>
      <div className="relative min-h-screen bg-white text-slate-900 transition-colors duration-500 dark:bg-[#02050a] dark:text-white">
        <AnimatedBackground theme={theme} />

        <style>{`
          html { scroll-behavior: smooth; }
          body { font-family: Inter, ui-sans-serif, system-ui, sans-serif; }
          ::selection { background: rgba(34,211,238,0.25); }
        `}</style>

        <header className="sticky top-0 z-50 px-4 pt-4 md:px-6">
          <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/20 bg-white/65 px-4 py-3 shadow-[0_8px_40px_rgba(15,23,42,0.08)] backdrop-blur-2xl dark:border-cyan-400/10 dark:bg-white/5">
            <a href="#home" className="flex items-center gap-3 text-sm font-medium text-slate-900 dark:text-white">
              <div className="h-10 w-10 overflow-hidden rounded-full border border-white/20 bg-white/70 dark:border-white/10 dark:bg-white/5">
                <img src="/mouad-derraz-profile.jpg" alt="Mouad Derraz" className="h-full w-full object-cover" />
              </div>
              <span className="hidden text-sm font-semibold tracking-[0.12em] md:block">Mouad Derraz</span>
            </a>

            <nav className="hidden items-center gap-5 lg:flex">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="text-sm text-slate-600 transition hover:text-sky-500 dark:text-slate-300 dark:hover:text-cyan-300"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <div className="hidden items-center gap-2 rounded-full border border-white/30 bg-white/60 p-1 dark:border-white/10 dark:bg-white/5 md:flex">
                {["en", "fr", "ar"].map((item) => (
                  <button
                    key={item}
                    onClick={() => setLang(item)}
                    className={cn(
                      "rounded-full px-3 py-1.5 text-xs font-medium uppercase transition",
                      lang === item
                        ? "bg-gradient-to-r from-sky-500 to-cyan-400 text-white shadow-lg"
                        : "text-slate-600 hover:text-sky-500 dark:text-slate-300 dark:hover:text-cyan-300"
                    )}
                  >
                    {item}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="rounded-full border border-white/30 bg-white/60 p-2.5 text-slate-700 transition hover:scale-105 hover:text-sky-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:text-cyan-300"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </button>

              <button
                onClick={() => setMenuOpen((value) => !value)}
                className="rounded-full border border-white/30 bg-white/60 p-2.5 text-slate-700 transition dark:border-white/10 dark:bg-white/5 dark:text-slate-200 lg:hidden"
                aria-label="Menu"
              >
                {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </button>
            </div>
          </div>

          {menuOpen && (
            <div className="mx-auto mt-3 max-w-7xl rounded-[28px] border border-white/20 bg-white/75 p-4 shadow-xl backdrop-blur-2xl dark:border-cyan-400/10 dark:bg-slate-950/75 lg:hidden">
              <div className="mb-4 flex flex-wrap gap-2">
                {["en", "fr", "ar"].map((item) => (
                  <button
                    key={item}
                    onClick={() => setLang(item)}
                    className={cn(
                      "rounded-full px-3 py-2 text-xs font-medium uppercase transition",
                      lang === item
                        ? "bg-sky-500 text-white"
                        : "bg-slate-100 text-slate-700 dark:bg-white/5 dark:text-slate-200"
                    )}
                  >
                    <span className="inline-flex items-center gap-2">
                      <Languages className="h-3.5 w-3.5" />
                      {item}
                    </span>
                  </button>
                ))}
              </div>
              <div className="grid gap-2">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-2xl px-3 py-2 text-slate-700 transition hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/5"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </header>

        <main className="relative z-10">
          <section id="home" className="mx-auto flex min-h-[95vh] w-full max-w-7xl items-center px-6 py-12 md:px-10 lg:px-12">
            <div className="grid w-full items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
              <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <div
                  className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs uppercase tracking-[0.18em]"
                  style={theme === "dark" ? { color: "#ffffff" } : { color: "#0f172a" }}
                >
                  <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                  {t.heroBadge}
                </div>

                <h1
                  className="text-5xl font-semibold tracking-tight md:text-7xl"
                  style={getMainTitleStyle(theme)}
                >
                  Mouad Derraz
                  <span className="block bg-gradient-to-r from-sky-500 via-cyan-400 to-emerald-400 bg-clip-text pb-1 text-transparent">
                    {t.heroTitleHighlight}
                  </span>
                </h1>

                <p
                  className="mt-4 text-xl md:text-2xl"
                  style={theme === "dark" ? { color: "#ffffff" } : { color: "#000000" }}
                >
                  {t.heroSubtitle}
                </p>

                <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300 md:text-lg">
                  {t.heroIntro}
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="#projects"
                    className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 px-6 py-3 text-sm font-medium text-white transition hover:-translate-y-1"
                  >
                    {t.heroPrimaryCta}
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </a>
                  <a
                    href="#contact"
                    className="group inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/60 px-6 py-3 text-sm font-medium text-slate-900 backdrop-blur-xl transition hover:-translate-y-1 dark:border-white/10 dark:bg-white/5 dark:text-white"
                  >
                    {t.heroSecondaryCta}
                    <ChevronDown className="h-4 w-4 transition group-hover:translate-y-0.5" />
                  </a>
                </div>

                <div className="mt-10 grid gap-4 sm:grid-cols-3">
                  {t.heroStats.map((item) => (
                    <GlassCard key={item.label} className="p-4">
                      <div
                        className="text-xs uppercase tracking-[0.2em]"
                        style={theme === "dark" ? { color: "#ffffff" } : { color: "#475569" }}
                      >
                        {item.label}
                      </div>
                      <div className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">
                        {item.value}
                      </div>
                    </GlassCard>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, delay: 0.1 }}
                className="relative mx-auto w-full max-w-md"
              >
                <div className="absolute inset-0 rounded-[36px] bg-gradient-to-br from-sky-400/25 via-transparent to-cyan-300/20 blur-3xl dark:from-cyan-300/20 dark:to-blue-500/20" />
                <GlassCard className="relative overflow-hidden rounded-[36px] p-5">
                  <div className="rounded-[28px] border border-white/20 bg-gradient-to-br from-white/80 to-white/50 p-4 dark:border-cyan-400/10 dark:from-white/10 dark:to-white/5">
                    <div className="aspect-[4/5] overflow-hidden rounded-[24px] border border-white/30 bg-slate-100 dark:border-white/10 dark:bg-slate-950">
                      <img src="/mouad-derraz-profile.jpg" alt="Mouad Derraz" className="h-full w-full object-cover" />
                    </div>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-3">
                    {t.heroTags.map((item) => (
                      <div
                        key={item}
                        className="rounded-full border border-white/20 bg-white/60 px-4 py-2 text-sm text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-700 dark:text-emerald-300">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    {t.heroAvailability}
                  </div>
                </GlassCard>
              </motion.div>
            </div>
          </section>

          <Section id="about" title={t.aboutTitle} lead={t.aboutLead} theme={theme}>
            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <GlassCard>
                <p className="text-base leading-8 text-slate-600 dark:text-slate-300 md:text-lg">
                  {t.aboutBody}
                </p>
              </GlassCard>
              <div className="grid gap-6">
                {t.aboutCards.map((card) => (
                  <GlassCard key={card.title}>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{card.title}</h3>
                    <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{card.text}</p>
                  </GlassCard>
                ))}
              </div>
            </div>
          </Section>

          <Section id="journey" title={t.journeyTitle} lead={t.journeyLead} theme={theme}>
            <div className="relative mx-auto max-w-5xl">
              <div className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-cyan-400 via-sky-400/40 to-transparent md:block" />
              <div className="space-y-6">
                {t.journeyItems.map((item, idx) => {
                  const Icon = iconForJourney(item.icon);
                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: t.dir === "rtl" ? 40 : -40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.6, delay: idx * 0.08 }}
                      className="relative md:ps-14"
                    >
                      <div className="absolute start-0 top-7 hidden h-11 w-11 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/10 md:flex">
                        <Icon className="h-5 w-5 text-cyan-500 dark:text-cyan-300" />
                      </div>
                      <GlassCard>
                        <div
                          className="mb-2 text-xs uppercase tracking-[0.24em]"
                          style={theme === "dark" ? { color: "#ffffff" } : { color: "#0284c7" }}
                        >
                          {item.period}
                        </div>
                        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                        <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{item.description}</p>
                      </GlassCard>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </Section>

          <Section id="projects" title={t.projectsTitle} lead={t.projectsLead} theme={theme}>
            <div className="grid gap-6 md:grid-cols-2">
              {t.projects.map((project, idx) => (
                <GlassCard
                  key={project.title}
                  className={cn("relative overflow-hidden", project.featured && "md:col-span-2")}
                >
                  <div className="absolute right-0 top-0 h-36 w-36 rounded-full bg-sky-400/10 blur-3xl dark:bg-cyan-300/10" />
                  <div className="relative">
                    <div
                      className="mb-2 text-xs uppercase tracking-[0.24em]"
                      style={theme === "dark" ? { color: "#ffffff" } : { color: "#0284c7" }}
                    >
                      {t.projectLabel} {idx + 1} · {project.category}
                    </div>
                    <div className="mb-4 flex items-start justify-between gap-4">
                      <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">{project.title}</h3>
                      {project.featured && (
                        <div
                          className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs uppercase tracking-[0.18em]"
                          style={theme === "dark" ? { color: "#ffffff" } : { color: "#0f172a" }}
                        >
                          {lang === "fr" ? "Projet clé" : lang === "ar" ? "مشروع بارز" : "Featured"}
                        </div>
                      )}
                    </div>
                    <p className="leading-8 text-slate-600 dark:text-slate-300">{project.description}</p>
                    <div className="mt-5 flex flex-wrap gap-3">
                      {project.stack.map((item) => (
                        <div
                          key={item}
                          className="rounded-full border border-white/20 bg-white/60 px-4 py-2 text-sm text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                    {!!project.links.length && (
                      <div className="mt-6 flex flex-wrap gap-4">
                        {project.links.map((link) => (
                          <a
                            key={link.label}
                            href={link.href}
                            target={link.href.startsWith("http") ? "_blank" : undefined}
                            rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                            className="inline-flex items-center gap-2 text-sm font-medium text-sky-700 transition hover:text-sky-500 dark:text-cyan-300 dark:hover:text-cyan-200"
                          >
                            {link.label}
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </GlassCard>
              ))}
            </div>
          </Section>

          <Section id="skills" title={t.skillsTitle} lead={t.skillsLead} theme={theme}>
            <div className="grid gap-6 md:grid-cols-2">
              {t.skillGroups.map((group) => {
                const Icon = iconForSkill(group.icon);
                return (
                  <GlassCard key={group.title}>
                    <div className="mb-5 flex items-center gap-3">
                      <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-3">
                        <Icon className="h-5 w-5 text-cyan-500 dark:text-cyan-300" />
                      </div>
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{group.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {group.items.map((item) => (
                        <div
                          key={item}
                          className="rounded-full border border-white/20 bg-white/60 px-4 py-2 text-sm text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </GlassCard>
                );
              })}
            </div>
          </Section>

          <Section id="distinctions" title={t.distinctionTitle} lead={t.distinctionLead} theme={theme}>
            <GlassCard className="relative overflow-hidden">
              <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-cyan-400/10 to-transparent" />
              <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div className="flex items-start gap-4">
                  <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-4">
                    <Award className="h-8 w-8 text-cyan-500 dark:text-cyan-300" />
                  </div>
                  <div>
                    <div
                      className="mb-2 text-xs uppercase tracking-[0.24em]"
                      style={theme === "dark" ? { color: "#ffffff" } : { color: "#0284c7" }}
                    >
                      Thales STEM For All
                    </div>
                    <p className="max-w-3xl text-lg leading-8 text-slate-700 dark:text-slate-200">
                      {t.distinctionText}
                    </p>
                  </div>
                </div>
                <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-700 dark:text-emerald-300">
                  2025
                </div>
              </div>
            </GlassCard>
          </Section>

          <Section id="languages" title={t.languagesTitle} theme={theme}>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {t.languages.map((item, idx) => (
                <GlassCard key={item.name} className="text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/60 dark:border-white/10 dark:bg-white/5">
                    <Languages className="h-6 w-6 text-sky-500 dark:text-cyan-300" />
                  </div>
                  <div className="text-lg font-semibold text-slate-900 dark:text-white">{item.name}</div>
                  <div className="mt-2 text-sm text-slate-500 dark:text-slate-400">{item.level}</div>
                  <div className="mt-4 h-1.5 rounded-full bg-slate-200 dark:bg-white/10">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${[100, 90, 70][idx]}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: idx * 0.15 }}
                      className="h-1.5 rounded-full bg-gradient-to-r from-sky-500 to-cyan-300"
                    />
                  </div>
                </GlassCard>
              ))}
            </div>
          </Section>

          <Section id="contact" title={t.contactTitle} lead={t.contactLead} className="pb-24" theme={theme}>
            <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
              <GlassCard>
                <h3 className="mb-6 text-2xl font-semibold text-slate-900 dark:text-white">Mouad Derraz</h3>
                <div className="space-y-4">
                  {socialLinks.map(({ key, icon: Icon, href, text }) => (
                    <motion.a
                      key={key}
                      whileHover={{ x: t.dir === "rtl" ? -6 : 6 }}
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noreferrer" : undefined}
                      className="group flex items-center justify-between rounded-2xl border border-white/20 bg-white/55 p-4 transition hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                    >
                      <div className="flex items-center gap-4">
                        <div className="rounded-2xl border border-white/20 bg-white/60 p-3 transition group-hover:scale-110 dark:border-white/10 dark:bg-white/5">
                          <Icon className="h-5 w-5 text-sky-500 dark:text-cyan-300" />
                        </div>
                        <div>
                          <div className="text-sm text-slate-500 dark:text-slate-400">{t.contactLabels[key]}</div>
                          <div className="text-slate-900 dark:text-white">{key === "location" ? t.location : text}</div>
                        </div>
                      </div>
                      {href !== "#" && (
                        <ExternalLink className="h-4 w-4 text-slate-400 transition group-hover:text-sky-500 dark:group-hover:text-cyan-300" />
                      )}
                    </motion.a>
                  ))}
                </div>
              </GlassCard>

              <GlassCard className="relative overflow-hidden">
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-sky-400/10 blur-3xl dark:bg-cyan-300/10" />
                <div className="relative">
                  <h3 className="mb-4 text-2xl font-semibold text-slate-900 dark:text-white">{t.formTitle}</h3>
                  <ContactForm t={t} />
                </div>
              </GlassCard>
            </div>
          </Section>
        </main>

        <footer className="relative z-10 border-t border-white/20 px-6 py-8 text-center text-sm text-slate-500 dark:border-white/10 dark:text-slate-400">
          {t.footer}
        </footer>
      </div>
    </div>
  );
}