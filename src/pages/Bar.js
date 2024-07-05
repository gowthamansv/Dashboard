import { Box } from "@mui/material";
import Header from "../components/Header";
import BarChart from "../chart/BarChart";
import { useTheme } from "@mui/material";
import { tokens } from "../theme.js";
import '../css/DisplayStyles.css';

const Bar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

  return (
    <Box p="20px" backgroundColor={colors.primary[400]}>
      <Header title="Bar Chart" subtitle="Invested amount in each Month" />
      <Box className='chart-b'>
      <Box height="70vh" className='chart'>
        <BarChart />
      </Box>
      </Box>
    </Box>

  );
}

export default Bar;
