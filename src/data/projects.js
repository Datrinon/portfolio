import ICON_DIC from "./icons"

// pic imports
import RoadTrypper from "./photos/roadtrypper.jpg"
import Shopping from "./photos/shopping.jpg"
import Battleships from "./photos/battleships.png"
import Memory from "./photos/memory.jpg"
import CV from "./photos/cv.png"
import Weather from "./photos/weather.jpg"
import Bulletin from "./photos/bulletin.jpg"
import TodoList from "./photos/todolist.jpg"
import Restaurant from "./photos/restaurant.jpg"
import TicTacToe from "./photos/tictactoe.jpg"
import PixelPainter from "./photos/painter.jpg"
import Roshambo from "./photos/roshambo.jpg"

// logo imports
import RTLogo from "./photos/logos/roadtrypper-logo.png";
import MBLogo from "./photos/logos/mako-logo.png";
import BSLogo from "./photos/logos/battleship-logo.png";


export const FEATURED_PROJECTS = [
  {
    name: "Roadtrypper",
    desc: "An online travel journal application. Plan your trips here or record your memories with a live map. This project was completed over a 2 month duration (45 days).",
    icon: RTLogo,
    builtWith: [
      ICON_DIC.react,
      ICON_DIC.firebase,
      ICON_DIC.js
    ],
    finishDate: "Jan. 2022",
    photo: RoadTrypper,
    repo: "https://github.com/Datrinon/roadtrypper",
    demo: "https://roadtrypper.web.app/"
  },
  {
    name: "E-Commerce Shopping Cart",
    desc: "A mock-up of an electric bikes storefront with a working shopping cart. Uses React Router.",
    icon: MBLogo,
    builtWith: [
      ICON_DIC.react,
      ICON_DIC.js
    ],
    finishDate: "Nov. 2021",
    photo: Shopping,
    repo: "https://github.com/Datrinon/react-shopping-cart",
    demo: "https://datrinon.github.io/react-shopping-cart/"
  },
  {
    name: "Battleships",
    desc: "Play the classic game of battleships! Features a competent AI that does more than blindly guess.",
    icon: BSLogo,
    builtWith: [
      ICON_DIC.js,
      ICON_DIC.html5,
      ICON_DIC.css,
      ICON_DIC.webpack
    ],
    finishDate: "Oct. 2021",
    photo: Battleships,
    repo: "https://github.com/Datrinon/battleships",
    demo: "https://datrinon.github.io/battleships/"
  }
]

export const ODIN_PROJECTS = [
  {
    name: "Memory Cards",
    desc: "A game of memory cards that fetches data from a food API.",
    builtWith: [
      ICON_DIC.react
    ],
    finishDate: "Oct. 2021",
    photo: Memory,
    repo: "https://github.com/Datrinon/memorycards",
    demo: "https://datrinon.github.io/memorycards/"
  },
  {
    name: "Resume Maker",
    desc: "Generate a stylish resume quickly for an entry-level job.",
    builtWith: [
      ICON_DIC.react
    ],
    finishDate: "Oct. 2021",
    photo: CV,
    repo: "https://github.com/Datrinon/cv-maker",
    demo: "https://datrinon.github.io/cv-maker/"
  },
  {
    name: "Weather Widget",
    desc: "Evaluate weather conditions from any location using the OpenWeather API.",
    builtWith: [
      ICON_DIC.js,
      ICON_DIC.html5,
      ICON_DIC.css,
      ICON_DIC.webpack
    ],
    finishDate: "Sep. 2021",
    photo: Weather,
    repo: "https://github.com/Datrinon/weather-widget",
    demo: "https://datrinon.github.io/weather-widget/"
  },
  {
    name: "Bulletin Board",
    desc: "An app where you can place sticky notes. Saves on client browser's local storage.",
    builtWith: [
      ICON_DIC.js,
      ICON_DIC.html5,
      ICON_DIC.css,
    ],
    finishDate: "Jul. 2021",
    photo: Bulletin,
    repo: "https://github.com/Datrinon/BulletinBoard",
    demo: "https://datrinon.github.io/BulletinBoard/"
  },
  {
    name: "To-Do List",
    desc: "A basic to-do list that saves on the client browser's local storage.",
    builtWith: [
      ICON_DIC.js,
      ICON_DIC.html5,
      ICON_DIC.css,
      ICON_DIC.webpack
    ],
    finishDate: "Sep. 2021",
    photo: TodoList,
    repo: "https://github.com/Datrinon/TodoList",
    demo: "https://datrinon.github.io/TodoList/"
  },
  {
    name: "Ocean Kitchens Mockup",
    desc: "An informational website about a fictitious seafood restaurant.",
    builtWith: [
      ICON_DIC.js,
      ICON_DIC.html5,
      ICON_DIC.css,
      ICON_DIC.webpack
    ],
    finishDate: "Aug. 2021",
    photo: Restaurant,
    repo: "https://github.com/Datrinon/project-restaurant",
    demo: "https://datrinon.github.io/project-restaurant/"
  },
  {
    name: "Tic Tac Toe",
    desc: "Play tic-tac-toe against a CPU.",
    builtWith: [
      ICON_DIC.js,
      ICON_DIC.html5,
      ICON_DIC.css,
    ],
    finishDate: "Aug. 2021",
    photo: TicTacToe,
    repo: "https://github.com/Datrinon/tictactoe-odinproject",
    demo: "https://datrinon.github.io/tictactoe-odinproject/"
  },
  {
    name: "Pixel Painter",
    desc: "A simple app where you paint on a grid with a pixel brush.",
    builtWith: [
      ICON_DIC.js,
      ICON_DIC.html5,
      ICON_DIC.css,
    ],
    finishDate: "Jul. 2021",
    photo: PixelPainter,
    repo: "https://github.com/Datrinon/PixelPainter",
    demo: "https://datrinon.github.io/PixelPainter/"
  },
  {
    name: "Rock-Paper-Scissors",
    desc: "Play Rock Paper Scissors against a CPU.",
    builtWith: [
      ICON_DIC.js,
      ICON_DIC.html5,
      ICON_DIC.css,
    ],
    finishDate: "Jul. 2021",
    photo: Roshambo,
    repo: "https://github.com/Datrinon/roshambo",
    demo: "https://datrinon.github.io/roshambo/"
  }
]

/**
 * School projects (optional, for now, keeping in mind mvp)
 * Data mining project
 * Systems analysis project
 * Android app project
 * Club sticker project
 * Emaar malls project
 * Tableau project
 * Business sim project
 * Emaar Malls case study project
 */