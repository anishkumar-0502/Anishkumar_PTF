import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  ExposisDL,
  Outdid,
  pinesphere,
  shopify,
  ionHive_banner,
  Kg_Sym,
  Ecom,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Design & Development",
    icon: web,
  },
  {
    title: "scalable App solutions",
    icon: creator,
  },
  {
    title: "Quality Assurance",
    icon: mobile,
  },
  {
    title: "Cloud Solutions",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Developer",
    company_name: "Outdid Unified Pvt Ltd",
    icon: Outdid,
    iconBg: "#383E56",
    date: "Jan 2024 – Present",
    points: [
      "Developed and maintained backend services using Python and Django, ensuring robust and scalable software applications.",
      "Designed and managed PostgreSQL databases for efficient data storage and retrieval, optimizing system performance.",
      "Led and coordinated cross-functional teams, ensuring timely project delivery and seamless execution.",
      "Collaborated with teams across different departments, effectively communicating technical concepts to various stakeholders.",
      "Maintained source code in GitHub repositories, ensuring proper version control and code quality."
    ],
  },

  {
    title: "Data Analyst",
    company_name: "Exposys Data Labs",
    icon: ExposisDL,
    iconBg: "#383E56",
    date: "May 2023 – June 2023",
    points: [
      "My virtual internship with Exposys Data Labs on the Data Science domain by accomplishing a real world problem of predicting the diabetes disease by using various machine learning algorithms such as classification and regression techniques.",
      "Hence, I had a great exposure to the ML algorithms and it was interesting working with these features. ",
      "Spearheaded a major pricing restructure by redirecting focus on consumer willingness to pay instead of product cost; implemented a three-tiered pricing model which increased average sale 35% and margin 12%",
    ],
  },
  {
    title: "Full Stack Django Developer",
    company_name: "PineSphere Solution Pvt Ltd",
    icon: pinesphere,
    iconBg: "#E6DEDD",
    date: "June 2023 – October 2023",
    points: [
      "Developed and delivered the backend of a software application using Python, Django, and PostgreSQL, resulting in a 25% increase in user engagement. Ensured the successful project delivery by collaboratingwith cross-functional teams",
      "Led the first major effort to A/B test the company's e-commerce sales page and optimize it for customer acquisition; resulted in a 7.5%increase in conversions",
      "Led a team of three developers and managed the development life cycle of the application, resulting in an on-time delivery",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I develop tailored web and mobile applications using cutting-edge technologies, ensuring scalability, security, and long-term growth.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      " I prioritize seamless UI/UX, fast-loading applications, and SEO optimization to enhance user engagement and business success.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  // {
  //   testimonial:
  //     "From concept to deployment, I handle the entire development lifecycle while providing ongoing support and maintenance.",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
  {
    testimonial:
      " By implementing all these strategies, you can expect a significant boost in efficiency, user engagement, and profitability, driving 10x growth for your product.",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  // {
  //   name: "EV Charging Application",
  //   description:
  //     "A comprehensive EV charging platform enabling users to locate nearby charging stations, check real-time availability, book slots, and make seamless payments. Integrated with live tracking, smart navigation, and user-friendly UI for an optimized charging experience.(Live on play store - ion Hive) #Outdid unified working in thz project currently",
  //   tags: [
  //     {
  //       name: "Flutter",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "GetX",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "Node JS",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: ionHive_banner,
  //   source_code_link: "https://github.com/anishkumar-0502/ionHive_APP_PHASE_II.git",
  // },

  {
    name: "KG College Symposium",
    description:
      "An interactive web application designed for hosting and managing college symposiums, allowing students to register for events, access schedules, and receive real-time updates. Built with a responsive UI for a seamless user experience.(it is deployed in vercel - https://exotica2k23.vercel.app/ ) and traffic are managed through Google Search Console",
    tags: [
      {
        name: "HTML 5",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "SCSS",
        color: "pink-text-gradient",
      },
    ],
    image: Kg_Sym,
    source_code_link: "https://github.com/anishkumar-0502/Symphosium.git",
  },
  {
    name: "E-Commerce Platform",
    description:
      "A dynamic and scalable e-commerce website built with Django, featuring product catalog management, secure payment integration, and an intuitive shopping experience. Implements PostgreSQL for efficient data handling and Jinja templates for seamless UI rendering. This application offers you the seemless interface with quick  respose",
    tags: [
      {
        name: "Jinja Templates",
        color: "blue-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "green-text-gradient",
      },
      {
        name: "Django",
        color: "pink-text-gradient",
      },
    ],
    image: Ecom,
    source_code_link: "https://github.com/anishkumar-0502/EcommerceWebsite-using-Django-Bootstr-with-Payment-integration.git",
  },

];


export { services, technologies, experiences, testimonials, projects };
