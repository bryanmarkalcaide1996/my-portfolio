import { v4 as uniqueID } from "uuid";
import weatherApp from "./img/projectImg/weatherApp.png";
import coffeeHub from "./img/projectImg/e-magazine.png";
import newsLetter from "./img/projectImg/newsletter page.png";
import ecommerceApp from "./img/projectImg/ecommerceApp.png";
import groceryBuddy from "./img/projectImg/groceryBuddy.png";
import pi from "./img/projectImg/pi.png";

import sun from "./img/icons/sun.png";
import moon from "./img/icons/moon.png";

import LinkedIn from "./img/icons/linkedin.png";
import email from "./img/icons/email.png";
import github from "./img/icons/github.png";

export const titles = [
  "HTML",
  "CSS",
  "JavaScript",
  "Node JS",
  "EJS Template",
  "React JS",
  "Mongo DB",
];

const productList = [
  {
    id: uniqueID(),
    type: "React JS",
    src: weatherApp,
    link: "https://polar-ridge-84218.herokuapp.com/",
    title: "React Weather App",
    description:
      "Find out what is the current temperature in your respective area.",
  },

  {
    id: uniqueID(),
    type: "React JS",
    src: pi,
    link: "https://pacific-taiga-68698.herokuapp.com/",
    title: "Phenomenal Innovator",
    description:
      "A functional agency business model website built using reactJS",
  },
  {
    id: uniqueID(),
    type: "React JS",
    src: groceryBuddy,
    link: "https://protected-citadel-60187.herokuapp.com/",
    title: "Grocery Buddy",
    description:
      "Standalone application built on react that serves as a list maker.",
  },
  {
    id: uniqueID(),
    type: "React JS",
    src: ecommerceApp,
    link: "https://amuse-chattels.netlify.app/",
    title: "Amuse Chattels Ecommerce App",
    description: "A furniture ecommerece app built using ReactJS",
  },
  {
    id: uniqueID(),
    type: "Node JS",
    src: coffeeHub,
    link: "http://mighty-taiga-40247.herokuapp.com/",
    title: "Coffee Hub E-magazine",
    description: "A simple blog website with newsletter API integration.",
  },
  {
    id: uniqueID(),
    type: "Node JS",
    src: newsLetter,
    link: "https://warm-journey-58763.herokuapp.com/",
    title: "Newsletter Page",
    description: "A node JS newsletter page with mailchimp API Integration",
  },
];

export const bma = [
  {
    id: uniqueID(),
    name: "Email",
    href: "bryanmarkalcaide0420@gmail.com",
    icon: email,
  },
  {
    id: uniqueID(),
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/bryan-mark-alcaide-0532141ab/",
    icon: LinkedIn,
  },
  {
    id: uniqueID(),
    name: "GitHub",
    href: "https://github.com/bryanmarkalcaide1996",
    icon: github,
  },
];

export const toggleIcons = { sun, moon };
export default productList;
