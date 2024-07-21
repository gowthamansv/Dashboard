import { Box } from "@mui/material";
import Header from "../components/Header";
import { useTheme } from "@mui/material";
import {tokens} from "../theme";
import Contact from '../components/Contact';

const ContactDisplay = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

    return (
          <Box m="20px" sx={{ bgcolor: colors.box }}>
            <Header title="CONTACTS" subtitle="List of Contacts for Future Reference" />
  <Box height="75vh">
  <Contact />
  </Box>
</Box>
    );
};
export default ContactDisplay;