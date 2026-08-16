export interface ProblemStatement {
  id: string;
  ministry: string;
  category: string;
  title: string;
  description: string;
  datasets: string[];
  visualType:
    | "justice"
    | "agriculture"
    | "urban"
    | "railways"
    | "disaster"
    | "welfare"
    | "misinformation"
    | "finance"
    | "power"
    | "roads"
    | "policy";
}

export const problems: ProblemStatement[] = [
  {
    id: "01",
    ministry: "Law & Justice / e-Courts",
    category: "Judiciary & Justice Delivery",
    title: "Case Backlog Risk",
    description:
      "Build an AI system that predicts case backlog risk and recommends optimal case scheduling across Indian courts using case metadata, judge availability, and historical disposal rates.",
    datasets: [
      "Case metadata",
      "Judge availability",
      "Historical disposal rates",
      "Court pendency",
    ],
    visualType: "justice",
  },

  {
    id: "02",
    ministry: "Agriculture & Farmers Welfare",
    category: "Farmer Distress Prediction",
    title: "Farmer Distress Prediction",
    description:
      "Design an AI model that predicts district-level farmer distress using rainfall data, mandi price trends, PM-KISAN disbursement records, and crop insurance claims.",
    datasets: [
      "Rainfall",
      "Mandi prices",
      "PM-KISAN",
      "Crop insurance",
    ],
    visualType: "agriculture",
  },

  {
    id: "03",
    ministry: "Housing & Urban Affairs",
    category: "Urban Planning & Slum Growth",
    title: "Urban Planning & Slum Growth",
    description:
      "Create an AI system that predicts informal settlement growth in Tier-1 and Tier-2 cities using satellite nighttime lights, migration census data, and construction permits.",
    datasets: [
      "Nighttime lights",
      "Migration",
      "Census",
      "Construction permits",
    ],
    visualType: "urban",
  },

  {
    id: "04",
    ministry: "Railways",
    category: "Predictive Maintenance & Safety",
    title: "Railway Safety Prediction",
    description:
      "Design an AI platform that predicts track failure, signal malfunction, and collision risk using sensor data, maintenance logs, weather conditions, and historical accident records.",
    datasets: [
      "Track sensors",
      "Maintenance logs",
      "Weather",
      "Accident records",
    ],
    visualType: "railways",
  },

  {
    id: "05",
    ministry: "NDMA",
    category: "Multi-Hazard Disaster Forecasting",
    title: "Multi-Hazard Forecasting",
    description:
      "Build a multi-hazard AI platform that forecasts floods, cyclones, and landslide risk zones using weather, terrain, river gauge and historical disaster data.",
    datasets: [
      "Weather",
      "Terrain",
      "River gauges",
      "Historical disasters",
    ],
    visualType: "disaster",
  },

  {
    id: "06",
    ministry: "Electronics & IT / DBT Mission",
    category: "Welfare Fraud Detection",
    title: "Welfare Fraud Detection",
    description:
      "Create an AI system that detects fraudulent and duplicate claims across DBT schemes using beneficiary relationships and transaction patterns.",
    datasets: [
      "Beneficiary records",
      "Transaction patterns",
      "Scheme data",
      "Claim history",
    ],
    visualType: "welfare",
  },

  {
    id: "07",
    ministry: "Electronics & IT",
    category: "Regional-Language Misinformation",
    title: "Regional-Language Misinformation",
    description:
      "Build an AI system that detects AI-generated misinformation in Indian regional languages and traces potential first-spread origin points.",
    datasets: [
      "Regional language data",
      "Social content",
      "Audio",
      "Video",
    ],
    visualType: "misinformation",
  },

  {
    id: "08",
    ministry: "Finance",
    category: "Financial Intelligence & Tax Evasion",
    title: "Financial Intelligence",
    description:
      "Develop a graph-AI platform that identifies coordinated financial fraud networks using invoices, transactions, companies, UPI behavior and director relationships.",
    datasets: [
      "GST invoices",
      "Banking transactions",
      "UPI",
      "Company relationships",
    ],
    visualType: "finance",
  },

  {
    id: "09",
    ministry: "Home Affairs",
    category: "Cascading Disaster Intelligence",
    title: "Cascading Disaster Intelligence",
    description:
      "Build an AI system predicting cascading disasters by combining rainfall, satellite imagery, river levels, roads, power infrastructure and population density.",
    datasets: [
      "Rainfall",
      "Satellite imagery",
      "River levels",
      "Infrastructure",
    ],
    visualType: "disaster",
  },

  {
    id: "10",
    ministry: "Railways",
    category: "Operational Disruption & Rerouting",
    title: "Railway Disruption & Rerouting",
    description:
      "Build an AI framework predicting railway operational disruptions caused by weather, infrastructure health, passenger demand and freight congestion.",
    datasets: [
      "Weather",
      "Infrastructure",
      "Passenger demand",
      "Freight",
    ],
    visualType: "railways",
  },

  {
    id: "11",
    ministry: "Power",
    category: "National Grid Balancing",
    title: "National Grid Balancing",
    description:
      "Design an AI system predicting regional power shortages using renewable generation, demand behavior, transmission constraints, weather and industrial consumption.",
    datasets: [
      "Power demand",
      "Renewable generation",
      "Weather",
      "Transmission",
    ],
    visualType: "power",
  },

  {
    id: "12",
    ministry: "Road Transport & Highways",
    category: "Accident Hotspot Prediction",
    title: "Accident Hotspot Prediction",
    description:
      "Create an AI platform predicting highway accident hotspots using traffic behavior, weather, road geometry, maintenance history and lighting conditions.",
    datasets: [
      "Traffic",
      "Weather",
      "Road geometry",
      "Maintenance",
    ],
    visualType: "roads",
  },

  {
    id: "13",
    ministry: "NITI Aayog",
    category: "National Policy Impact Simulation",
    title: "National Policy Impact Simulation",
    description:
      "Build an AI simulation engine estimating the economic, environmental and social impacts of proposed government policies before implementation.",
    datasets: [
      "Demographics",
      "Economic indicators",
      "Climate projections",
      "Mobility",
    ],
    visualType: "policy",
  },
];