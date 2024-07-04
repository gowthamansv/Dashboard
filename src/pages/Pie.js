import { Box } from "@mui/material";
import Header from "../components/Header";
import PieChart from "../chart/PieChart";
import { useTheme } from "@mui/material";

const Pie = () => {
    const theme = useTheme();
  return (

        <Box p="20px" sx={{ bgcolor: theme.palette.box.main }}>
          <Header title="Pie Chart" subtitle="Amount invested by each person" />
          <Box height="70vh" sx={{ bgcolor: theme.palette.box.main }}>
            <PieChart />
          </Box>
        </Box>
  );
};

export default Pie;
