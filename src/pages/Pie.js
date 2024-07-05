import { Box } from "@mui/material";
import Header from "../components/Header";
import PieChart from "../chart/PieChart";
import { useTheme } from "@mui/material";
import { tokens } from "../theme.js";
import '../css/DisplayStyles.css';

const Pie = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  return (

        <Box p="20px" backgroundColor={colors.primary[400]}>
          <Header title="Pie Chart" subtitle="Amount invested by each person" />
          <Box className='chart-b'>
          <Box height="70vh" className='chart'>
            <PieChart />
          </Box>
          </Box>
        </Box>
  );
};

export default Pie;
