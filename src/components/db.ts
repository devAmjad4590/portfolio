import reactIcon from "../assets/react-color.svg";
import javascriptIcon from "../assets/javascript-color.svg";
import cplusIcon from "../assets/cplusplus-color.svg";
import javaIcon from "../assets/java.svg";
import pythonIcon from "../assets/python-color.svg";
import vueIcon from "../assets/vuedotjs-color.svg";
import htmlIcon from "../assets/html5-color.svg";
import cssIcon from "../assets/css3-color.svg";
import tailwindIcon from "../assets/tailwindcss-color.svg";
import expressIcon from "../assets/express-color.svg";
import mongodbIcon from "../assets/mongodb-color.svg";
import mysqlIcon from "../assets/mysql-color.svg";
import gitIcon from "../assets/git-color.svg";
import linkedInIcon from "../assets/linkedin.svg";
import githubIcon from "../assets/github.svg";
import gmailIcon from "../assets/gmail.svg";    

export const description = {
  msg1: `I’m a Software Engineering student at MMU, Malaysia, with a passion
          for building systems and solving problems through innovative
          solutions. I specialize in Web Development, and enjoy exploring areas
          like Machine Learning and Computer Vision.`,
  msg2: `I have experience in various programming languages and frameworks,
            including JavaScript, Python, and React. I am always eager to learn
            new technologies and take on challenging projects.`,
};

interface iconInterface {
  name: string;
  icon: string;
  link?: string;
}

export const contact: iconInterface[] = [
    {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/amjadalrasheed/",
        icon: linkedInIcon
    },
    {
        name: "GitHub",
        link: "https://github.com/devAmjad4590",
        icon: githubIcon
    },
    {
        name: "Gmail",
        link: "mailto:developeramjad4590@gmail.com",
        icon: gmailIcon
    }
]

export const techStack: iconInterface[] = [
  {
    name: "JavaScript",
    icon: javascriptIcon,
  },
  {
    name: "Python",
    icon: pythonIcon,
  },
  {
    name: "Java",
    icon: javaIcon,
  },
  {
    name: "C++",
    icon: cplusIcon,
  },
  {
    name: "Express",
    icon: expressIcon,
  },
  {
    name: "React",
    icon: reactIcon,
  },
  {
    name: "Vue",
    icon: vueIcon,
  },
  {
    name: "HTML",
    icon: htmlIcon,
  },
  {
    name: "CSS",
    icon: cssIcon,
  },
  {
    name: "Tailwind",
    icon: tailwindIcon,
  },
  {
    name: "MongoDB",
    icon: mongodbIcon,
  },
  {
    name: "MySQL",
    icon: mysqlIcon,
  },
  {
    name: "Git",
    icon: gitIcon,
  },
];
