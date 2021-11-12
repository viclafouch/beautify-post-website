import { createTheme } from '@mui/material'

const theme = createTheme({
  typography: {
    fontFamily: ['Inter', 'sans-serif'].join(','),
    h2: {
      fontWeight: 700
    }
  },
  palette: {
    primary: {
      main: '#0a66c2'
    },
    secondary: {
      main: '#f7f9fd'
    }
  }
})

export default theme
