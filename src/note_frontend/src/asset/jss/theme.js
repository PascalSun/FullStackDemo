const colors = {
  highlight: "#EF7643",
  primary: {
    light: "#2d445d",
    main: "#ee750a",
    dark: "#00000d",
    contrastText: "#fafafa",
  },
  secondary: {
    light: "#5887f0",
    main: "#ee750a",
    dark: "#00338c",
    contrastText: "#fafafa",
  },
  error: {
    light: "#ed2024",
    main: "#f44336",
    dark: "#d32f2f",
    contrastText: "#fff",
  },
  warning: {
    main: "#ff9800",
    // dark: "#ff9d23"
  },
  grey: {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#eeeeee",
    300: "#e0e0e0",
    400: "#bdbdbd",
    500: "#9e9e9e",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
    A100: "#d5d5d5",
    A200: "#aaaaaa",
    A400: "#303030",
    A700: "#616161",
  },
}

const theme = {
  overrides: {
    MuiPickersToolbar: {
      toolbar: {
        backgroundColor: colors.secondary.main,
      },
    },
    MuiPickersDay: {
      daySelected: {
        backgroundColor: colors.secondary.main,
        "&:hover": {
          backgroundColor: colors.secondary.dark,
        },
      },
    },

    MuiTooltip: {
      tooltip: {
        fontSize: 12,
      },
    },
    MuiCollapse: {
      entered: {
        height: "auto",
        overflow: "visible",
      },
    },
  },
  palette: {
    ...colors,
  },
  typography: {
    fontFamily: '"Open Sans", "Helvetica", "Arial", sans-serif',
    fontSize: 14,
    h1: {
      fontFamily: '"Montserrat", "Helvetica", "Arial", sans-serif',
      fontSize: "2.125rem",
      fontWeight: "400",
    },
    h2: {
      fontFamily: '"Montserrat", "Helvetica", "Arial", sans-serif',
      fontSize: "1rem",
      fontWeight: "400",
    },
    h3: {
      fontFamily: '"Montserrat", "Helvetica", "Arial", sans-serif',
      fontSize: "1.3rem",
      fontWeight: "500",
    },
    h4: {
      fontFamily: '"Montserrat", "Helvetica", "Arial", sans-serif',
      fontSize: "1rem",
    },
    h5: {
      fontFamily: '"Montserrat", "Helvetica", "Arial", sans-serif',
    },
    h6: {
      fontFamily: '"Montserrat", "Helvetica", "Arial", sans-serif',
    },
    caption: {
      color: colors.grey[700],
    },
    body1: {
      fontSize: "1rem",
    },
    body2: {
      fontSize: "0.9rem",
    },
    button: {
      fontSize: "0.875rem",
      textTransform: "uppercase",
      fontWeight: 500,
      fontFamily: '"Open Sans", "Helvetica", "Arial", sans-serif',
    },
  },
}

const drawerWidth = 260

const transition = {
  transition: "all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)",
}

const container = {
  paddingRight: "15px",
  paddingLeft: "15px",
  marginRight: "auto",
  marginLeft: "auto",
}

const boxShadow = {
  boxShadow:
    "0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
}

const card = {
  display: "inline-block",
  position: "relative",
  width: "100%",
  margin: "25px 0",
  boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.14)",
  borderRadius: "3px",
  color: "rgba(0, 0, 0, 0.87)",
  background: "#fff",
  overflow: "visible",
}

const cardHeader = {
  margin: "-20px 15px 0",
  borderRadius: "3px",
  padding: "15px",
  overflow: "hidden",
}

const cardActions = {
  margin: "0 20px 10px",
  paddingTop: "10px",
  borderTop: "1px solid #eeeeee",
  height: "auto",
}

const orangeCardHeader = {
  background: "linear-gradient(60deg, #ffa726, #fb8c00)",
}
const redCardHeader = {
  background: "linear-gradient(60deg, #ef5350, #e53935)",
}
const blueCardHeader = {
  background: `linear-gradient(60deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
}
const defaultBoxShadow = {
  border: "0",
  borderRadius: "3px",
  boxShadow:
    "0 10px 20px -12px rgba(0, 0, 0, 0.42), 0 3px 20px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
  padding: "10px 0",
  transition: "all 150ms ease 0s",
}

const primaryBoxShadow = {
  boxShadow:
    "0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2)",
}
const infoBoxShadow = {
  boxShadow:
    "0 12px 20px -10px rgba(0, 188, 212, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 188, 212, 0.2)",
}
const successBoxShadow = {
  boxShadow:
    "0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2)",
}
const warningBoxShadow = {
  boxShadow:
    "0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2)",
}
const dangerBoxShadow = {
  boxShadow:
    "0 12px 20px -10px rgba(244, 67, 54, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(244, 67, 54, 0.2)",
}

export {
  //variables
  theme,
  colors,
  drawerWidth,
  transition,
  container,
  boxShadow,
  card,
  primaryBoxShadow,
  infoBoxShadow,
  successBoxShadow,
  warningBoxShadow,
  dangerBoxShadow,
  orangeCardHeader,
  redCardHeader,
  blueCardHeader,
  cardActions,
  cardHeader,
  defaultBoxShadow,
}
