import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import './assets/styles/global.scss';
import Routes from './routes';

const theme =  createMuiTheme({
  palette: {
      type: 'dark',
      primary: {
        light: '#f2e928',
        main: '#d9a019',
        dark: '#cd8d00',
        contrastText: '#fff',
      },
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes/>
    </ThemeProvider>
  );
}

export default App;
