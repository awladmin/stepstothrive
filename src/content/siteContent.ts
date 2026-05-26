export const siteContent = {
  practitioner: {
    name: "Dr Johannah Slifi",
    shortName: "Dr Jo",
    title: "Educational Psychologist",
    registration: "HCPC Registered",
    qualification:
      "Doctorate in Professional Educational, Child and Adolescent Psychology",
    location: "Amersham, Buckinghamshire",
  },
  home: {
    hero: {
      headline:
        "Helping children, young people, and the adults around them, to thrive.",
      subheadline:
        "Educational psychology rooted in evidence, delivered with warmth. Supporting families, schools and professionals across Amersham and Buckinghamshire.",
      cta: "Find out how I can help",
      ctaHref: "/contact",
    },
    audiences: {
      title: "Who I work with",
      subtitle:
        "Wherever you're coming from, I'd like to understand what's going on and how I can help.",
      items: [
        {
          title: "Families",
          description:
            "Compassionate, expert support for parents and carers navigating challenges with their child or young person, whatever stage you're at.",
          href: "/services#families",
        },
        {
          title: "Schools",
          description:
            "Educational psychology advice, staff training, reflective supervision and assessment work for school senior leaders, SENCos and ELSAs.",
          href: "/services#schools",
        },
        {
          title: "Professionals",
          description:
            "Multi-agency consultation and reflective supervision for those working with children and young people across health and care.",
          href: "/services#professionals",
        },
      ],
    },
    specialisms: {
      title: "Specialist areas",
      subtitle:
        "Drawing on doctoral research, twelve years of practice across schools and alternative provision, and continued evidence-based training.",
      items: [
        {
          title: "Emotionally Based School Avoidance",
          description:
            "My doctoral specialism. Helping families and schools understand school refusal and what makes a meaningful return possible.",
          featured: true,
        },
        {
          title: "Neurodivergence",
          description:
            "Supporting children, young people and the adults around them to understand and respond well to neurodivergent ways of being.",
        },
        {
          title: "Emotional regulation",
          description:
            "Evidence-based approaches to building resilience and regulation skills, in the moment and over time.",
        },
        {
          title: "Literacy difficulties",
          description:
            "Assessment and recommendations for children experiencing specific literacy difficulties.",
        },
        {
          title: "Resilience",
          description:
            "Building the conditions, in families and schools, where children and young people can flourish.",
        },
      ],
    },
    bio: {
      title: "Meet Dr Jo",
      intro:
        "I'm an HCPC-registered Educational Psychologist supporting children and young people aged 0 to 25, and the families and schools around them.",
      narrative:
        "I came to educational psychology after a decade working directly with children, in mainstream schools and in alternative provision for those who weren't coping with mainstream. That grounded experience shapes how I work now: collaboratively, practically, and with deep respect for the adults trying to help.",
      credentials: [
        "HCPC Registered",
        "Doctorate, UCL Institute of Education",
        "Educational Psychologist at the Royal Borough of Windsor & Maidenhead",
      ],
      cta: "Read more about me",
      ctaHref: "/about",
    },
    whatToExpect: {
      title: "What to expect",
      subtitle:
        "I know reaching out can feel like a big step. Here's how I usually work.",
      steps: [
        {
          number: "01",
          title: "Initial conversation",
          description:
            "A free, no-obligation phone call so I can understand what's going on and you can decide whether I'm the right fit.",
        },
        {
          number: "02",
          title: "Assessment & formulation",
          description:
            "Depending on what's needed, this might involve meeting your child, observing in school, conversations with the adults involved, and structured assessment.",
        },
        {
          number: "03",
          title: "Ongoing support",
          description:
            "Clear, accessible recommendations and, where it's useful, continued support as you put them into practice.",
        },
      ],
    },
    faq: {
      title: "Common questions",
      subtitle:
        "If your question isn't here, please get in touch and I'll come back to you.",
      items: [
        {
          question: "What ages do you work with?",
          answer:
            "Children and young people from birth to 25, plus the families and schools around them.",
        },
        {
          question: "Do I need a referral from my GP or school?",
          answer:
            "No. You can contact me directly. I'm happy to liaise with your child's school or other professionals where it's helpful.",
        },
        {
          question: "How long does an assessment take?",
          answer:
            "It varies depending on what's needed. A full assessment usually involves several sessions across a few weeks, including direct work with your child, conversations with you, and a written report.",
        },
        {
          question: "Will my child have to talk about difficult things?",
          answer:
            "Sessions are paced carefully and led by what your child is comfortable with. A lot of useful information comes from observation, play, and structured tasks rather than direct questioning.",
        },
        {
          question: "Where do sessions take place?",
          answer:
            "In your home, in school, or online, depending on what's most useful. I'm based in Amersham and work across Buckinghamshire.",
        },
      ],
    },
    testimonials: {
      title: "Words from those I've worked with",
      subtitle: "Testimonials to come.",
      items: [],
    },
    cta: {
      headline:
        "If something here speaks to you, I'd love to hear from you.",
      description:
        "A free initial conversation, no obligation, just a chance to talk through what's going on.",
      buttonText: "Get in touch",
      buttonHref: "/contact",
    },
  },
};

export type SiteContent = typeof siteContent;
