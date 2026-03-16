import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  Moon,
  Sun,
  Languages,
  Code2,
  Shield,
  TerminalSquare,
  Database,
  Network,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  ChevronDown,
  FolderKanban,
  Briefcase,
  Award,
  Globe,
  Sparkles,
  Menu,
  X,
  ExternalLink,
  Send,
  User,
  MessageSquare,
} from "lucide-react";

const SERVICE_ID = "service_dp7cob8";
const TEMPLATE_ID = "template_03kl8bm";
const PUBLIC_KEY = "3UcaVJHtnmdRz4Evi";

const translations = {
  fr: {
    dir: "ltr",
    nav: ["Accueil", "À propos", "Formation", "Projets", "Compétences", "Expérience", "Distinctions", "Langues", "Contact"],
    heroSubtitle: "Étudiant en informatique",
    heroIntro:
      "Étudiant en informatique, je m’intéresse particulièrement aux systèmes, aux environnements Linux, à la programmation et aux technologies modernes. J’aime travailler sur des projets concrets et continuer à progresser en développement, en réseaux et en cybersécurité.",
    projectsBtn: "Voir les projets",
    contactBtn: "Contact",
    aboutTitle: "À propos",
    aboutText:
      "Je suis étudiant en informatique à l’ESAIP, à Aix-en-Provence. Au fil de mon parcours, j’ai acquis de bonnes bases en programmation, en systèmes, en réseaux et en sécurité informatique. J’aime apprendre, travailler en équipe et avancer sur des projets techniques qui demandent de la logique, de la rigueur et un peu de créativité.",
    heroTags: ["Linux", "Cybersécurité", "Systèmes", "Développement"],
    heroIcons: ["Code", "Réseau", "Terminal", "Sécurité", "Base de données"],
    educationTitle: "Formation",
    educationItems: [
      {
        period: "2024 - aujourd’hui",
        title: "Cycle préparatoire, ESAIP",
        location: "Aix-en-Provence, France",
      },
      {
        period: "2023 - 2024",
        title: "Baccalauréat scientifique, mention bien",
        location: "Lycée Ryad Safwa, Fès",
      },
    ],
    projectsTitle: "Projets",
    projectLabel: "Projet",
    projects: [
      {
        title: "SEAL SSL Checker",
        description:
          "Outil qui permet de surveiller des certificats SSL et de vérifier simplement leur validité, leur date d’expiration et la fiabilité d’une connexion HTTPS.",
      },
      {
        title: "Bataille navale",
        description:
          "Projet réalisé en équipe dans le cadre d’un cours d’algorithmique. Il reprend le principe du jeu de bataille navale avec la gestion de la grille, l’enchaînement des tours et la détection des coups réussis.",
      },
      {
        title: "Le Compte est Bon",
        description:
          "Projet en équipe développé en langage C. Le but est d’atteindre un nombre cible à partir de nombres imposés et d’opérations simples, dans l’esprit du jeu mathématique classique.",
      },
      {
        title: "Hackathon ACT IN SPACE",
        description:
          "Projet mené pendant un hackathon international, avec un défi d’équipe de 24 heures autour d’une solution liée à la sécurisation des données satellitaires.",
      },
    ],
    skillsTitle: "Compétences",
    skillGroups: {
      programming: "Programmation",
      systems: "Systèmes",
      networks: "Réseaux",
      tools: "Outils",
      soft: "Qualités humaines",
    },
    skillItems: {
      programming: ["Python", "C", "HTML", "CSS", "SQL"],
      systems: ["Ligne de commande Linux"],
      networks: ["TCP/IP", "HTTP", "HTTPS"],
      tools: ["Microsoft Office", "Google Workspace", "Clipchamp"],
      soft: ["Autonomie", "Rigueur", "Créativité", "Esprit d’équipe", "Communication"],
    },
    experienceTitle: "Expérience",
    internshipLabel: "Expérience",
    internship: "Stage en comptabilité",
    internshipCompany: "CABINET ABID D’EXPERTISE COMPTABLE, Fès, Maroc",
    internshipTasks: [
      "Traitement de documents administratifs et financiers",
      "Vérification de données",
      "Gestion de documents confidentiels",
    ],
    volunteering: "Engagement associatif",
    volunteeringItems: [
      {
        title: "Ateliers du Festival des Sciences, Avignon",
        description:
          "Ateliers scientifiques interactifs présentant des découvertes mathématiques et scientifiques.",
      },
      {
        title: "Association étudiante, BDA ESAIP",
        description: "Responsable partenariats et vice-secrétaire.",
      },
    ],
    distinctionsTitle: "Distinctions",
    distinctionText:
      "Lauréat Thales STEM For All 2025, une distinction obtenue pour l’excellence académique et l’engagement dans les sciences et les technologies.",
    languagesTitle: "Langues",
    languageItems: ["Arabe, langue maternelle", "Français, courant", "Anglais, intermédiaire"],
    contactTitle: "Contact",
    formTitle: "M’écrire",
    formName: "Nom complet",
    formEmail: "Adresse e-mail",
    formSubject: "Sujet",
    formMessage: "Votre message",
    formButton: "Envoyer le message",
    formSending: "Envoi en cours...",
    formSuccess: "Message envoyé avec succès.",
    formError: "Une erreur est survenue. Réessaie dans quelques instants.",
    footer: "© 2026 Mouad Derraz. Tous droits réservés.",
    location: "Aix-en-Provence, France",
    academicJourney: "Ministère de l’Éducation nationale",
    socialLabels: {
      email: "Adresse e-mail",
      phone: "Téléphone",
      location: "Localisation",
      linkedin: "LinkedIn",
    },
  },
  en: {
    dir: "ltr",
    nav: ["Home", "About", "Education", "Projects", "Skills", "Experience", "Distinctions", "Languages", "Contact"],
    heroSubtitle: "Computer Science Student",
    heroIntro:
      "Computer science student with a strong interest in systems, Linux environments, programming and modern technologies. I enjoy working on practical technical projects and improving my skills in software, networks and cybersecurity.",
    projectsBtn: "View Projects",
    contactBtn: "Contact",
    aboutTitle: "About",
    aboutText:
      "I am a computer science student at ESAIP in Aix-en-Provence. My studies have helped me build solid foundations in programming, systems, networks and information security. I enjoy learning, collaborating with others and working on technical projects that call for logic, consistency and creativity.",
    heroTags: ["Linux", "Cybersecurity", "Systems", "Development"],
    heroIcons: ["Code", "Network", "Terminal", "Security", "Database"],
    educationTitle: "Education",
    educationItems: [
      {
        period: "2024 - present",
        title: "Preparatory Cycle, ESAIP",
        location: "Aix-en-Provence, France",
      },
      {
        period: "2023 - 2024",
        title: "Scientific Baccalaureate, honors",
        location: "Lycée Ryad Safwa, Fez",
      },
    ],
    projectsTitle: "Projects",
    projectLabel: "Project",
    projects: [
      {
        title: "SEAL SSL Checker",
        description:
          "Tool designed to monitor SSL certificates and check their validity, expiration dates and overall HTTPS reliability.",
      },
      {
        title: "Naval Battle Game",
        description:
          "Team project developed during an algorithmics course. It is a digital version of the classic battleship game with grid management, turn handling and hit detection.",
      },
      {
        title: "Le Compte est Bon",
        description:
          "Team project developed in C. It is a mathematical puzzle game where players try to reach a target number using a given set of numbers and operations.",
      },
      {
        title: "Hackathon ACT IN SPACE",
        description:
          "Project carried out during an international hackathon, based on a 24 hour team challenge focused on securing satellite data.",
      },
    ],
    skillsTitle: "Skills",
    skillGroups: {
      programming: "Programming",
      systems: "Systems",
      networks: "Networks",
      tools: "Tools",
      soft: "Soft Skills",
    },
    skillItems: {
      programming: ["Python", "C", "HTML", "CSS", "SQL"],
      systems: ["Linux command line"],
      networks: ["TCP/IP", "HTTP", "HTTPS"],
      tools: ["Microsoft Office", "Google Workspace", "Clipchamp"],
      soft: ["Autonomy", "Rigour", "Creativity", "Teamwork", "Communication"],
    },
    experienceTitle: "Experience",
    internshipLabel: "Experience",
    internship: "Accounting Internship",
    internshipCompany: "CABINET ABID D’EXPERTISE COMPTABLE, Fez, Morocco",
    internshipTasks: [
      "Administrative and financial document processing",
      "Data verification",
      "Confidential document management",
    ],
    volunteering: "Volunteering",
    volunteeringItems: [
      {
        title: "Science Festival Workshops, Avignon",
        description:
          "Interactive scientific workshops presenting mathematical and scientific discoveries.",
      },
      {
        title: "Student Association, BDA ESAIP",
        description: "Partnership Manager and vice secretary.",
      },
    ],
    distinctionsTitle: "Distinctions",
    distinctionText:
      "Thales STEM For All Laureate 2025, awarded in recognition of academic excellence and strong engagement in science and technology.",
    languagesTitle: "Languages",
    languageItems: ["Arabic, native", "French, fluent", "English, intermediate"],
    contactTitle: "Contact",
    formTitle: "Send me a message",
    formName: "Full name",
    formEmail: "Email address",
    formSubject: "Subject",
    formMessage: "Your message",
    formButton: "Send message",
    formSending: "Sending...",
    formSuccess: "Message sent successfully.",
    formError: "Something went wrong. Please try again.",
    footer: "© 2026 Mouad Derraz. All rights reserved.",
    location: "Aix-en-Provence, France",
    academicJourney: "Ministry of National Education",
    socialLabels: {
      email: "Email",
      phone: "Phone",
      location: "Location",
      linkedin: "LinkedIn",
    },
  },
  ar: {
    dir: "rtl",
    nav: ["الرئيسية", "نبذة", "التعليم", "المشاريع", "المهارات", "الخبرات", "التميّز", "اللغات", "التواصل"],
    heroSubtitle: "طالب علوم الحاسوب",
    heroIntro:
      "أنا طالب في علوم الحاسوب وأهتم كثيرًا بالأنظمة وبيئات لينكس والبرمجة والتقنيات الحديثة. أحب العمل على مشاريع تقنية حقيقية وتطوير مهاراتي في البرمجيات والشبكات والأمن السيبراني.",
    projectsBtn: "عرض المشاريع",
    contactBtn: "تواصل",
    aboutTitle: "نبذة",
    aboutText:
      "أنا طالب علوم حاسوب في ESAIP بمدينة إيكس أون بروفانس. ساعدني مساري الدراسي على بناء أساس جيد في البرمجة والأنظمة والشبكات وأمن المعلومات. أحب التعلم والعمل مع الآخرين والمشاركة في مشاريع تقنية تحتاج إلى المنطق والدقة والإبداع.",
    heroTags: ["لينكس", "الأمن السيبراني", "الأنظمة", "التطوير"],
    heroIcons: ["البرمجة", "الشبكات", "الطرفية", "الحماية", "البيانات"],
    educationTitle: "التعليم",
    educationItems: [
      {
        period: "2024 - اليوم",
        title: "الدورة التحضيرية، ESAIP",
        location: "إيكس أون بروفانس، فرنسا",
      },
      {
        period: "2023 - 2024",
        title: "البكالوريا العلمية، بميزة حسن",
        location: "ثانوية رياض صفوة، فاس",
      },
    ],
    projectsTitle: "المشاريع",
    projectLabel: "مشروع",
    projects: [
      {
        title: "SEAL SSL Checker",
        description:
          "أداة تتيح مراقبة شهادات SSL والتحقق بسهولة من صلاحيتها وتاريخ انتهائها وموثوقية اتصال HTTPS.",
      },
      {
        title: "المعركة البحرية",
        description:
          "مشروع جماعي تم تطويره خلال مادة الخوارزميات. وهو نسخة رقمية من لعبة المعركة البحرية تتضمن إدارة الشبكة وتنظيم الأدوار واكتشاف الإصابات.",
      },
      {
        title: "Le Compte est Bon",
        description:
          "مشروع جماعي بلغة C. وهي لعبة رياضية يكون الهدف فيها الوصول إلى رقم محدد باستعمال أرقام وعمليات معطاة.",
      },
      {
        title: "Hackathon ACT IN SPACE",
        description:
          "مشروع تم إنجازه خلال هاكاثون دولي ضمن تحدٍّ جماعي استمر 24 ساعة من أجل تصميم حل مرتبط بحماية بيانات الأقمار الصناعية.",
      },
    ],
    skillsTitle: "المهارات",
    skillGroups: {
      programming: "البرمجة",
      systems: "الأنظمة",
      networks: "الشبكات",
      tools: "الأدوات",
      soft: "المهارات الشخصية",
    },
    skillItems: {
      programming: ["Python", "C", "HTML", "CSS", "SQL"],
      systems: ["سطر أوامر لينكس"],
      networks: ["TCP/IP", "HTTP", "HTTPS"],
      tools: ["Microsoft Office", "Google Workspace", "Clipchamp"],
      soft: ["الاستقلالية", "الانضباط", "الإبداع", "العمل الجماعي", "التواصل"],
    },
    experienceTitle: "الخبرات",
    internshipLabel: "الخبرة",
    internship: "تدريب في المحاسبة",
    internshipCompany: "CABINET ABID D’EXPERTISE COMPTABLE، فاس، المغرب",
    internshipTasks: [
      "معالجة الوثائق الإدارية والمالية",
      "التحقق من البيانات",
      "إدارة الوثائق السرية",
    ],
    volunteering: "الأنشطة الطلابية",
    volunteeringItems: [
      {
        title: "ورش مهرجان العلوم، أفينيون",
        description: "ورش علمية تفاعلية تقدم اكتشافات رياضية وعلمية.",
      },
      {
        title: "الجمعية الطلابية، BDA ESAIP",
        description: "مسؤول الشراكات ونائب الكاتب العام.",
      },
    ],
    distinctionsTitle: "التميّز",
    distinctionText:
      "الفائز بجائزة Thales STEM For All لعام 2025، تقديرًا للتميّز الأكاديمي والالتزام بمجالات العلوم والتكنولوجيا.",
    languagesTitle: "اللغات",
    languageItems: ["العربية، اللغة الأم", "الفرنسية، بطلاقة", "الإنجليزية، مستوى متوسط"],
    contactTitle: "التواصل",
    formTitle: "راسلني",
    formName: "الاسم الكامل",
    formEmail: "البريد الإلكتروني",
    formSubject: "الموضوع",
    formMessage: "رسالتك",
    formButton: "إرسال الرسالة",
    formSending: "جارٍ الإرسال...",
    formSuccess: "تم إرسال الرسالة بنجاح.",
    formError: "حدث خطأ ما. حاول مرة أخرى.",
    footer: "© 2026 Mouad Derraz. جميع الحقوق محفوظة.",
    location: "إيكس أون بروفانس، فرنسا",
    academicJourney: "وزارة التربية الوطنية",
    socialLabels: {
      email: "البريد الإلكتروني",
      phone: "الهاتف",
      location: "الموقع",
      linkedin: "لينكدإن",
    },
  },
  es: {
    dir: "ltr",
    nav: ["Inicio", "Sobre mí", "Educación", "Proyectos", "Habilidades", "Experiencia", "Distinciones", "Idiomas", "Contacto"],
    heroSubtitle: "Estudiante de Informática",
    heroIntro:
      "Estudiante de informática con un gran interés por los sistemas, los entornos Linux, la programación y las tecnologías modernas. Me gusta trabajar en proyectos técnicos concretos y seguir mejorando mis habilidades en software, redes y ciberseguridad.",
    projectsBtn: "Ver proyectos",
    contactBtn: "Contacto",
    aboutTitle: "Sobre mí",
    aboutText:
      "Soy estudiante de informática en ESAIP, en Aix-en-Provence. Mi formación me ha permitido construir una base sólida en programación, sistemas, redes y seguridad informática. Me gusta aprender, colaborar con otras personas y participar en proyectos técnicos que requieren lógica, rigor y creatividad.",
    heroTags: ["Linux", "Ciberseguridad", "Sistemas", "Desarrollo"],
    heroIcons: ["Código", "Red", "Terminal", "Seguridad", "Base de datos"],
    educationTitle: "Educación",
    educationItems: [
      {
        period: "2024 - actualidad",
        title: "Ciclo preparatorio, ESAIP",
        location: "Aix-en-Provence, Francia",
      },
      {
        period: "2023 - 2024",
        title: "Bachillerato científico, mención de honor",
        location: "Lycée Ryad Safwa, Fez",
      },
    ],
    projectsTitle: "Proyectos",
    projectLabel: "Proyecto",
    projects: [
      {
        title: "SEAL SSL Checker",
        description:
          "Herramienta pensada para supervisar certificados SSL y comprobar su validez, sus fechas de expiración y la fiabilidad de HTTPS.",
      },
      {
        title: "Batalla naval",
        description:
          "Proyecto en equipo desarrollado durante un curso de algorítmica. Es una versión digital del clásico juego de batalla naval con gestión de la cuadrícula, turnos y detección de impactos.",
      },
      {
        title: "Le Compte est Bon",
        description:
          "Proyecto en equipo desarrollado en C. Se trata de un juego matemático en el que hay que alcanzar un número objetivo usando números y operaciones dadas.",
      },
      {
        title: "Hackathon ACT IN SPACE",
        description:
          "Proyecto realizado durante un hackathon internacional, con un reto en equipo de 24 horas para diseñar una solución relacionada con la seguridad de los datos satelitales.",
      },
    ],
    skillsTitle: "Habilidades",
    skillGroups: {
      programming: "Programación",
      systems: "Sistemas",
      networks: "Redes",
      tools: "Herramientas",
      soft: "Cualidades humanas",
    },
    skillItems: {
      programming: ["Python", "C", "HTML", "CSS", "SQL"],
      systems: ["Línea de comandos Linux"],
      networks: ["TCP/IP", "HTTP", "HTTPS"],
      tools: ["Microsoft Office", "Google Workspace", "Clipchamp"],
      soft: ["Autonomía", "Rigor", "Creatividad", "Trabajo en equipo", "Comunicación"],
    },
    experienceTitle: "Experiencia",
    internshipLabel: "Experiencia",
    internship: "Prácticas en contabilidad",
    internshipCompany: "CABINET ABID D’EXPERTISE COMPTABLE, Fez, Marruecos",
    internshipTasks: [
      "Procesamiento de documentos administrativos y financieros",
      "Verificación de datos",
      "Gestión de documentos confidenciales",
    ],
    volunteering: "Compromiso estudiantil",
    volunteeringItems: [
      {
        title: "Talleres del Festival de Ciencia, Aviñón",
        description:
          "Talleres científicos interactivos que presentan descubrimientos matemáticos y científicos.",
      },
      {
        title: "Asociación estudiantil, BDA ESAIP",
        description: "Responsable de alianzas y vice secretaria.",
      },
    ],
    distinctionsTitle: "Distinciones",
    distinctionText:
      "Laureado Thales STEM For All 2025, en reconocimiento a la excelencia académica y al compromiso con la ciencia y la tecnología.",
    languagesTitle: "Idiomas",
    languageItems: ["Árabe, nativo", "Francés, fluido", "Inglés, intermedio"],
    contactTitle: "Contacto",
    formTitle: "Escríbeme",
    formName: "Nombre completo",
    formEmail: "Correo electrónico",
    formSubject: "Asunto",
    formMessage: "Tu mensaje",
    formButton: "Enviar mensaje",
    formSending: "Enviando...",
    formSuccess: "Mensaje enviado correctamente.",
    formError: "Ha ocurrido un error. Inténtalo de nuevo.",
    footer: "© 2026 Mouad Derraz. Todos los derechos reservados.",
    location: "Aix-en-Provence, Francia",
    academicJourney: "Ministerio de Educación Nacional",
    socialLabels: {
      email: "Correo",
      phone: "Teléfono",
      location: "Ubicación",
      linkedin: "LinkedIn",
    },
  },
};

