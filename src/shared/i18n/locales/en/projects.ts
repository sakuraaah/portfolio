export const enProjects = {
  actions: {
    backToAllWork: 'Back to all work',
    selectedWork: 'Selected work',
    source: 'Source',
    visitProject: 'Visit project',
    viewProject: 'View project',
    viewSource: 'View source',
    getInTouch: 'Get in touch',
  },
  body: {
    facts: {
      role: 'Role',
      stack: 'Stack',
      year: 'Year',
    },
    highlights: 'Highlights',
    overview: 'Overview',
  },
  content: {
    'project-name': {
      title: 'Project Name',
      role: 'Design & engineering',
      type: 'Full-stack build',
      description:
        'A short, confident description of what this product does, the problem it solves, and what makes the build worth showing. Swap this for the real story.',
      overview: [
        "Open with the context: what this product is, who it's for, and the problem that made it worth building. Keep it human: a paragraph or two is plenty.",
        'Then say what you actually did: the parts you designed, the systems you built, and the tradeoffs you made along the way. This is the story the project card on the home page only hints at.',
      ],
      highlights: [
        'A standout feature or technical decision worth calling out.',
        "A measurable outcome, or something you're proud of in the build.",
        'A detail that shows the care that went into it.',
      ],
    },
    'puslan-runtus': {
      title: 'Пуслан Рунтус',
      role: 'Именинник',
      type: 'ДР build',
      description: 'Руслан, поздравляем с Днем Рождения!!!',
      overview: [
        'Так как ты у нас теперь большой и взрослый, мы решили подарить тебе свой личный почтовый ящик в гмейле, теперь сможешь с нами общаться, да и вообще с него Билу Гейтсу можно написать и в Майкрософт устроиться.',
        'И так, чисто как бонус, можешь заглянуть в папку "секретная папка с подарком" в гмейле, мб там будет что-то крутое :)',
      ],
      highlights: [
        'Стал на год старше и умнее',
        'Организовал крутой мальчишник',
        'Приютил Валерика',
        'Все такой же крутой чел как и всегда😎',
      ],
    },
  },
  list: {
    eyebrow: 'Selected work',
    title: "Things I've built.",
    copy: 'An evolving showcase \u2014 each project added as it ships.',
    more: 'More projects are being migrated over from GitHub. This space grows as they land.',
  },
  more: {
    title: 'Want to see more?',
  },
  status: {
    latestProject: 'Latest project',
  },
} as const;
