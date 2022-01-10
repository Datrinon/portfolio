import { FaHtml5, FaReact } from "react-icons/fa"
import { DiCss3, DiJava, DiPython, DiGit } from "react-icons/di"
import { IoLogoJavascript } from "react-icons/io"
import { SiWebpack, SiFirebase, SiAdobephotoshop } from "react-icons/si"
import { VscTerminalBash, VscRegex } from "react-icons/vsc"
import { AiFillFileExcel } from "react-icons/ai"


const ICON_DIC = {
  html5: {
    name: "HTML",
    icon: FaHtml5,
    color: "rgb(255,0,0)"
  },
  react: {
    name: "React.js",
    icon: FaReact,
    color: "rgb(255,0,0)"
  },
  css: {
    name: "CSS",
    icon: DiCss3,
    color: "rgb(255,0,0)"
  },
  java: {
    name: "Java",
    icon: DiJava,
    color: "rgb(255,0,0)"
  },
  python: {
    name: "Python",
    icon: DiPython,
    color: "rgb(255,0,0)"
  },
  git: {
    name: "Git",
    icon: DiGit,
    color: "rgb(255,0,0)"
  },
  js: {
    name: "JavaScript",
    icon: IoLogoJavascript,
    color: "rgb(255,0,0)"
  },
  webpack: {
    name: "Webpack",
    icon: SiWebpack,
    color: "rgb(255,0,0)"
  },
  firebase: {
    name: "Firebase",
    icon: SiFirebase,
    color: "rgb(255,0,0)"
  },
  bash: {
    name: "BASH / Unix",
    icon: VscTerminalBash,
    color: "rgb(255,0,0)"
  },
  regex: {
    name: "Regex",
    icon: VscRegex,
    color: "rgb(255,0,0)"
  },
  excel: {
    name: "Excel",
    icon: AiFillFileExcel,
    color: "rgb(255,0,0)"
  },
  photoshop: {
    name: "Photoshop",
    icon: SiAdobephotoshop,
    color: "rgb(255,0,0)"
  }
}

export default ICON_DIC;