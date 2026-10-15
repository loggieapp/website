export type Lang = 'en' | 'no';

export const langs: Lang[] = ['en', 'no'];

/** Page path for each language. English is the default and lives at the root. */
export const paths: Record<Lang, string> = { en: '/', no: '/no/' };

export const downloads = {
  macos: 'https://api.loggie.app/releases/macos/latest/download',
  windows: 'https://api.loggie.app/releases/windows/latest/download',
};

export const mcpTools = [
  'get_activities',
  'search_activities',
  'get_app_usage',
  'get_daily_summary',
  'get_focus_sessions',
  'annotate',
  'get_annotations',
  'list_projects',
  'save_project',
  'delete_project',
  'get_project_time',
];

export type FeatureIcon =
  | 'pen'
  | 'folder'
  | 'focus'
  | 'moon'
  | 'sheet'
  | 'terminal'
  | 'bell'
  | 'toggle';

const en = {
  htmlLang: 'en',
  ogLocale: 'en_GB',
  meta: {
    title: 'Loggie – Your personal activity memory',
    description:
      'Loggie runs in your Mac’s menu bar and logs which apps, files and web pages you work in. Claude, Cursor and other AI tools can read it via MCP. Everything stays on your Mac.',
  },
  nav: {
    home: 'Loggie home',
    features: 'Features',
    how: 'How it works',
    download: 'Download',
    otherLang: 'Norsk',
    otherLangLabel: 'Les på norsk',
    toDark: 'Switch to dark mode',
    toLight: 'Switch to light mode',
  },
  hero: {
    title: ['Your personal', 'activity memory.'],
    sticker: 'AI\u2011powered',
    sub: 'Loggie quietly runs in your menu bar and keeps track of what you work on. Ask Claude, Cursor or another AI tool about your day, and get answers based on what actually happened.',
    download: 'Download for macOS',
    windows: 'Windows (early version)',
    note: 'No account. No subscription. Your data stays on your Mac.',
  },
  demo: {
    workingOn: 'Working on',
    task: 'Loggie website',
    pause: 'Pause',
    projectsToday: 'Projects today',
    projects: [
      { name: 'Loggie website', time: '3h 05m', color: 1, share: 100 },
      { name: 'Client A', time: '1h 40m', color: 2, share: 54 },
      { name: 'Admin', time: '35m', color: 6, share: 19 },
    ],
    ask: 'Ask your AI',
    chat: [
      { q: 'How long did I spend on the website this week?', tool: 'get_project_time' },
      { a: '6h 20m, mostly on Tuesday and today. You worked on the hero and the Norwegian translation.' },
      { q: 'Where did I leave off yesterday?', tool: 'get_activities' },
      { a: 'In Features.astro in VS Code, right after you switched to the new colours.' },
    ],
    focusToday: 'Focus time today',
    focusTime: '3h 20m',
    focusSub: '2 focus sessions of 25 minutes or more',
    focusAxis: ['08', '12', '16'],
  },
  why: {
    eyebrow: 'Why Loggie',
    title: 'Built for people who do a lot.',
    cards: [
      {
        title: 'Completely private',
        text: 'All data stays on your Mac. No cloud, no servers – your activity stays yours.',
      },
      {
        title: 'AI\u2011powered recall',
        text: 'Ask your AI what you worked on, or get a summary of your week.',
      },
      {
        title: 'Every app, every tab',
        text: 'Apps, window titles, documents and web pages – Loggie captures the full context of your workday.',
      },
      {
        title: 'Silent & lightweight',
        text: 'Runs quietly in your menu bar with minimal resource usage. You won’t even notice it’s there.',
      },
    ],
  },
  how: {
    eyebrow: 'How it works',
    title: 'Three steps, then just work.',
    steps: [
      {
        title: 'Install',
        text: 'Download Loggie and open it. It appears in your menu bar and starts logging right away. No sign-up.',
      },
      {
        title: 'Connect your AI',
        text: 'Go to Settings → AI integrations and connect Claude, Cursor, Windsurf or Continue. Restart the tool, and it can read your activity via MCP.',
      },
      {
        title: 'Ask',
        text: 'Ask about your day, your week or a project. The answer is based on what actually happened, not on what you remember.',
      },
    ],
    promptsTitle: 'Things to ask',
    prompts: [
      'What did I work on yesterday?',
      'How many hours went into Loggie this week?',
      'Where did I leave off on Friday?',
      'Write descriptions for my October timesheet',
      'When was I most focused this week?',
    ],
  },
  features: {
    eyebrow: 'Features',
    title: 'Everything in one small menu bar app.',
    ai: {
      title: 'Claude, Cursor and other AI tools',
      text: 'Eleven MCP tools let your AI assistant look up activities, app usage, projects, focus sessions and daily summaries. It can also add notes about what you were doing.',
    },
    list: [
      {
        icon: 'pen',
        title: 'Working on',
        text: 'Note what you’re working on from the menu, with a timer and pause. The task ends by itself after 30 minutes away.',
      },
      {
        icon: 'folder',
        title: 'Projects',
        text: 'Give a project a few keywords, and Loggie matches your time to it from window titles and tasks.',
      },
      {
        icon: 'focus',
        title: 'Focus sessions',
        text: 'Finds stretches of at least 25 minutes of uninterrupted work, so you can see when deep work actually happened.',
      },
      {
        icon: 'moon',
        title: 'Knows when you’re away',
        text: 'Stops counting after 5 minutes without keyboard or mouse, and when the screen is locked or your Mac sleeps.',
      },
      {
        icon: 'sheet',
        title: 'Timesheets',
        text: 'Export a project as CSV with date, hours, description and signature lines. Ready for project accounting and R&D tax credits.',
      },
      {
        icon: 'terminal',
        title: 'Claude Code link',
        text: 'Records the folder you’re working in as your task, so coding time ends up on the right project.',
      },
      {
        icon: 'bell',
        title: 'Project switch reminders',
        text: 'If you’ve worked on another project for 5 minutes, Loggie asks whether you want to switch task.',
      },
      {
        icon: 'toggle',
        title: 'You decide',
        text: 'Turn each feature on or off. The menu, the window and the AI tools follow your choices.',
      },
    ] as { icon: FeatureIcon; title: string; text: string }[],
  },
  privacy: {
    eyebrow: 'Privacy',
    title: 'Everything stays on your Mac.',
    text: 'Loggie stores your activity in a local database. There’s no account and no cloud. Your data only leaves your Mac when you ask an AI tool about it, and then the tool only gets what it asks for.',
    facts: [
      'No account',
      'No cloud',
      'The MCP server runs locally',
      'Window titles only with your permission',
      'In English, Norwegian, Spanish and French',
      'Light and dark mode',
    ],
  },
  cta: {
    title: ['Ready to remember', 'everything?'],
    text: 'Download Loggie, connect your AI tool and ask about your day.',
  },
  footer: {
    tagline: 'Your personal activity memory.',
    nav: 'Footer',
  },
};

