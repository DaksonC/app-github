import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';

import { Routes } from './src/routes';
import theme from './src/global/styles/theme';
import { Search } from './src/screens/Search';
import { Repos } from './src/screens/Repos';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="auto" />
      <Routes />
      {/* <Search /> */}
      {/* <Repos /> */}
    </ThemeProvider>
  );
}

export default App;