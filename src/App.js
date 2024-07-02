import './App.css';
import Sidebar from './display/Sidebar';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";

function App() {

  const [theme, colorMode] = useMode();
  
  return (    <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
  <Sidebar />
  </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