const no: typeof en = {
  htmlLang: 'nb',
  ogLocale: 'nb_NO',
  meta: {
    title: 'Loggie – Ditt personlige arbeidsminne',
    description:
      'Loggie ligger i menylinjen på Macen og logger hvilke apper, filer og nettsider du jobber i. Claude, Cursor og andre AI-verktøy kan lese dataene via MCP. Alt blir på maskinen din.',
  },
  nav: {
    home: 'Loggie forside',
    features: 'Funksjoner',
    how: 'Slik virker det',
    download: 'Last ned',
    otherLang: 'English',
    otherLangLabel: 'Read in English',
    toDark: 'Bytt til mørk modus',
    toLight: 'Bytt til lys modus',
  },
  hero: {
    title: ['Ditt personlige', 'arbeidsminne.'],
    sticker: 'AI\u2011drevet',
    sub: 'Loggie kjører stille i menylinjen og husker hva du har jobbet med. Spør Claude, Cursor eller et annet AI-verktøy om dagen din, og få svar som bygger på det som faktisk skjedde.',
    download: 'Last ned for macOS',
    windows: 'Windows (tidlig versjon)',
    note: 'Ingen konto. Ingen abonnement. Dataene blir på Macen din.',
  },
  demo: {
    workingOn: 'Jobber med',
    task: 'Nettsiden til Loggie',
    pause: 'Pause',
    projectsToday: 'Prosjekter i dag',
    projects: [
      { name: 'Nettsiden til Loggie', time: '3t 05m', color: 1, share: 100 },
      { name: 'Kunde A', time: '1t 40m', color: 2, share: 54 },
      { name: 'Admin', time: '35m', color: 6, share: 19 },
    ],
    ask: 'Spør AI-en',
    chat: [
      { q: 'Hvor lenge jobbet jeg med nettsiden denne uken?', tool: 'get_project_time' },
      { a: '6t 20m, mest på tirsdag og i dag. Du jobbet med toppen av siden og den norske oversettelsen.' },
      { q: 'Hvor slapp jeg i går?', tool: 'get_activities' },
      { a: 'I Features.astro i VS Code, rett etter at du byttet til de nye fargene.' },
    ],
    focusToday: 'Fokustid i dag',
    focusTime: '3t 20m',
    focusSub: '2 fokusøkter på 25 minutter eller mer',
    focusAxis: ['08', '12', '16'],
  },
  why: {
    eyebrow: 'Hvorfor Loggie',
    title: 'Laget for deg som gjør mye.',
    cards: [
      {
        title: 'Helt privat',
        text: 'Alle data blir på Macen din. Ingen sky og ingen servere – aktiviteten din er din.',
      },
      {
        title: 'Husker med AI',
        text: 'Spør AI-en hva du jobbet med, eller få en oppsummering av uken.',
      },
      {
        title: 'Alle apper, alle faner',
        text: 'Apper, vindustitler, dokumenter og nettsider – Loggie fanger opp hele arbeidsdagen.',
      },
      {
        title: 'Stille og lett',
        text: 'Ligger rolig i menylinjen og bruker nesten ingen ressurser. Du merker ikke at den er der.',
      },
    ],
  },
  how: {
    eyebrow: 'Slik virker det',
    title: 'Tre steg, så er det bare å jobbe.',
    steps: [
      {
        title: 'Installer',
        text: 'Last ned Loggie og åpne appen. Den legger seg i menylinjen og begynner å logge med en gang. Du trenger ingen konto.',
      },
      {
        title: 'Koble til AI-verktøyet',
        text: 'Gå til Innstillinger → AI-integrasjoner og koble til Claude, Cursor, Windsurf eller Continue. Start verktøyet på nytt, så kan det lese aktiviteten din via MCP.',
      },
      {
        title: 'Spør',
        text: 'Spør om dagen, uken eller et prosjekt. Svaret bygger på det som faktisk skjedde, ikke på det du husker.',
      },
    ],
    promptsTitle: 'Ting du kan spørre om',
    prompts: [
      'Hva jobbet jeg med i går?',
      'Hvor mange timer har gått til Loggie denne uken?',
      'Hvor slapp jeg på fredag?',
      'Skriv beskrivelser til timelisten min for oktober',
      'Når var jeg mest fokusert denne uken?',
    ],
  },
  features: {
    eyebrow: 'Funksjoner',
    title: 'Alt i én liten app i menylinjen.',
    ai: {
      title: 'Claude, Cursor og andre AI-verktøy',
      text: 'Elleve MCP-verktøy lar AI-assistenten slå opp aktiviteter, appbruk, prosjekter, fokusøkter og daglige oppsummeringer. Den kan også legge inn notater om hva du holdt på med.',
    },
    list: [
      {
        icon: 'pen',
        title: 'Jobber med',
        text: 'Skriv hva du jobber med fra menyen, med tidtaker og pause. Oppgaven avsluttes av seg selv etter 30 minutter borte.',
      },
      {
        icon: 'folder',
        title: 'Prosjekter',
        text: 'Gi prosjektet noen nøkkelord, så kobler Loggie tiden din til det ut fra vindustitler og oppgaver.',
      },
      {
        icon: 'focus',
        title: 'Fokusøkter',
        text: 'Finner perioder med minst 25 minutter sammenhengende arbeid, så du ser når du faktisk fikk jobbet i dybden.',
      },
      {
        icon: 'moon',
        title: 'Vet når du er borte',
        text: 'Slutter å telle etter 5 minutter uten tastatur eller mus, og når skjermen er låst eller Macen sover.',
      },
      {
        icon: 'sheet',
        title: 'Timelister',
        text: 'Eksporter et prosjekt som CSV med dato, timer, beskrivelse og signaturlinjer. Klar for prosjektregnskap og SkatteFUNN.',
      },
      {
        icon: 'terminal',
        title: 'Claude Code-kobling',
        text: 'Registrerer mappen du jobber i som oppgave, så kodetiden havner på riktig prosjekt.',
      },
      {
        icon: 'bell',
        title: 'Varsel ved prosjektbytte',
        text: 'Har du jobbet med et annet prosjekt i 5 minutter, spør Loggie om du vil bytte oppgave.',
      },
      {
        icon: 'toggle',
        title: 'Du bestemmer',
        text: 'Slå hver funksjon av eller på. Menyen, vinduet og AI-verktøyene følger valgene dine.',
      },
    ],
  },
  privacy: {
    eyebrow: 'Personvern',
    title: 'Alt blir på Macen din.',
    text: 'Loggie lagrer aktiviteten din i en lokal database. Det er ingen konto og ingen sky. Dataene forlater bare Macen når du spør et AI-verktøy om dem, og da får verktøyet bare det det spør om.',
    facts: [
      'Ingen konto',
      'Ingen sky',
      'MCP-serveren kjører lokalt',
      'Vindustitler bare med din tillatelse',
      'På norsk, engelsk, spansk og fransk',
      'Lys og mørk modus',
    ],
  },
  cta: {
    title: ['Klar til å huske', 'alt?'],
    text: 'Last ned Loggie, koble til AI-verktøyet ditt og spør om dagen din.',
  },
  footer: {
    tagline: 'Ditt personlige arbeidsminne.',
    nav: 'Bunntekst',
  },
};

export const ui: Record<Lang, typeof en> = { en, no };
