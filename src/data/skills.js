import ICON_DIC from "./icons"

import { RiCodeSSlashFill } from "react-icons/ri";
import { BsTextIndentLeft } from "react-icons/bs";
import { MdComputer } from "react-icons/md";

export const SKILLS = [
  {
    category: "Front-End / Web",
    icon: RiCodeSSlashFill,
    skills: [
      ICON_DIC.react,
      ICON_DIC.html5,
      ICON_DIC.css,
      ICON_DIC.styledComponents,
      ICON_DIC.js,
      ICON_DIC.firebase
    ]
  },
  {
    category: "General Purpose Languages",
    icon: BsTextIndentLeft,
    skills: [
      ICON_DIC.java,
      ICON_DIC.python
    ]
  },
  {
    category: "Other Technologies",
    icon: MdComputer,
    skills: [
      ICON_DIC.git,
      ICON_DIC.regex,
      ICON_DIC.bash,
      ICON_DIC.webpack,
      ICON_DIC.excel,
      ICON_DIC.photoshop
    ]
  }
]