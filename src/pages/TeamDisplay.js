import { Box } from "@mui/material";
import Header from "../components/Header";
import Team from "../components/Team";

const TeamDisplay = () => {

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
