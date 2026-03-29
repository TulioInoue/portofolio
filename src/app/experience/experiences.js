const educationalExperience = [
  {
    id: 1,
    name: "University of São Paulo",
    degree: "undergraduate degree in mathematics",
    img: "images/institution/usp.jpg",
    startDate: "2018/02",
    endDate: "2022/06",
  },
  {
    id: 2,
    name: "Foundation for Business, Analytics and Technology",
    degree: "Postgraduate degree in Data Analytics and Artificial Intelligence", // Applied to Business, Mathematics and Computer Science
    img: "/images/institution/fnat.jpg",
    startDate: "2026/01",
    endDate: "2026/12",
  },
];

const professionalExperience = [
  {
    id: 1,
    name: "R-Dias",
    img: "/images/institution/rdias.jpeg",
    periods: [
      {
        id: 1,
        level: "junior",
        role: "Statistical analyst",
        startDate: "2023/07",
        endDate: "2024/04",
        description: [
          "Reduced data processing time by 3 hours through automated data workflows",
          "Improved analytical effectiveness by over 25% by delivering an interactive statistical visualization tool.",
          "Helped build dynamic dashboards and visualizations to support stakeholder discussions and strategic alignment in PowerBI.",
        ],
      },
      {
        id: 2,
        level: "junior",
        role: "Data Cientist & Full Stack Developer",
        startDate: "2024/04",
        endDate: "2024/08",
        description: [
          "Enabled faster, data-driven decision-making through analytical dashboards and structured data pipelines.",
          "Increased operational efficiency by more than 40% through workflow automation.",
          "Led the creation of a store expansion forecasting project in a web application, supporting strategic business decisions and amplifying previous projects more than 2 times.",
          "Developed a Market Basket Analysis algorithm to identify purchasing patterns and product associations in the supermarket context.",
        ],
      },
    ],
  },
  {
    id: 2,
    name: "FGV - IBRE",
    img: "/images/institution/fgv.jpg",
    periods: [
      {
        id: 1,
        level: "junior",
        role: "Data analyst",
        startDate: "2025/04",
        endDate: "2025/07",
        description: [
          "Increased analytical coverage by more than 30% through large-scale data modeling.",
          "Combined NLP techniques and data engineering with a focus on robustness, scalability, and economic applicability.",
          "Demonstrated economies of scale across over 70% of classified inputs in the civil construction sector using large-scale fiscal data analysis.",
        ],
      },
    ],
  },
  {
    id: 3,
    name: "TotalPass",
    img: "/images/institution/totalpass.jpg",
    periods: [
      {
        id: 1,
        level: "intermediate",
        role: "Data scientist",
        startDate: "2025/11",
        endDate: "2026/02",
        description: [
          "Focused on the Fraud Analysis and Prevention unit.",
          "Development and testing of end-to-end detection algorithms, ranging from robust data cleaning and preprocessing to the identification of outliers and deviant patterns.",
        ],
      },
    ],
  },
];

export { educationalExperience, professionalExperience };
