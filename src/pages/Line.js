import { Box } from "@mui/material";
import Header from "../components/Header";
import { useTheme } from "@mui/material";
import { tokens } from "../theme.js";
import LineChart from "../chart/LineChart.js";
import '../css/DisplayStyles.css';

const Line = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (

        <Box p="20px" backgroundColor={colors.primary[400]} >
          <Header title="Line Chart" subtitle="Amount invested by each person" />
          <Box className='chart-b'>
          <Box height="70vh" className='chart'>
            <LineChart />
          </Box>
          </Box>
        </Box>
  );
};

export default Line;
