import imgHTML from "../public/static/img/stack/html.svg";
import imgCSS from "../public/static/img/stack/css.svg";
import imgJS from "../public/static/img/stack/js.svg";
import imgNode from "../public/static/img/stack/node.svg";
import imgStyled from "../public/static/img/stack/styled.svg";
import imgReact from "../public/static/img/stack/react.svg";
import { FaGithub, FaPython } from "react-icons/fa";
import {
  SiDjango,
  SiExpress,
  SiJest,
  SiPostgresql,
  SiTypescript,
} from "react-icons/si";
import { FaDocker } from "react-icons/fa";

export const stackData = [
  {
    title: "HTML",
    img: imgHTML,
  },
  {
    title: "CSS",
    img: imgCSS,
  },
  {
    title: "JS",
    img: imgJS,
  },
  {
    title: "Node JS",
    img: imgNode,
  },
  {
    title: "Styled Components",
    img: imgStyled,
  },
  {
    title: "React",
    img: imgReact,
  },
  { title: "Jest", img: SiJest },
  { title: "TypeScript", img: SiTypescript },
  { title: "Docker", img: FaDocker },
  { title: "Django", img: SiDjango },
  { title: "Git", img: FaGithub },
  { title: "Express JS", img: SiExpress },
  { title: "Python", img: FaPython },
  { title: "PostgreSQL", img: SiPostgresql },
];
