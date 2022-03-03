import { v4 as uniqueID } from "uuid";
import weatherApp from "./img/projectImg/weatherApp.png";
import coffeeHub from "./img/projectImg/e-magazine.png";
import newsLetter from "./img/projectImg/newsletter page.png";
import profilingApp from "./img/projectImg/profilingApp.png";
import groceryBuddy from "./img/projectImg/groceryBuddy.png";

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
    link: "https://warm-journey-58763.herokuapp.com/",
    title: "React Weather App",
    description:
      "Find out what is the current temperature in your respective area.",
  },
  // {
  //   id: uniqueID(),
  //   type: "React JS",
  //   src: img,
  // link: "https://warm-journey-58763.herokuapp.com/",
  //   title: "Birthday Reminder",
  //   description:
  //     "A small component with delete function that renders list of data.",
  // },
  // {
  //   id: uniqueID(),
  //   type: "React JS",
  //   src: img,
  // link: "https://warm-journey-58763.herokuapp.com/",
  //   title: "Tours",
  //   description:
  //     "A basic  app that showcases the functionality of react component.",
  // },
  // {
  //   type: "React JS",
  //   id: uniqueID(),
  //   src: img,
  // link: "https://warm-journey-58763.herokuapp.com/",
  //   title: "User Reviews",
  //   description: "A component that emulates a review section of a website.",
  // },
  // {
  //   id: uniqueID(),
  //   type: "React JS",
  //   src: img,
  // link: "https://warm-journey-58763.herokuapp.com/",
  //   title: "Menu Filter",
  //   description:
  //     "A component that renders merchandise list with filter functionality.",
  // },

  {
    id: uniqueID(),
    type: "React JS",
    src: weatherApp,
    link: "https://warm-journey-58763.herokuapp.com/",
    title: "Image Carousel",
    description:
      "A component is used for showcasing featured elements of website like photos, promos, etc...",
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
    type: "Node JS",
    src: profilingApp,
    link: "https://blooming-falls-80391.herokuapp.com/",
    title: "Profiling App",
    description:
      "Fully functional node JS application that collects data and saves it in a database with level 6 encryption.",
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
