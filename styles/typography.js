import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '15px',
  baseLineHeight: 1.5,
  googleFonts: [
    {
      name: 'Oswald',
      styles: ['700'],
    },
    {
      name: 'Roboto',
      styles: ['100', '300', '400', '700'],
    },
    {
      name: 'Noto Sans KR',
      styles: ['300', '400'],
    },
    {
      name: 'Noto Sans SC',
      styles: ['100', '300'],
    },
  ],
  headerFontFamily: ['Oswald', 'sans-serif'],
  bodyFontFamily: ['Roboto', 'sans-serif'],
  // headerColor: "hsla(0,0%,0%,0.8)",
  // bodyColor: "hsla(0,0%,0%,0.7)",
  headerWeight: 700,
  bodyWeight: 400,
  boldWeight: 700,
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => ({
    'h1,h2,h3,h4,h5,h6': {
      margin: 0,
      lineHeight: 1.5,
    },
    a: {
      color: 'inherit',
      textDecoration: 'none',
    },
    // 'a:hover,a:active': {
    //   color: options.bodyColor,
    // },
    // p: {
    //   margin: 0,
    // },
  }),
});

export default typography;