const sectionIds = ["home", "about", "education", "projects", "skills", "experience", "distinctions", "languages", "contact"];

const socialLinks = [
  { key: "email", icon: Mail, href: "mailto:derrazmouad0@gmail.com", text: "derrazmouad0@gmail.com" },
  { key: "phone", icon: Phone, href: "tel:+33763583494", text: "+33 7 63 58 34 94" },
  { key: "location", icon: MapPin, href: "#", text: "Aix-en-Provence, France" },
  { key: "linkedin", icon: Linkedin, href: "https://www.linkedin.com/in/mouad-derraz/", text: "linkedin.com/in/mouad-derraz" },
];

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function useStoredTheme() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const saved = localStorage.getItem("mouad-theme");
    if (saved === "light" || saved === "dark") setTheme(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("mouad-theme", theme);
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return [theme, setTheme];
}

function AnimatedBackground({ theme }) {
  const [pos, setPos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const onMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setPos({ x, y });
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      <div
        className={cn(
          "absolute inset-0 transition-all duration-700",
          theme === "dark"
            ? "bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.10),transparent_25%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.14),transparent_22%),radial-gradient(circle_at_50%_80%,rgba(14,165,233,0.10),transparent_30%),linear-gradient(180deg,#030303,#07111f_55%,#030303)]"
            : "bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.09),transparent_24%),radial-gradient(circle_at_80%_20%,rgba(14,165,233,0.08),transparent_22%),radial-gradient(circle_at_50%_80%,rgba(148,163,184,0.14),transparent_32%),linear-gradient(180deg,#f8fafc,#eef4fb_55%,#f8fafc)]"
        )}
      />

      <motion.div
        animate={{ x: `${(pos.x - 50) * 0.35}%`, y: `${(pos.y - 50) * 0.35}%` }}
        transition={{ type: "spring", stiffness: 30, damping: 20 }}
        className={cn(
          "absolute -left-24 top-10 h-80 w-80 rounded-full blur-3xl",
          theme === "dark" ? "bg-cyan-400/10" : "bg-sky-400/10"
        )}
      />

      <motion.div
        animate={{ x: `${(50 - pos.x) * 0.25}%`, y: `${(50 - pos.y) * 0.25}%` }}
        transition={{ type: "spring", stiffness: 25, damping: 18 }}
        className={cn(
          "absolute right-0 top-1/3 h-96 w-96 rounded-full blur-3xl",
          theme === "dark" ? "bg-blue-500/10" : "bg-slate-300/30"
        )}
      />

      <div
        className={cn(
          "absolute inset-0 opacity-40",
          theme === "dark"
            ? "bg-[linear-gradient(rgba(34,211,238,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.06)_1px,transparent_1px)]"
            : "bg-[linear-gradient(rgba(148,163,184,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.14)_1px,transparent_1px)]"
        )}
        style={{ backgroundSize: "42px 42px" }}
      />

      {[...Array(16)].map((_, i) => (
        <motion.div
          key={i}
          className={cn("absolute rounded-full", theme === "dark" ? "bg-cyan-300/40" : "bg-sky-500/20")}
          style={{
            width: 2 + (i % 3),
            height: 2 + (i % 3),
            left: `${(i * 7) % 100}%`,
            top: `${(i * 13) % 100}%`,
          }}
          animate={{ y: [0, -12, 0], opacity: [0.15, 0.65, 0.15] }}
          transition={{ duration: 4 + i * 0.4, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

function Section({ id, title, children, className = "" }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={cn("relative mx-auto w-full max-w-7xl px-6 py-16 md:px-10 lg:px-12", className)}
    >
      <div className="mb-8 flex items-center gap-3">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-sky-400/50 to-transparent" />
        <h2 className="text-center text-2xl font-semibold tracking-[0.18em] text-slate-900 dark:text-white md:text-3xl">
          {title}
        </h2>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-sky-400/50 to-transparent" />
      </div>
      {children}
    </motion.section>
  );
}

function GlassCard({ children, className = "" }) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      className={cn(
        "group rounded-[28px] border border-white/20 bg-white/55 p-6 shadow-[0_10px_50px_rgba(15,23,42,0.08)] backdrop-blur-2xl dark:border-cyan-400/10 dark:bg-white/5 dark:shadow-[0_10px_60px_rgba(14,165,233,0.08)]",
        className
      )}
    >
      {children}
    </motion.div>
  );
}

function ContactForm({ t }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
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
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setTimeout(() => setStatus("idle"), 4000);
    } catch (error) {
      console.error("EmailJS error:", error);
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
              className="w-full rounded-2xl border border-white/20 bg-white/65 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-400 dark:border-white/10 dark:bg-white/5 dark:text-white"
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
              className="w-full rounded-2xl border border-white/20 bg-white/65 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-400 dark:border-white/10 dark:bg-white/5 dark:text-white"
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
            className="w-full rounded-2xl border border-white/20 bg-white/65 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-400 dark:border-white/10 dark:bg-white/5 dark:text-white"
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
            className="w-full rounded-2xl border border-white/20 bg-white/65 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-400 dark:border-white/10 dark:bg-white/5 dark:text-white"
          />
        </label>

        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-white/65 px-6 py-3 text-sm font-medium text-slate-900 shadow-[0_12px_40px_rgba(56,189,248,0.18)] backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(56,189,248,0.28)] disabled:opacity-70 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-white"
        >
          {status === "loading" ? t.formSending : t.formButton}
          <Send className="h-4 w-4" />
        </button>
      </form>

      {status === "success" && (
        <p className="mt-4 text-sm text-emerald-600 dark:text-emerald-400">{t.formSuccess}</p>
      )}

      {status === "error" && (
        <p className="mt-4 text-sm text-red-600 dark:text-red-400">{t.formError}</p>
      )}
    </>
  );
}

export default function App() {
  const [theme, setTheme] = useStoredTheme();
  const [lang, setLang] = useState("fr");
  const [menuOpen, setMenuOpen] = useState(false);
  const t = translations[lang];

  useEffect(() => {
    document.documentElement.dir = t.dir;
    document.documentElement.lang = lang;
  }, [t.dir, lang]);

  const navItems = useMemo(() => t.nav.map((label, index) => ({ label, id: sectionIds[index] })), [t.nav]);

  const esaipLogo = "logo-esaip-dark.png";
  const sealLogo = "logo-seal-dark.png";
  const bdaLogo = "logo-bda.png";
  const ministereLogo = "logo-ministre.png";
  const hackathonLogo = "logo-actinspace.png";

  return (
    <div className={cn(theme === "dark" ? "dark" : "", "min-h-screen overflow-x-hidden")}>
      <div className="relative min-h-screen bg-white text-slate-900 transition-colors duration-500 dark:bg-black dark:text-white">
        <AnimatedBackground theme={theme} />

        <style>{`
          html { scroll-behavior: smooth; }
          body { font-family: Inter, ui-sans-serif, system-ui, sans-serif; }
          ::selection { background: rgba(56,189,248,0.25); }
        `}</style>

        <header className="sticky top-0 z-50 px-4 pt-4 md:px-6">
          <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/20 bg-white/55 px-4 py-3 shadow-[0_8px_40px_rgba(15,23,42,0.08)] backdrop-blur-2xl dark:border-cyan-400/10 dark:bg-white/5 dark:shadow-[0_10px_40px_rgba(14,165,233,0.08)]">
            <a href="#home" className="flex items-center gap-3 text-sm font-medium text-slate-900 dark:text-white">
              <div className="h-10 w-10 overflow-hidden rounded-full border border-white/20 bg-white/70 dark:border-white/10 dark:bg-white/5">
                <img src="mouad-derraz-profile.jpg" alt="Mouad Derraz" className="h-full w-full object-cover" />
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
                {[
                  { key: "fr", label: "FR" },
                  { key: "en", label: "EN" },
                  { key: "ar", label: "AR" },
                  { key: "es", label: "ES" },
                ].map((item) => (
                  <button
                    key={item.key}
                    onClick={() => setLang(item.key)}
                    className={cn(
                      "rounded-full px-3 py-1.5 text-xs font-medium transition",
                      lang === item.key
                        ? "bg-sky-500 text-white shadow-lg shadow-sky-500/25"
                        : "text-slate-600 hover:text-sky-500 dark:text-slate-300 dark:hover:text-cyan-300"
                    )}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="rounded-full border border-white/30 bg-white/60 p-2.5 text-slate-700 shadow-sm transition hover:scale-105 hover:text-sky-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:text-cyan-300"
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
            <div className="mx-auto mt-3 max-w-7xl rounded-[28px] border border-white/20 bg-white/70 p-4 shadow-xl backdrop-blur-2xl dark:border-cyan-400/10 dark:bg-slate-950/70 lg:hidden">
              <div className="mb-4 flex flex-wrap gap-2">
                {[
                  { key: "fr", label: "FR" },
                  { key: "en", label: "EN" },
                  { key: "ar", label: "AR" },
                  { key: "es", label: "ES" },
                ].map((item) => (
                  <button
                    key={item.key}
                    onClick={() => setLang(item.key)}
                    className={cn(
                      "rounded-full px-3 py-2 text-xs font-medium transition",
                      lang === item.key ? "bg-sky-500 text-white" : "bg-slate-100 text-slate-700 dark:bg-white/5 dark:text-slate-200"
                    )}
                  >
                    <span className="inline-flex items-center gap-2">
                      <Languages className="h-3.5 w-3.5" />
                      {item.label}
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
          <section id="home" className="mx-auto flex min-h-[92vh] w-full max-w-7xl items-center px-6 py-12 md:px-10 lg:px-12">
            <div className="grid w-full items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
              <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <h1 className="mb-4 text-5xl font-semibold tracking-tight text-slate-950 dark:text-white md:text-7xl">
                  Mouad Derraz
                </h1>
                <p className="mb-5 text-xl text-sky-600 dark:text-cyan-300 md:text-2xl">{t.heroSubtitle}</p>
                <p className="max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300 md:text-lg">{t.heroIntro}</p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="#projects"
                    className="group inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-white/65 px-6 py-3 text-sm font-medium text-slate-900 shadow-[0_12px_40px_rgba(56,189,248,0.18)] backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(56,189,248,0.28)] dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-white"
                  >
                    {t.projectsBtn}
                    <ExternalLink className="h-4 w-4 transition group-hover:rotate-12" />
                  </a>

                  <a
                    href="#contact"
                    className="group inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/55 px-6 py-3 text-sm font-medium text-slate-900 backdrop-blur-xl transition hover:-translate-y-1 hover:text-sky-600 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:text-cyan-300"
                  >
                    {t.contactBtn}
                    <ChevronDown className="h-4 w-4 transition group-hover:translate-y-0.5" />
                  </a>
                </div>

                <div className="mt-10 flex flex-wrap gap-4">
                  {[
                    { icon: Code2, label: t.heroIcons[0] },
                    { icon: Network, label: t.heroIcons[1] },
                    { icon: TerminalSquare, label: t.heroIcons[2] },
                    { icon: Shield, label: t.heroIcons[3] },
                    { icon: Database, label: t.heroIcons[4] },
                  ].map(({ icon: Icon, label }, i) => (
                    <motion.div
                      key={label}
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: "easeInOut" }}
                      className="rounded-2xl border border-white/20 bg-white/55 p-4 shadow-lg backdrop-blur-2xl dark:border-cyan-400/10 dark:bg-white/5"
                    >
                      <Icon className="h-5 w-5 text-sky-500 transition duration-300 dark:text-cyan-300" />
                      <div className="mt-2 text-xs uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">{label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, delay: 0.1 }}
                className="relative mx-auto w-full max-w-md"
              >
                <div className="absolute inset-0 rounded-[36px] bg-gradient-to-br from-sky-400/25 via-transparent to-cyan-300/20 blur-2xl dark:from-cyan-300/20 dark:to-blue-500/20" />
                <GlassCard className="relative overflow-hidden rounded-[36px] p-5">
                  <div className="relative rounded-[28px] border border-white/20 bg-gradient-to-br from-white/80 to-white/40 p-4 dark:border-cyan-400/10 dark:from-white/10 dark:to-white/5">
                    <div className="aspect-[4/5] overflow-hidden rounded-[24px] border border-white/30 bg-slate-100 dark:border-white/10 dark:bg-slate-950">
                      <img src="mouad-derraz-profile.jpg" alt="Mouad Derraz" className="h-full w-full object-cover" />
                    </div>
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-3">
                    {t.heroTags.map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-white/20 bg-white/55 px-4 py-3 text-center text-sm text-slate-600 backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            </div>
          </section>

          <Section id="about" title={t.aboutTitle}>
            <GlassCard>
              <p className="mx-auto max-w-4xl text-center text-base leading-8 text-slate-600 dark:text-slate-300 md:text-lg">{t.aboutText}</p>
            </GlassCard>
          </Section>

          <Section id="education" title={t.educationTitle}>
            <div className="relative mx-auto max-w-5xl">
              <div className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-sky-400/70 via-cyan-300/40 to-transparent md:block" />
              <div className="space-y-6">
                {t.educationItems.map((item, idx) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: t.dir === "rtl" ? 40 : -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className="relative md:ps-14"
                  >
                    <div className="absolute start-0 top-7 hidden h-3.5 w-3.5 rounded-full bg-sky-400 shadow-[0_0_18px_rgba(56,189,248,0.9)] md:block" />
                    <GlassCard className="grid items-center gap-5 md:grid-cols-[1fr_auto]">
                      <div>
                        <p className="mb-2 text-sm uppercase tracking-[0.22em] text-sky-600 dark:text-cyan-300">{item.period}</p>
                        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                        <p className="mt-2 text-slate-600 dark:text-slate-300">{item.location}</p>
                      </div>
                      {idx === 0 ? (
                        <img src={esaipLogo} alt="ESAIP" className="h-16 w-auto object-contain opacity-95" />
                      ) : (
                        <img src={ministereLogo} alt={t.academicJourney} className="h-16 w-auto object-contain opacity-95" />
                      )}
                    </GlassCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </Section>

          <Section id="projects" title={t.projectsTitle}>
            <div className="grid gap-6 md:grid-cols-2">
              {t.projects.map((project, idx) => (
                <GlassCard key={project.title} className="relative overflow-hidden">
                  <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-sky-400/10 blur-3xl dark:bg-cyan-300/10" />
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div>
                      <div className="mb-2 text-xs uppercase tracking-[0.26em] text-sky-600 dark:text-cyan-300">
                        {t.projectLabel} {idx + 1}
                      </div>
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{project.title}</h3>
                    </div>
                    {idx === 0 ? (
                      <img src={sealLogo} alt="SEAL" className="h-12 w-auto object-contain" />
                    ) : idx === 3 ? (
                      <img src={hackathonLogo} alt="ACT IN SPACE" className="h-12 w-auto object-contain" />
                    ) : null}
                  </div>
                  <p className="leading-7 text-slate-600 dark:text-slate-300">{project.description}</p>
                </GlassCard>
              ))}
            </div>
          </Section>

          <Section id="skills" title={t.skillsTitle}>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {Object.entries(t.skillItems).map(([key, items], idx) => (
                <GlassCard key={key} className="overflow-hidden">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{t.skillGroups[key]}</h3>
                    {idx === 0 && <Code2 className="h-5 w-5 text-sky-500 dark:text-cyan-300" />}
                    {idx === 1 && <TerminalSquare className="h-5 w-5 text-sky-500 dark:text-cyan-300" />}
                    {idx === 2 && <Network className="h-5 w-5 text-sky-500 dark:text-cyan-300" />}
                    {idx === 3 && <Globe className="h-5 w-5 text-sky-500 dark:text-cyan-300" />}
                    {idx === 4 && <Sparkles className="h-5 w-5 text-sky-500 dark:text-cyan-300" />}
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {items.map((item) => (
                      <motion.div
                        key={item}
                        whileHover={{ scale: 1.05 }}
                        className="rounded-full border border-white/20 bg-white/60 px-4 py-2 text-sm text-slate-700 shadow-sm transition dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
                      >
                        {item}
                      </motion.div>
                    ))}
                  </div>
                </GlassCard>
              ))}
            </div>
          </Section>

          <Section id="experience" title={t.experienceTitle}>
            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <GlassCard>
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div>
                    <div className="mb-2 text-xs uppercase tracking-[0.24em] text-sky-600 dark:text-cyan-300">{t.internshipLabel}</div>
                    <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">{t.internship}</h3>
                    <p className="mt-2 text-slate-600 dark:text-slate-300">{t.internshipCompany}</p>
                  </div>
                  <img src="logo-cabinet-abid.png" alt="CABINET ABID" className="h-14 w-auto object-contain" />
                </div>
                <div className="space-y-3">
                  {t.internshipTasks.map((task) => (
                    <div
                      key={task}
                      className="rounded-2xl border border-white/20 bg-white/55 px-4 py-3 text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
                    >
                      {task}
                    </div>
                  ))}
                </div>
              </GlassCard>

              <GlassCard>
                <div className="mb-4 flex items-center gap-3">
                  <Briefcase className="h-5 w-5 text-sky-500 dark:text-cyan-300" />
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{t.volunteering}</h3>
                </div>
                <div className="space-y-4">
                  {t.volunteeringItems.map((item, index) => (
                    <div key={item.title} className="rounded-2xl border border-white/20 bg-white/55 p-4 dark:border-white/10 dark:bg-white/5">
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <h4 className="font-medium text-slate-900 dark:text-white">{item.title}</h4>
                          <p className="mt-2 leading-7 text-slate-600 dark:text-slate-300">{item.description}</p>
                        </div>
                        {index === 1 && <img src={bdaLogo} alt="BDA ESAIP" className="h-14 w-auto object-contain" />}
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </div>
          </Section>

          <Section id="distinctions" title={t.distinctionsTitle}>
            <GlassCard className="relative overflow-hidden">
              <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-sky-400/10 to-transparent dark:from-cyan-300/10" />
              <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-4">
                  <div className="rounded-3xl border border-white/20 bg-white/60 p-4 dark:border-white/10 dark:bg-white/5">
                    <Award className="h-8 w-8 text-sky-500 dark:text-cyan-300" />
                  </div>
                  <p className="max-w-3xl text-lg leading-8 text-slate-700 dark:text-slate-200">{t.distinctionText}</p>
                </div>
              </div>
            </GlassCard>
          </Section>

          <Section id="languages" title={t.languagesTitle}>
            <div className="grid gap-6 md:grid-cols-3">
              {t.languageItems.map((item, idx) => (
                <GlassCard key={item} className="text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/60 dark:border-white/10 dark:bg-white/5">
                    <Languages className="h-6 w-6 text-sky-500 dark:text-cyan-300" />
                  </div>
                  <div className="text-lg font-medium text-slate-900 dark:text-white">{item}</div>
                  <div className="mt-3 h-1.5 rounded-full bg-slate-200 dark:bg-white/10">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${[95, 88, 68][idx]}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: idx * 0.2 }}
                      className="h-1.5 rounded-full bg-gradient-to-r from-sky-500 to-cyan-300"
                    />
                  </div>
                </GlassCard>
              ))}
            </div>
          </Section>

          <Section id="contact" title={t.contactTitle} className="pb-24">
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
                          <div className="text-sm text-slate-500 dark:text-slate-400">{t.socialLabels[key]}</div>
                          <div className="text-slate-900 dark:text-white">{key === "location" ? t.location : text}</div>
                        </div>
                      </div>
                      {href !== "#" && <ExternalLink className="h-4 w-4 text-slate-400 transition group-hover:text-sky-500 dark:group-hover:text-cyan-300" />}
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