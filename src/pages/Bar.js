import { Box } from "@mui/material";
import Header from "../components/Header";
import BarChart from "../chart/BarChart";
import { useTheme } from "@mui/material";

const Bar = () => {
    const theme = useTheme();

  return (
    <Box p="20px" sx={{ bgcolor: theme.palette.box.main }}>
      <Header title="Bar Chart" subtitle="Invested amount in each Month" />
      <Box height="70vh">
        <BarChart />
      </Box>
    </Box>

  );
}

export default Bar;
