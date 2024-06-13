export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experiences", link: "#experiences" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently trying to develop web development skills.",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "IT Recruitment App",
    des: "The IT Recruitment App is a web application built using ReactJS, React Router DOM, React Redux, Firebase Realtime Database, and Ant Design.",
    img: "/s2.png",
    iconLists: [
      "/re.svg",
      "/ant.svg",
      "/firebase.svg",
      "/redux.svg",
      "/tail.svg",
    ],
    link: "https://tinyurl.com/ITRecruit",
  },
  {
    id: 2,
    title: "Ecommerece - Fullstack App",
    des: "Selling smartphones,tablets, and ipads web applications with Admin Panel",
    img: "/s1.png",
    iconLists: ["/php.svg", "/js.svg", "/bs.svg", "/api.svg", "/xampp.svg"],
    link: "https://ecomtdtu.000webhostapp.com/public/",
  },
  {
    id: 3,
    title: "Numerology",
    des: "A numerology calculator website with smooth animations",
    img: "/num.png",
    iconLists: ["/re.svg", "/ant.svg", "/js.svg", , "/redux.svg"],
    link: "https://tinyurl.com/numerologyVy",
  },
  {
    id: 4,
    title: "Promptopia",
    des: "First NextJs web app with Next-Auth, Google Authenticator and CRUD API .",
    img: "/prompt.png",
    iconLists: ["/next.svg", "/tail.svg", "/js.svg", "/react.svg"],
    link: "https://tinyurl.com/sharePrompt",
  },
];

export const testimonials = [
  {
    quote: "Leader in Web Programming and Applications Subject ",
    name: "TonDucThang University",
    title: "TDTU 2023-2024 academic year",
  },
  {
    quote: "Leader in Introduction to Information Security Subject",
    name: "TonDucThang University",
    title: "TDTU 2023-2024 academic year",
  },
  {
    quote:
      "Playing an important role in Requirements Analysis and Design Subject",
    name: "TonDucThang University",
    title: "TDTU 2023-2024 academic year",
  },
  {
    quote: "Leader in Software Engineering Subject",
    name: "TonDucThang University",
    title: "TDTU 2023-2024 academic year",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Working with ReactJS",
    desc: "Using React to build user interfaces for web applications.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Working with NextJS",
    desc: "Developed a SEO web app using NextJS, React, and TailwindCSS. ",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Familiar with Php Web App",
    desc: "Developed a web app using PHP, Bootstrap, and XAMPP.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Learning MERN Stack",
    desc: "Currently learning MERN stack to build fullstack web applications",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const people = [
  {
    id: 1,
    name: "Facebook",
    designation: "anh.n.huynh.1",
    image: "/face.svg",
    link: "https://www.facebook.com/anh.n.huynh.1/",
  },
  {
    id: 2,
    name: "GitHub",
    designation: "Vyzz1",
    image: "/github.svg",
    link: "https://github.com/Vyzz1",
  },
  {
    id: 3,
    name: "Email",
    designation: "vykhanghuynh@gmail.com",
    image: "/gmail.jpg",
    link: "mailto:vykhanghuynh@gmail.com",
  },
  {
    id: 4,
    name: "Zalo",
    designation: "Vỹ Huỳnh",
    image: "/za.png",
  },
];
