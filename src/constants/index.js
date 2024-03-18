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
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "MERN Stack",
      icon: mobile,
    },
    {
      title: "JavaScript",
      icon: backend,
    },
    {
      title: "Java",
      icon: creator,
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
      name: "Redux",
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
  ];
  const testimonials= {

  }
  const experiences = [
    {
      title: "HTML, CSS , React js",
      company_name: "E-commerce Website",
      icon: starbucks,
      iconBg: "#383E56",
      date: "December 2023",
      points: [
        "Developing and maintaining E-Commerce application using React.js,HTML, Css (Bootstrap) and other technologies.",
        "Provide a user friendly interface with HTML, CSS(Bootstrap) and Reactjs and Used FAKE JSON API for fetching data through API",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback and Support to other Team Members.",
      ],
    },
    {
      title: "MongoDB, Expressjs , Nodejs, React.js",
      company_name: "Blog Website",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Feb 2024",
      points: [
        "Blog Post is Website based on MERN stack Technology, where users can post blogs with their separate accounts with full login credentials",
        "User can See other Users post on the feed and Also edit their own posted blog.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Uses a REACT JS as Frontend, EXPRESS JS and NODE JS as backend and MONGODB as DATABASE.",
      ],
    },
    {
      title: "Java, Servlet, Jsp, JDBC, Mysql",
      company_name: "Exam Helper",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Exam Helper, our innovative web application, offers a platform for sharing blogs, notes, and posts, where users can engage through likes and comments. Join our community to enhance your exam preparation experience",        
        "with the help of Servlet, JSP and JDBC",
        "using MySQL and Eclipse IDE",
      ],
    },
    {
      title: "Java (SpringBoot), Mysql, Angularjs",
      company_name: "Exam Portal",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Working on",
      points: [
        "Full Stack web app Exam portal with two Login credentials with Admin and Student saperate",
        "Using Angularjs as frontend and Java Springboot as backend technology.",
        "Mysql as DataBase to store the data related to the login details and also separate history of activities perform by user",
        "Currently Working...",
      ],
    },
  ];
  
  const projects = [
    {
      name: "E-commerce",
      description:
        "INDIEHUB is an e-commerce website offering a wide range of clothing and accessories. It enables users to shop for stylish attire and fashion items in a convenient online shopping platform.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Express",
          color: "green-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/Rishabh-exe/ecommerce-react",
    },
    {
      name: "TO DO List",
      description:
        "First project as begginner when i built this to do app",
      tags: [
        {
          name: "HtmlCss",
          color: "blue-text-gradient",
        },
        {
          name: "FirstProject",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://gihttps://github.com/Rishabh-exe/To.Do.Listthub.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };