export const siteContent = {
  practitioner: {
    name: "Dr Johannah Slifi",
    shortName: "Dr Jo",
    title: "Educational Psychologist",
    registration: "HCPC Registered",
    qualification:
      "Doctorate in Professional Educational, Child and Adolescent Psychology",
    location: "Amersham, Buckinghamshire",
    phone: "07956 724357",
    email: "jo@stepstothrive.co.uk",
    accreditations: [
      "HCPC Registered",
      "AEP Member",
      "Enhanced DBS",
    ],
    // Placeholder until Jo shares her real number (format: PYL + 6 digits)
    hcpcNumber: "PYL038416",
    areasServed: [
      "Amersham",
      "Chesham",
      "The Chalfonts",
      "Beaconsfield",
      "Marlow",
      "High Wycombe",
      "Gerrards Cross",
      "Aylesbury",
    ],
    feesStatement:
      "Fees depend on the support identified through our initial conversation, any assessment, and any follow-up needed. I'll always talk fees through openly with you up front, so there are no surprises.",
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
          icon: "users",
          title: "Families",
          description:
            "Compassionate, expert support for parents and carers navigating challenges with their child or young person, whatever stage you're at.",
          href: "/services/families",
        },
        {
          icon: "graduation-cap",
          title: "Schools",
          description:
            "Educational psychology advice, staff training, reflective supervision and assessment work for school senior leaders, SENCos and ELSAs.",
          href: "/services/schools",
        },
        {
          icon: "handshake",
          title: "Professionals",
          description:
            "Multi-agency consultation and reflective supervision for those working with children and young people across health and care.",
          href: "/services",
        },
      ],
    },
    specialisms: {
      title: "Specialist areas",
      subtitle:
        "Drawing on doctoral research, twelve years of practice across schools and alternative provision, and continued evidence-based training.",
      items: [
        {
          icon: "compass",
          title: "Emotionally Based School Avoidance",
          description:
            "My doctoral specialism. Helping families and schools understand school refusal and what makes a meaningful return possible.",
          featured: true,
        },
        {
          icon: "sparkles",
          title: "Neurodivergence",
          description:
            "Supporting children, young people and the adults around them to understand and respond well to neurodivergent ways of being.",
        },
        {
          icon: "heart",
          title: "Emotional regulation",
          description:
            "Evidence-based approaches to building resilience and regulation skills, in the moment and over time.",
        },
        {
          icon: "book-open",
          title: "Literacy difficulties",
          description:
            "Assessment and recommendations for children experiencing specific literacy difficulties.",
        },
        {
          icon: "sprout",
          title: "Resilience",
          description:
            "Building the conditions, in families and schools, where children and young people can flourish.",
        },
      ],
    },
    bio: {
      title: "Hello, I'm Dr Jo",
      intro:
        "I'm an Educational Psychologist registered with the HCPC. I work with children and young people, their families, and their schools, across Amersham and South Buckinghamshire.",
      narrative:
        "I came to educational psychology after a decade working directly with children, in mainstream schools and in alternative provision for those who weren't coping with mainstream. That grounded experience shapes how I work now: collaboratively, practically, and with deep respect for the adults trying to help.",
      cta: "More about me",
      ctaHref: "/about",
    },
    whatToExpect: {
      title: "What to expect",
      subtitle:
        "I know reaching out can feel like a big step. Here's how the work usually flows.",
      steps: [
        {
          number: "01",
          title: "Get in touch",
          description:
            "By form, email or phone. I'll come back to you as soon as I can.",
        },
        {
          number: "02",
          title: "A free initial conversation",
          description:
            "So I can understand what's going on and you can decide whether I'm the right fit. No obligation.",
        },
        {
          number: "03",
          title: "Agreed plan and fee",
          description:
            "A short written agreement setting out the scope of the work, the timeframe, and the fee. No surprises.",
        },
        {
          number: "04",
          title: "Work begins",
          description:
            "Depending on what's needed: parent consultation, assessment, school observation, training, supervision, or ongoing support.",
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
          question: "Where do sessions take place?",
          answer:
            "In your home, in school, or online, depending on what's most useful. I'm based in Amersham and work across South Buckinghamshire.",
        },
      ],
    },
    testimonials: {
      title: "Words from those I've worked with",
      subtitle: "",
      // Empty until Jo provides real, consented testimonials.
      // TestimonialsSection returns null when items.length === 0.
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
