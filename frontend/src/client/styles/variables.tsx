const allColors = {
  yellow: '#FBBF24',
  white: '#FFFFFF',
  black: '#231F20',
  black_light:'#96A7AF',
  red: '#F87171',
  green: '#34D399',
  blue: '#4F46E5',
  purple: '#5E5E5E',
  purple_medium: '#818CF8',
  purple_light: '#E0E7FF',
  grey: '#efefef',
  grey_light: '#f7f7f7',
  dark_grey: '#2A3C44',
  medium_grey: '#475E69'
};

export const baseTheme = {
  allColors: {
    yellow: '#FBBF24',
    white: '#FFFFFF',
    black: '#231F20',
    red: '#F87171',
    green: '#34D399',
    blue: '#4F46E5',
    purple: '#5E5E5E',
    purple_medium: '#818CF8',
    purple_light: '#E0E7FF',
    grey: '#efefef',
    grey_light: '#f7f7f7',
  },

  colors: {
    bg: allColors.purple_medium,
    bgBtn: allColors.blue,
    bgHeader: allColors.green,
    bgBtnHover: allColors.purple_light,
    bgModal: allColors.white,
    accentFont:allColors.black,
    font: allColors.black,
    fontBtn: allColors.white,
    fontBtnHover: allColors.purple,
    fontLink: allColors.blue,
    danger: allColors.red,
    inputBorder: allColors.purple,
    bgTable: allColors.white,
  },

  fonts: {
    font_family: 'Montserrat, sans-serif',
    semi_bold: '600',
    black: '900',
  },

  borderRadius: '6px',
  skillsStartAnim: '0.3s',
} as const;



export const darkTheme = {
  allColors: {
    yellow: '#FBBF24',
    white: '#FFFFFF',
    black: '#231F20',
    red: '#F87171',
    green: '#34D399',
    blue: '#4F46E5',
    purple: '#5E5E5E',
    purple_medium: '#818CF8',
    purple_light: '#E0E7FF',
    grey: '#efefef',
    grey_light: '#f7f7f7',
  },

  colors: {
    bg: allColors.dark_grey,
    bgBtn: allColors.blue,
    bgHeader: allColors.medium_grey,
    bgBtnHover: allColors.purple_light,
    bgModal: allColors.medium_grey,
    accentFont:allColors.white,
    font: allColors.black_light,
    fontBtn: allColors.white,
    fontBtnHover: allColors.purple,
    fontLink: allColors.blue,
    danger: allColors.red,
    inputBorder: allColors.purple,
    bgTable: allColors.medium_grey,
  },

  fonts: {
    font_family: 'Montserrat, sans-serif',
    semi_bold: '600',
    black: '900',
  },

  borderRadius: '6px',
  skillsStartAnim: '0.3s',
} as const;
