import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';

import { Routes } from './src/routes';
import theme from './src/global/styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="auto" />
      <Routes />
    </ThemeProvider>
  );
}

export default App;