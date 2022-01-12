import { FaHtml5, FaReact } from "react-icons/fa"
import { DiCss3, DiJava, DiPython, DiGit } from "react-icons/di"
import { IoLogoJavascript } from "react-icons/io"
import { SiWebpack, SiFirebase, SiAdobephotoshop, SiJavascript } from "react-icons/si"
import { VscTerminalBash, VscRegex } from "react-icons/vsc"
import { AiFillFileExcel } from "react-icons/ai"


const ICON_DIC = {
  html5: {
    name: "HTML",
    icon: FaHtml5,
    color: "rgb(216, 73, 36)"
  },
  react: {
    name: "React.js",
    icon: FaReact,
    color: "rgb(92, 207, 238)"
  },
  css: {
    name: "CSS",
    icon: DiCss3,
    color: "rgb(0,102,182)"
  },
  java: {
    name: "Java",
    icon: DiJava,
    color: "rgb(255,0,0)"
  },
  python: {
    name: "Python",
    icon: DiPython,
    color: "rgb(49,116,171)"
  },
  git: {
    name: "Git",
    icon: DiGit,
    color: "rgb(228,76,48)"
  },
  js: {
    name: "JavaScript",
    icon: SiJavascript,
    color: "rgb(238,216,17)"
  },
  webpack: {
    name: "Webpack",
    icon: SiWebpack,
    color: "rgb(27,114,182)"
  },
  firebase: {
    name: "Firebase",
    icon: SiFirebase,
    color: "rgb(233,125,15)"
  },
  bash: {
    name: "BASH / Unix",
    icon: VscTerminalBash,
    color: "rgb(45,9,32)"
  },
  regex: {
    name: "Regex",
    icon: VscRegex,
    color: "rgb(29, 165, 230)"
  },
  excel: {
    name: "Excel",
    icon: AiFillFileExcel,
    color: "rgb(25,166, 88)"
  },
  photoshop: {
    name: "Photoshop",
    icon: SiAdobephotoshop,
    color: "rgb(42, 51, 110)"
  }
}

export default ICON_DIC;