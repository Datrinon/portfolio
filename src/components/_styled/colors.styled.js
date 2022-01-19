export const standard = {
  STONE: "rgb(34,34,34)",
  WHITE: "rgb(255,255,255)",
  BLACK: "rgb(0,0,0)",
  ORANGE: "rgb(255, 128, 0)"
}

export const palette = {
  celadonBlue: "hsl(198, 61%, 37%)",
  royalBlueDark: "hsl(221, 66%, 24%)",
  pastelPink: "hsl(359,51%,74%)",
  sunrayGold: "hsl(36, 87%, 67%)",
  marble: "hsl(55, 35%, 93%)",
  smoke: "#938572",
  offWhite: "#f9f9f9"
}

export const translucents = {
  light: "rgba(255 255 255 / 0.85)",
  dark: "rgba(34 34 34 / 0.85)"
}

export const LIGHT_THEME = {
  BG: palette.marble,
  BGAlt: palette.offWhite,
  FG: standard.BLACK,
  translucent: translucents.light,
};

export const DARK_THEME = {
  BG: palette.royalBlueDark,
  BGAlt: palette.celadonBlue,
  FG: palette.marble,
  translucent: translucents.dark,
};