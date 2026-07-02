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
