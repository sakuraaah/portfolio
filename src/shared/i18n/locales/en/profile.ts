export const enProfile = {
  role: 'Full-stack engineer',
  about: {
    eyebrow: 'About',
    title: 'A few words.',
    lede: "I'm a Full-Stack Developer with a focus on frontend development.",
    copy: 'When developing software, I care about clean code and good component design. My main goal is to write/maintain code that is both efficient and scalable, as well as consistent and readable, which helps in the long-term development. In my experience, this approach results in building things that actually work well in production, not just in dev.',
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Feel free to say <accent>hi</accent>.',
    copy: "Questions about a project, or just want to compare notes? You'll find me here.",
  },
  hero: {
    title: 'Making software feel <accent>simple</accent>.',
    copy: "A selection of things I've built recently. Some of these I built on my own, start to finish. Others were team efforts where I handled frontend, backend or both.",
    cta: {
      work: 'View selected work',
    },
  },
} as const;
