import { FaHtml5, FaReact } from "react-icons/fa"
import { DiCss3, DiJava, DiPython, DiGit } from "react-icons/di"
import { IoLogoJavascript } from "react-icons/io"
import { SiWebpack, SiFirebase } from "react-icons/si"
import { VscTerminalBash, VscRegex } from "react-icons/vsc"
import { AiFillFileExcel } from "react-icons/ai"

export const SKILLS = [
  {
    category: "Front-End / Web",
    skills: [
      {
        name: "React.js",
        icon: FaReact
      },
      {
        name: "HTML",
        icon: FaHtml5
      },
      {
        name: "CSS",
        icon: DiCss3
      },
      {
        name: "JavaScript",
        icon: IoLogoJavascript
      },
      {
        name: "Firebase",
        icon: SiFirebase
      }
    ]
  },
  {
    category: "General Purpose Languages",
    skills: [
      {
        name: "Java",
        icon: DiJava
      },
      {
        name: "Python",
        icon: DiPython
      }
    ]
  },
  {
    category: "Other Technologies",
    skills: [
      {
        name: "Regex",
        icon: VscRegex
      },
      {
        name: "BASH / Unix",
        icon: VscTerminalBash
      },
      {
        name: "Git",
        icon: DiGit
      },
      {
        name: "Webpack",
        icon: SiWebpack
      },
      {
        name: "Excel",
        icon: AiFillFileExcel
      }
    ]
  }
]