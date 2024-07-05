import { Box, Typography } from "@mui/material";
import Header from "../components/Header";
import { useTheme } from "@mui/material";
import { tokens } from "../theme.js";

const Calendar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  return (

        <Box p="20px" backgroundColor={colors.primary[400]}>
          <Header title="Calendar" subtitle="Date to schedule" />
          <Box height="70vh">
            <Typography>
                Coming Soon.....
            </Typography>
          </Box>
        </Box>
  );
};

export default Calendar;
