export const enCommon = {
  about: {
    eyebrow: 'About',
    title: 'A few words.',
    lede: 'I build software end to end, designing the interface, wiring the logic, and shipping it to people who use it every day.',
    copy: 'My focus is on products that feel calm and considered: clear interfaces, solid foundations, and the small details that make something a pleasure to use. This site is a running record of that work, nothing more, nothing less.',
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Always happy to <accent>talk shop</accent>.',
    copy: "Questions about a project, or just want to compare notes? You'll find me here.",
  },
  hero: {
    title: 'Crafting software that feels <accent>effortless</accent>.',
    copy: "A selection of products I've designed, built, and shipped \u2014 from the interface down to the data layer.",
    cta: {
      work: 'View selected work',
    },
    image: {
      portraitLabel: 'Portrait / feature image',
    },
  },
  profile: {
    role: 'Full-stack engineer',
  },
  project: {
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
      galleryImageLabel: 'Screenshot',
      highlights: 'Highlights',
      overview: 'Overview',
    },
    card: {
      imageLabel: 'Project screenshot',
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
    shot: {
      imageLabel: 'Lead project screenshot',
    },
  },
  theme: {
    preference: {
      dark: 'Dark',
      light: 'Light',
      system: 'Auto',
    },
  },
} as const;
