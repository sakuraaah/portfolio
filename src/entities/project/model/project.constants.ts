import type { Project } from './project.types';

export const featuredProject: Project = {
  title: 'Project Name',
  year: '2026',
  role: 'Design & engineering',
  type: 'Full-stack build',
  description:
    'A short, confident description of what this product does, the problem it solves, and what makes the build worth showing. Swap this for the real story.',
  stack: ['React', 'TypeScript', 'Node', 'Postgres'],
  overview: [
    "Open with the context: what this product is, who it's for, and the problem that made it worth building. Keep it human: a paragraph or two is plenty.",
    'Then say what you actually did: the parts you designed, the systems you built, and the tradeoffs you made along the way. This is the story the project card on the home page only hints at.',
  ],
  highlights: [
    'A standout feature or technical decision worth calling out.',
    "A measurable outcome, or something you're proud of in the build.",
    'A detail that shows the care that went into it.',
  ],
};
