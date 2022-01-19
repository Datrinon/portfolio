import { MdColorize } from "react-icons/md";

export const standard = {
  STONE: "rgb(34,34,34)",
  WHITE: "rgb(255,255,255)",
  BLACK: "rgb(0,0,0)",
  ORANGE: "rgb(255, 128, 0)"
}

export const palette = {
  celadonBlue: "hsl(198, 61%, 37%)",
  royalBlueDark: "hsl(221, 66%, 15%)",
  nightBlue: "hsl(221deg 17% 10%)",
  pastelPink: "hsl(359,51%,74%)",
  sunrayGold: "hsl(36, 87%, 67%)",
  marble: "hsl(55, 35%, 93%)",
  champagne: "hsl(44,57%, 80%)",
  smoke: "#938572",
  darkGrey: "hsl(198deg 15% 19%)",
  offWhite: "#f9f9f9"
}

export const translucents = {
  light: "rgba(255 255 255 / 0.85)",
  dark: "rgba(34 34 34 / 0.85)"
}

export const LIGHT_THEME = {
  BG: palette.marble,
  BG2: palette.offWhite,
  BG3: standard.WHITE,
  FG: standard.BLACK,
  FG2: standard.darkGrey,
  translucent: translucents.light,
  decal: palette.pastelPink,
  decal2: palette.royalBlueDark,
};

export const DARK_THEME = {
  BG: palette.nightBlue,
  BG2: palette.royalBlueDark,
  BG3: palette.darkGrey,
  FG: palette.champagne,
  FG2: palette.smoke,
  translucent: translucents.dark,
  decal: palette.celadonBlue,
  decal2: palette.pastelPink
};