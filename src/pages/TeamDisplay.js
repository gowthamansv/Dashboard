import { Box } from "@mui/material";
import { useTheme } from "@mui/material";
import Header from "../components/Header";
import { tokens } from "../theme";
import Team from "../components/Team";

const TeamDisplay = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m="20px">
        <Header title="TEAM" subtitle="Managing the Team Members" />
<Box height="75vh">
  <Team/>
</Box>
</Box>
    );
};

export default TeamDisplay;
