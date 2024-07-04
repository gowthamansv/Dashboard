import { Box } from "@mui/material";
import Header from "../components/Header";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../theme";
import FAQ from '../components/FAQ';

const Faqdisplay = () => {
    const [theme, colorMode] = useMode();
  
    return (
        
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
            <CssBaseline/>
              <Box m="20px">
              <Header title="FAQ" subtitle="Frequently Asked Questions Page" />
      <Box height="75vh">
<FAQ/>
      </Box>
    </Box>
        </ThemeProvider>
      </ColorModeContext.Provider>
    );
};
export default Faqdisplay;