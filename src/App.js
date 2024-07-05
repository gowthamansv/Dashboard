// App.js
import './App.css';
import Sidebar from './display/Sidebar';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import {Box} from '@mui/material'
import Pie from './pages/Pie';
import Line from './pages/Line';
import Bar from './pages/Bar';
import Faqdisplay from './pages/FaqDisplay';
import InvoicesDisplay from './pages/InvoiceDisplay';
import TeamDisplay from './pages/TeamDisplay';
import Register from './pages/Register';
import ContactDisplay from './pages/ContactDisplay';
import Calendar from './pages/Calendar';

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
              <Route path='/pie' element={<Pie />} />
              <Route path='/line' element={<Line/>}/>
              <Route path='/bar' element={<Bar/>}/>
              <Route path='/faq' element={<Faqdisplay/>}/>
              <Route path='/invoice' element={<InvoicesDisplay/>}/>
              <Route path='/team' element={<TeamDisplay/>}/>
              <Route path='/register' element={<Register/>}/>
              <Route path='/contact' element={<ContactDisplay/>}/>
              <Route path='/calendar' element={<Calendar/>}/>
              {/* Add more routes as needed */}
            </Routes>
          </Box>
        </BrowserRouter>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
