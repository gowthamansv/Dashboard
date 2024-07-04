import { Box } from "@mui/material";
import Header from "../components/Header";
import { useTheme } from "@mui/material";
import LineChart from "../chart/LineChart.js";

const Line = () => {
    const theme = useTheme();
  return (

        <Box p="20px" sx={{ bgcolor: theme.palette.box.main }}>
          <Header title="Line Chart" subtitle="Amount invested by each person" />
          <Box height="70vh" sx={{ bgcolor: theme.palette.box.main }}>
            <LineChart />
          </Box>
        </Box>
  );
};

export default Line;
