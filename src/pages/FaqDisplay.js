import { Box } from "@mui/material";
import Header from "../components/Header";
import { useTheme } from "@mui/material";
import { tokens } from "../theme";
import FAQ from '../components/FAQ';

const Faqdisplay = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
    return (
        
      <Box m="10px" sx={{ bgcolor: colors.box }}>
              <Header title="FAQ" subtitle="Frequently Asked Questions Page" />
      <Box height="75vh">
<FAQ/>
      </Box>
    </Box>
    );
};
export default Faqdisplay;