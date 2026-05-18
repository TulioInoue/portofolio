export const projects = [
  {
    imgSrc: "/images/projects/diabetes_classification.png",
    imgAlt: "Diabetes classfication project",
    name: "Diabetes classfication",
    description:
      "Interface of a study for diabetes prevention that allows user interaction with model.",
    technologies: {
      "Infrastructures and DevOps": ["Lambda", "API Gateway", "S3", "Github"],
      "Full Stack developer": [
        "HTML",
        "CSS",
        "React",
        "TypeScript",
        "echarts for react",
      ],
      "Data Science": [
        "Python",
        "scikit-learn",
        "matplotlib",
        "numpy",
        "seaborn",
        "pandas",
        "polars",
        "joblib",
      ],
    },
    links: [
      {
        icon: "fi fi-brands-github",
        link: "https://github.com/TulioInoue/diabetes_frontend",
        name: "code",
      },
      {
        icon: "fi fi-rr-browser",
        link: "http://diabetes-frontend.s3-website.us-east-2.amazonaws.com/about",
        name: "project",
      },
    ],
  },
  {
    imgSrc: "/images/projects/ecolungs.png",
    imgAlt: "Ecolungs project",
    name: "Ecolungs",
    description:
      "Real-time control panel providing information on air pollution in 100 cities worldwide and its relationship to respiratory health.",
    technologies: {
      "Infrastructures and DevOps": [
        "Lambda",
        "EventBridge",
        "DynamoDB",
        "API Gateway",
        "S3",
        "Github",
      ],
      "Full Stack developer": [
        "HTML",
        "CSS",
        "React",
        "TypeScript",
        "echarts for react",
      ],
      "Data Science": ["Python"],
    },
    links: [
      {
        icon: "fi fi-brands-github",
        link: "https://github.com/TulioInoue/EcoLungs",
        name: "code",
      },
      {
        icon: "fi fi-rr-browser",
        link: "http://ecolungs-frontend.s3-website.us-east-2.amazonaws.com/about",
        name: "project",
      },
    ],
  },
];
