
import { Project, Experience, Skill, Language } from './types';

export const PERSONAL_INFO = {
  name: "Alex Sterling",
  titles: {
    en: "Senior Full-Stack Engineer & AI Architect",
    ru: "Старший фулстек-инженер и AI-архитектор",
    ky: "Улук фулстек-инженер жана AI архитектору"
  },
  bios: {
    en: "Crafting digital experiences at the intersection of robust backend architecture and fluid, high-performance frontend systems. Specialized in React ecosystems and Generative AI integration.",
    ru: "Создание цифрового опыта на пересечении надежной бэкенд-архитектуры и гибких высокопроизводительных фронтенд-систем. Специализируюсь на экосистемах React и интеграции генеративного ИИ.",
    ky: "Күчтүү бэкенд архитектурасы менен ийкемдүү, жогорку натыйжалуу фронтенд системаларынын айкалышында санариптик тажрыйбаларды түзүү. React экосистемаларына жана Генеративдик ИИ интеграциясына адистешкенмин."
  },
  location: "San Francisco, CA",
  email: "alex@sterling.dev",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  twitter: "https://twitter.com",
};

export const UI_STRINGS: Record<Language, Record<string, string>> = {
  en: {
    about: "About",
    projects: "Projects",
    experience: "Experience",
    hireMe: "Hire Me",
    available: "Available for new opportunities",
    heroTitle: "Engineering the Future of Digital",
    viewWork: "View My Work",
    talkAI: "Talk to AI Assistant",
    featuredWork: "Featured Work",
    featuredDesc: "A selection of projects where I've blended high-performance code with user-centric design.",
    seeAll: "See all projects",
    skillsTitle: "Mastering the Stack",
    skillsDesc: "I don't just write code; I architect solutions. Over the past decade, I've honed my skills across the entire software lifecycle.",
    yearsExp: "Years Experience",
    projectsDelivered: "Projects Delivered",
    careerJourney: "Career Journey",
    contactTitle: "Let's build something Extraordinary",
    contactDesc: "Have a project in mind or just want to say hi? I'm currently accepting new projects.",
    emailMe: "Email Me",
    basedIn: "Based In",
    send: "Send Message",
    aiTitle: "Interactive Assistant",
    aiDesc: "Save time! Interview my AI agent to get instant answers about my background.",
    aiGreeting: "Hi! I'm Alex's AI twin. Want to know about his tech stack, work experience, or availability? Ask me anything!",
    placeholder: "Ask about skills, experience, or projects..."
  },
  ru: {
    about: "Обо мне",
    projects: "Проекты",
    experience: "Опыт",
    hireMe: "Нанять меня",
    available: "Открыт для новых предложений",
    heroTitle: "Проектирование цифрового будущего",
    viewWork: "Мои работы",
    talkAI: "Чат с ИИ",
    featuredWork: "Избранные проекты",
    featuredDesc: "Подборка проектов, в которых я сочетал высокопроизводительный код с ориентированным на пользователя дизайном.",
    seeAll: "Все проекты",
    skillsTitle: "Стек технологий",
    skillsDesc: "Я не просто пишу код, я создаю решения. За последнее десятилетие я отточил навыки на всех этапах жизненного цикла ПО.",
    yearsExp: "Лет опыта",
    projectsDelivered: "Проектов реализовано",
    careerJourney: "Карьерный путь",
    contactTitle: "Давайте создадим что-то выдающееся",
    contactDesc: "Есть проект на примете или просто хотите поздороваться? Я открыт для сотрудничества.",
    emailMe: "Написать мне",
    basedIn: "Локация",
    send: "Отправить",
    aiTitle: "Интерактивный помощник",
    aiDesc: "Экономьте время! Пообщайтесь с моим ИИ-двойником, чтобы узнать о моем опыте.",
    aiGreeting: "Привет! Я ИИ-двойник Алекса. Хотите узнать о стеке технологий, опыте работы или доступности? Спрашивайте что угодно!",
    placeholder: "Спросите о навыках, опыте или проектах..."
  },
  ky: {
    about: "Мен жөнүндө",
    projects: "Долбоорлор",
    experience: "Тажрыйба",
    hireMe: "Мени жалдоо",
    available: "Жаңы мүмкүнчүлүктөр үчүн ачыкмын",
    heroTitle: "Санариптик келечекти куруу",
    viewWork: "Менин иштерим",
    talkAI: "ИИ менен сүйлөшүү",
    featuredWork: "Тандалган долбоорлор",
    featuredDesc: "Жогорку натыйжалуу код менен колдонуучуга багытталган дизайнды айкалыштырган долбоорлор.",
    seeAll: "Бардык долбоорлор",
    skillsTitle: "Технологиялык стек",
    skillsDesc: "Мен жөн гана код жазбайм, мен чечимдерди түзөм. Акыркы он жыл ичинде мен программалык камсыздоонун бардык этаптарында тажрыйба топтодум.",
    yearsExp: "Жылдык тажрыйба",
    projectsDelivered: "Аткарылган долбоорлор",
    careerJourney: "Карьера жолу",
    contactTitle: "Келгиле, өзгөчө нерсе куралы",
    contactDesc: "Долбооруңуз барбы же жөн гана салам дегиңиз келеби? Мен учурда жаңы долбоорлорду кабыл алып жатам.",
    emailMe: "Мага жаз",
    basedIn: "Жайгашкан жери",
    send: "Кабар жөнөтүү",
    aiTitle: "Интерактивдүү жардамчы",
    aiDesc: "Убакытты үнөмдөңүз! Менин тажрыйбам тууралуу тез жооп алуу үчүн ИИ агентим менен сүйлөшүңүз.",
    aiGreeting: "Салам! Мен Алекстин ИИ эгизимин. Технологиялык стек, иш тажрыйбам же бош убактым жөнүндө билгиңиз келеби? Каалаган нерсеңизди сураңыз!",
    placeholder: "Көндүмдөр, тажрыйба же долбоорлор жөнүндө сураңыз..."
  }
};

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: {
      en: "NeuroFlow Dashboard",
      ru: "Панель NeuroFlow",
      ky: "NeuroFlow башкаруу панели"
    },
    description: {
      en: "An AI-powered project management tool that predicts bottlenecking using historical velocity data and Gemini models.",
      ru: "Инструмент управления проектами на базе ИИ, который прогнозирует узкие места, используя исторические данные и модели Gemini.",
      ky: "Тарыхый маалыматтарды жана Gemini моделдерин колдонуу менен тоскоолдуктарды алдын ала билген ИИ негизиндеги долбоорлорду башкаруу куралы."
    },
    image: "https://picsum.photos/seed/neuroflow/800/500",
    tags: ["React", "TypeScript", "Node.js", "Gemini API", "Tailwind"],
    link: "#",
    github: "#"
  },
  {
    id: '2',
    title: {
      en: "Quantum E-Commerce",
      ru: "Quantum E-Commerce",
      ky: "Quantum E-Commerce"
    },
    description: {
      en: "High-performance headless commerce engine featuring sub-100ms page loads and dynamic edge-side rendering.",
      ru: "Высокопроизводительный движок электронной коммерции с загрузкой страниц менее 100 мс и динамическим рендерингом на граничных серверах.",
      ky: "Барактарды 100 мс-ден аз убакытта жүктөө жана динамикалык edge-side рендеринг өзгөчөлүгү бар жогорку натыйжалуу коммерциялык кыймылдаткыч."
    },
    image: "https://picsum.photos/seed/quantum/800/500",
    tags: ["Next.js", "GraphQL", "Redis", "PostgreSQL"],
    link: "#",
    github: "#"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'e1',
    company: "TechNova Solutions",
    position: {
      en: "Senior Software Engineer",
      ru: "Старший инженер-программист",
      ky: "Улук программалык камсыздоо инженери"
    },
    period: "2021 - Present",
    description: {
      en: [
        "Led a team of 8 developers in migrating a legacy monolithic application to a microservices architecture.",
        "Reduced cloud infrastructure costs by 35% through optimized serverless functions.",
        "Implemented a comprehensive CI/CD pipeline reducing deployment time."
      ],
      ru: [
        "Руководил командой из 8 разработчиков при миграции монолитного приложения на микросервисную архитектуру.",
        "Снизил затраты на облачную инфраструктуру на 35% за счет оптимизации функций serverless.",
        "Внедрил комплексный пайплайн CI/CD, сократив время развертывания."
      ],
      ky: [
        "Монолиттик тиркемени микросервистик архитектурага өткөрүүдө 8 иштеп чыгуучудан турган команданы жетектедим.",
        "Serverless функцияларын оптималдаштыруу аркылуу булут инфраструктурасынын чыгымдарын 35% га кыскарттым.",
        "Жайгаштыруу убактысын кыскарткан комплекстүү CI/CD түтүгүн ишке ашырдым."
      ]
    }
  }
];

export const SKILLS: Skill[] = [
  { name: "React / Next.js", category: "frontend", level: 95 },
  { name: "TypeScript", category: "frontend", level: 90 },
  { name: "Node.js / Express", category: "backend", level: 85 },
  { name: "LLM Orchestration", category: "tools", level: 85 }
];
