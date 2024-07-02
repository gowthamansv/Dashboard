// App.js
import './App.css';
import Sidebar from './display/Sidebar';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import PieChart from './pages/PieChart'
import {Box} from '@mui/material'

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Sidebar />
          <Box component="main" sx={{ flexGrow: 1, p: 3, pt: 10 }}>
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/pie' element={<PieChart />} />
              {/* Add more routes as needed */}
            </Routes>
          </Box>
        </BrowserRouter>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
