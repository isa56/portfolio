import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react';

type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  pt: {
    'document.title': 'Isadora Ferreira | Desenvolvedora Fullstack',
    // Header
    'nav.stats': 'Stats',
    'nav.skills': 'Habilidades',
    'nav.quests': 'Missões',
    'nav.inventory': 'Inventário',
    'header.class': 'Desenvolvedora Fullstack',

    // Hero
    'hero.about': 'SOBRE',
    'hero.welcome': 'Bem-vindo, Viajante!',
    'hero.description':
      'Estudante de Ciência da Computação e Desenvolvedora com foco em Node.js e Django. Aventureira do código desde 2021.',
    'hero.status': 'STATUS DO PERSONAGEM',
    'hero.active': 'ATIVO',
    'hero.frontend': 'Frontend',
    'hero.backend': 'Backend',
    'hero.since': 'Desde 2021',
    'hero.equipment': 'EQUIPAMENTO PRINCIPAL:',

    // Skills
    'skills.title': 'ÁRVORE DE HABILIDADES',
    'skills.subtitle':
      'Habilidades adquiridas através de incontáveis batalhas e missões',
    'skills.active': 'Habilidades Ativas',
    'skills.active.desc': 'Poderes de combate principais',
    'skills.support': 'Habilidades de Suporte',
    'skills.support.desc': 'Ferramentas e métodos estratégicos',
    'skills.languages': 'Idiomas',
    'skills.languages.desc': 'Protocolos de comunicação',

    // Quest Log
    'quests.title': 'REGISTRO DE MISSÕES',
    'quests.subtitle': 'Aventuras profissionais e missões completadas',
    'quests.current': 'Missão Atual',
    'quests.completed': 'Missão Concluída',
    'quests.guild': 'Liderança de Guilda',
    'quests.job1.title': 'Desenvolvedora de Software (Trainee)',
    'quests.job1.desc':
      'Desenvolvimento de sistemas de larga escala na área de saúde utilizando Angular e RxJS. Implementação de features críticas e manutenção de código legado.',
    'quests.job2.title': 'Desenvolvedora Front-End',
    'quests.job2.desc':
      'Criação de ferramentas de visualização de dados educacionais com Chart.js. Desenvolvimento de interfaces responsivas e acessíveis.',
    'quests.job3.title': 'Gerente & Desenvolvedora',
    'quests.job3.desc':
      'Liderança de RH e coordenação de projetos WordPress. Mentoria de novos desenvolvedores e implementação de metodologias ágeis.',

    // Inventory
    'inventory.title': 'INVENTÁRIO',
    'inventory.subtitle': 'Artefatos e Projetos coletados ao longo da jornada',
    'inventory.hstation':
      'Sistema de integração de Webhooks com Facebook API e WordPress para automação de marketing.',
    'inventory.ice':
      'Fórum acadêmico para estudantes de computação com sistema de perguntas e respostas.',
    'inventory.bot':
      'Bot de automação para Twitter/X com funcionalidades de agendamento e interação.',
    'inventory.adoraler':
      'Loja virtual fullstack desenvolvida para ensino de conceitos de desenvolvimento web.',
    'inventory.personal': 'Portfólio Pessoal',
    'inventory.personalportfolio':
      'Meu site pessoal de portfólio exibindo meus projetos.',
    'inventory.cardice':
      'Um rolador de dados digital e randomizador de cartas para jogos de RPG e de tabuleiro.',
    'rarity.epic': 'Épico',
    'rarity.rare': 'Raro',
    'rarity.uncommon': 'Incomum',

    // Education
    'education.title': 'A ACADEMIA',
    'education.subtitle': 'Campos de treinamento e conquistas obtidas',
    'education.degree': 'Bacharelado em Ciência da Computação',
    'education.achievements': 'CONQUISTAS DESBLOQUEADAS',
    'education.app.title': 'App Álcool & Saúde',
    'education.app.desc':
      'Implementação de aplicativo mobile para conscientização sobre saúde e consumo de álcool.',
    'education.meninas.title': 'Meninas Digitais',
    'education.meninas.desc':
      'Mentoria no projeto de inclusão feminina na área de tecnologia.',
    'education.jrcompany.title': 'Empresa Júnior',
    'education.jrcompany.desc':
      'Gerenciou e desenvolveu projetos para empresas locais, adquirindo experiência prática em desenvolvimento de software e relacionamento com clientes.',
    'education.mentorship.title': 'Programa de Mentoria',
    'education.mentorship.desc':
      'Forneceu orientação e suporte a novos desenvolvedores, ajudando-os a aprimorar suas habilidades de codificação.',
    'education.events.title': 'Organização de Eventos Tech',
    'education.events.desc':
      'Participou ativamente e organizou diversos eventos e hackathons tecnológicos, expandindo sua rede de contatos e mantendo-se atualizada com as tendências do setor.',

    // Footer
    'footer.built': 'Feito com',
    'footer.by': 'por Isadora Ferreira',
    'footer.press': '▶ PRESSIONE START PARA INICIAR SUA JORNADA ◀',

    // Buttons
    'button.toggleTheme': 'Alternar Tema',
    'button.toggleLanguage': 'Alternar Idioma',

    // NotFound
    'notFound.title': 'Página não encontrada',
    'notFound.description': 'A página que você está procurando não existe.',
    'notFound.attemptedPath': 'Você tentou acessar:',
    'notFound.goBack': 'Voltar para o Início',
  },

  en: {
    'document.title': 'Isadora Ferreira | Fullstack Developer',
    // Header
    'nav.stats': 'Stats',
    'nav.skills': 'Abilities',
    'nav.quests': 'Quest Log',
    'nav.inventory': 'Inventory',
    'header.class': 'Fullstack Developer',

    // Hero
    'hero.about': 'ABOUT',
    'hero.welcome': 'Welcome, Traveler!',
    'hero.description':
      'Computer Science student and Developer focused on Node.js and Django. Code adventurer since 2021.',
    'hero.status': 'CHARACTER STATUS',
    'hero.active': 'ACTIVE',
    'hero.frontend': 'Frontend',
    'hero.backend': 'Backend',
    'hero.since': 'Since 2021',
    'hero.equipment': 'PRIMARY EQUIPMENT:',

    // Skills
    'skills.title': 'ABILITY TREE',
    'skills.subtitle': 'Skills acquired through countless battles and quests',
    'skills.active': 'Active Skills',
    'skills.active.desc': 'Core combat abilities',
    'skills.support': 'Support Skills',
    'skills.support.desc': 'Strategic tools & methods',
    'skills.languages': 'Languages',
    'skills.languages.desc': 'Communication protocols',

    // Quest Log
    'quests.title': 'QUEST LOG',
    'quests.subtitle': 'Professional adventures and completed missions',
    'quests.current': 'Current Quest',
    'quests.completed': 'Quest Completed',
    'quests.guild': 'Guild Leadership',
    'quests.job1.title': 'Software Developer (Trainee)',
    'quests.job1.desc':
      'Development of large-scale healthcare systems using Angular and RxJS. Implementation of critical features and legacy code maintenance.',
    'quests.job2.title': 'Front-End Developer',
    'quests.job2.desc':
      'Creation of educational data visualization tools with Chart.js. Development of responsive and accessible interfaces.',
    'quests.job3.title': 'Dev Manager & Developer',
    'quests.job3.desc':
      'HR leadership and WordPress project coordination. Mentoring new developers and implementing agile methodologies.',

    // Inventory
    'inventory.title': 'INVENTORY',
    'inventory.subtitle':
      'Artifacts & Projects collected throughout the journey',
    'inventory.hstation':
      'Webhook integration system with Facebook API and WordPress for marketing automation.',
    'inventory.ice':
      'Academic forum for computer science students with Q&A system.',
    'inventory.bot':
      'Automation bot for Twitter/X with scheduling and interaction features.',
    'inventory.adoraler':
      'Fullstack virtual store developed to teach web development concepts.',
    'inventory.personal': 'Personal Portfolio',
    'inventory.personalportfolio':
      'My personal portfolio website showcasing my projects.',
    'inventory.cardice':
      'A digital dice roller and card randomizer for RPG and tabletop games.',
    'rarity.epic': 'Epic',
    'rarity.rare': 'Rare',
    'rarity.uncommon': 'Uncommon',

    // Education
    'education.title': 'THE ACADEMY',
    'education.subtitle': 'Training grounds and earned achievements',
    'education.degree': "Bachelor's in Computer Science",
    'education.achievements': 'ACHIEVEMENTS UNLOCKED',
    'education.app.title': 'Alcohol & Health App',
    'education.app.desc':
      'Mobile app implementation for health and alcohol consumption awareness.',
    'education.meninas.title': 'Digital Girls',
    'education.meninas.desc':
      'Mentorship in the girls inclusion project in technology.',
    'education.jrcompany.title': 'Junior Company',
    'education.jrcompany.desc':
      'Managed and developed projects for local businesses, gaining real-world experience in software development and client relations.',
    'education.mentorship.title': 'Mentorship Program',
    'education.mentorship.desc':
      'Provided guidance and support to new developers, helping them enhance their coding skills.',
    'education.events.title': 'Tech Events Organization',
    'education.events.desc':
      'Actively participated in and organized various tech events and hackathons, expanding my network and staying updated with industry trends.',

    // Footer
    'footer.built': 'Built with',
    'footer.by': 'by Isadora Ferreira',
    'footer.press': '▶ PRESS START TO BEGIN YOUR JOURNEY ◀',

    // Buttons
    'button.toggleTheme': 'Toggle Theme',
    'button.toggleLanguage': 'Toggle Language',

    // NotFound
    'notFound.title': 'Page Not Found',
    'notFound.description': 'The page you are looking for does not exist.',
    'notFound.attemptedPath': 'You attempted to access:',
    'notFound.goBack': 'Go Back to Home',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const browserLang = navigator.language.split('-')[0];
    if (browserLang === 'pt') {
      setLanguage('pt');
    }
  }, []);

  const t = (key: string): string => {
    return (
      translations[language][key as keyof (typeof translations)['pt']] || key
    );
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
