import "@fontsource/cairo";
import "@fontsource/lato";

const sizes = {
  xs: 320,
  sm: 480,
  md: 576,
  lg: 768,
  xl: 992,
  xxl: 1200,
  xxxl: 1400
} as const;

export const Theme = {
  breakpoints: {
    xs: `${sizes.xs}px`,
    sm: `${sizes.sm}px`,
    md: `${sizes.md}px`,
    lg: `${sizes.lg}px`,
    xl: `${sizes.xl}px`,
    xxl: `${sizes.xxl}px`,
    xxxl: `${sizes.xxxl}px`
  },
  fontSizes: {
    headings: {
      heading1: "4rem",
      heading2: "3.6rem",
      heading3: "3.2rem",
      heading4: "2.8rem",
      heading5: "2.4rem",
      heading6: "2rem",
      heading7: "1.6rem"
    },
    body: {
      bodyLarge: "2rem",
      bodyMedium: "1.8rem",
      bodyNormal: "1.6rem",
      bodySmall: "1.4rem"
    },
    label: {
      labelExtraSmall: "0.8rem",
      labelSmall: "1.05rem",
      labelLarge: "1.25rem"
    }
  },
  fontWeight: {
    regular: 400,
    semibold: 600,
    bold: 700
  },
  fontFamilies: {
    primary: "'Lato', sans-serif",
    secondary: "'Cairo', sans-serif"
  },
  borderRadius: {
    xs: "8px",
    sm: "16px",
    md: "24px",
    lg: "32px",
    xl: "40px",
    xxl: "48px",
    circle: "50%"
  },
  spacings: {
    xs: "8px",
    sm: "16px",
    md: "24px",
    lg: "32px",
    xl: "40px",
    xxl: "48px"
  },
  zIndex: {
    zMinus: "-1",
    z0: "0",
    z10: "10",
    z20: "20",
    z30: "30",
    z40: "40",
    z50: "50",
    zAuto: "auto"
  },
  colors: {
    gray: {
      text: "#212121",
      medium: "#5C6278",
      light: "#F5F5F5",
      border: "#DEDCEF",
      plus: "#EFEFEF"
    },
    yellow: {
      rating: "#FFC107"
    },
    green: {
      primary: "#007E85",
      disabled: "#A3C7C9"
    },
    blue: {
      primary: "#34B7F1",
      light: "#949DBB",
      dark: "#BBDEFB"
    },
    white: {
      primary: "#FFFFFF",
      bg: "#F4F7FE",
      border: "#DEDCEF"
    },
    black: {
      primary: "#1F2331"
    },
    gradients: {
      purpleToPink: "linear-gradient(90deg, #9C27B0 0%, #FF0099 100%)"
    },
    alerts: {
      error: "#F44336",
      warning: "#FFC107",
      success: "#4CAF50",
      info: "#2196F3"
    },
    overlays: {
      lightOverlay: "rgba(255, 255, 255, 0.8)",
      darkOverlay: "rgba(0, 0, 0, 0.5)"
    },
    shadow: {
      shadow1: "#ededed",
      shadow2: "#a1a1a4"
    }
  }
} as const;
