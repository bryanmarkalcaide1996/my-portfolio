import { v4 as uniqueID } from "uuid";
import weatherApp from "./img/projectImg/weatherApp.png";
import coffeeHub from "./img/projectImg/e-magazine.png";
import newsLetter from "./img/projectImg/newsletter page.png";
import profilingApp from "./img/projectImg/profilingApp.png";

const productList = [
  {
    id: uniqueID(),
    type: "React JS",
    src: weatherApp,
    title: "React Weather App",
    description:
      "Find out what is the current temperature in your respective area.",
  },
  // {
  //   id: uniqueID(),
  //   type: "React JS",
  //   src: img,
  //   title: "Birthday Reminder",
  //   description:
  //     "A small component with delete function that renders list of data.",
  // },
  // {
  //   id: uniqueID(),
  //   type: "React JS",
  //   src: img,
  //   title: "Tours",
  //   description:
  //     "A basic  app that showcases the functionality of react component.",
  // },
  // {
  //   type: "React JS",
  //   id: uniqueID(),
  //   src: img,
  //   title: "User Reviews",
  //   description: "A component that emulates a review section of a website.",
  // },
  // {
  //   id: uniqueID(),
  //   type: "React JS",
  //   src: img,
  //   title: "Menu Filter",
  //   description:
  //     "A component that renders merchandise list with filter functionality.",
  // },

  {
    id: uniqueID(),
    type: "React JS",
    src: weatherApp,
    title: "Image Carousel",
    description:
      "A component is used for showcasing featured elements of website like photos, promos, etc...",
  },
  {
    id: uniqueID(),
    type: "React JS",
    src: weatherApp,
    title: "Grocery Buddy",
    description:
      "Standalone application built on react that serves as a list maker.",
  },
  {
    id: uniqueID(),
    type: "Node JS",
    src: profilingApp,
    title: "Coffee Hub E-magazine",
    description: "A simple blog website with newsletter API integration.",
  },
  {
    id: uniqueID(),
    type: "Node JS",
    src: coffeeHub,
    title: "Coffee Hub E-magazine",
    description: "A simple blog website with newsletter API integration.",
  },
  {
    id: uniqueID(),
    type: "Node JS",
    src: newsLetter,
    title: "Newsletter Page",
    description: "A node JS newsletter page with mailchimp API Integration",
  },
];
export default productList;
