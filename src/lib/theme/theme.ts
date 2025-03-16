import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#09122C",
      light: "#BE3144",
    },
    secondary: {
      main: "#872341",
      light: "#E17564"
    }
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained"
      },
      styleOverrides: {
        root: {
          padding: '.5rem 3rem'
        }
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: "lg"
      }
    },
  },
  typography: {
    body1: {
      color: '#F6DED8',
      margin: 0
    }
  }
})

theme.shadows[1] = '0 5px 22px lightgray'

export default theme