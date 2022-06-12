import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
// #7939fe
const theme = createTheme({
  palette: {
    primary: {
      main: '#4F46E5',
    },
    secondary: {
      light: '#707070',
      main: '#d32f2f',
      dark: '#d32f2f',
      contrastText: '#ffffff',
    },
    background: {
      default: '#fafafa',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;