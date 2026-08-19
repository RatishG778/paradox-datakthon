export interface StateProblem {
  id: string;
  title: string;
  category: string;
  description: string;
  question: string;
}

export interface StateInsight {
  id: string;
  name: string;
  region: string;
  intensity: number;
  challenges: number;

  headline: string;
  description: string;

  signals: {
    label: string;
    value: string;
  }[];

  problems: StateProblem[];
}

export const stateInsights: StateInsight[] = [
  {
    id: "tamil-nadu",
    name: "Tamil Nadu",
    region: "South India",
    intensity: 86,
    challenges: 4,

    headline:
      "A rapidly changing state where cities, industry and infrastructure are increasingly connected.",

    description:
      "Urban growth, transport demand, industrial activity and environmental pressure create interconnected decisions that require better use of data.",

    signals: [
      {
        label: "Urban growth",
        value: "HIGH",
      },
      {
        label: "Transport",
        value: "ACTIVE",
      },
      {
        label: "Industry",
        value: "RISING",
      },
      {
        label: "Environment",
        value: "CRITICAL",
      },
    ],

    problems: [
      {
        id: "tn-mobility",
        title: "Urban Mobility",
        category: "TRANSPORT",
        description:
          "Growing movement across cities creates pressure on roads, public transport and infrastructure.",

        question:
          "Can data help predict mobility demand and improve how cities move people?",
      },

      {
        id: "tn-environment",
        title: "Environmental Signals",
        category: "ENVIRONMENT",
        description:
          "Environmental conditions generate signals across air, water, land and weather systems.",

        question:
          "Can multiple environmental signals be combined to identify emerging risks earlier?",
      },

      {
        id: "tn-industry",
        title: "Industrial Intelligence",
        category: "INDUSTRY",
        description:
          "Industrial activity produces large operational datasets that can reveal inefficiencies.",

        question:
          "How can data reveal opportunities to improve industrial performance?",
      },
    ],
  },

  {
    id: "maharashtra",
    name: "Maharashtra",
    region: "West India",
    intensity: 94,
    challenges: 5,

    headline:
      "A dense economic and urban network where finance, mobility and infrastructure intersect.",

    description:
      "Large urban systems and economic activity create complex datasets that can be used to understand infrastructure, movement and resource demand.",

    signals: [
      {
        label: "Urban systems",
        value: "HIGH",
      },
      {
        label: "Mobility",
        value: "HIGH",
      },
      {
        label: "Finance",
        value: "ACTIVE",
      },
      {
        label: "Infrastructure",
        value: "CRITICAL",
      },
    ],

    problems: [
      {
        id: "mh-mobility",
        title: "Urban Mobility",
        category: "MOBILITY",
        description:
          "Large urban populations create constantly changing movement patterns.",

        question:
          "Can mobility data help cities anticipate congestion before it happens?",
      },

      {
        id: "mh-infrastructure",
        title: "Infrastructure Pressure",
        category: "INFRASTRUCTURE",
        description:
          "Rapid development places pressure on transport, utilities and public infrastructure.",

        question:
          "Can predictive analytics identify infrastructure pressure before failure?",
      },

      {
        id: "mh-finance",
        title: "Financial Signals",
        category: "FINANCE",
        description:
          "Economic activity produces large-scale signals across businesses and consumers.",

        question:
          "Can data reveal meaningful patterns inside changing economic activity?",
      },
    ],
  },

  {
    id: "karnataka",
    name: "Karnataka",
    region: "South India",
    intensity: 89,
    challenges: 3,

    headline:
      "A technology-driven ecosystem where digital systems generate enormous amounts of information.",

    description:
      "Technology, mobility, urban growth and public infrastructure create opportunities for data-driven decision making.",

    signals: [
      {
        label: "Technology",
        value: "HIGH",
      },
      {
        label: "Mobility",
        value: "ACTIVE",
      },
      {
        label: "Urban growth",
        value: "RISING",
      },
      {
        label: "Digital",
        value: "HIGH",
      },
    ],

    problems: [
      {
        id: "ka-urban",
        title: "Smart Urban Systems",
        category: "URBAN",
        description:
          "Rapid urban growth produces complex relationships between people, infrastructure and services.",

        question:
          "Can data help cities allocate resources before demand peaks?",
      },

      {
        id: "ka-mobility",
        title: "Mobility Intelligence",
        category: "TRANSPORT",
        description:
          "Movement across dense urban environments creates continuously changing patterns.",

        question:
          "Can predictive models improve urban mobility planning?",
      },
    ],
  },

  {
    id: "uttar-pradesh",
    name: "Uttar Pradesh",
    region: "North India",
    intensity: 91,
    challenges: 4,

    headline:
      "A massive and diverse population creates complex systems across cities, agriculture and public services.",

    description:
      "Large-scale population and infrastructure systems create opportunities to use data for better resource planning.",

    signals: [
      {
        label: "Population",
        value: "VERY HIGH",
      },
      {
        label: "Agriculture",
        value: "HIGH",
      },
      {
        label: "Infrastructure",
        value: "RISING",
      },
      {
        label: "Public services",
        value: "CRITICAL",
      },
    ],

    problems: [
      {
        id: "up-agriculture",
        title: "Agricultural Intelligence",
        category: "AGRICULTURE",
        description:
          "Agricultural systems depend on weather, water, soil and market conditions.",

        question:
          "Can multiple data sources help farmers make better decisions?",
      },

      {
        id: "up-services",
        title: "Public Service Planning",
        category: "PUBLIC SERVICES",
        description:
          "Large populations require efficient allocation of limited public resources.",

        question:
          "Can data help identify where public resources are needed most?",
      },
    ],
  },
];