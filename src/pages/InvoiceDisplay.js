import { Box } from "@mui/material";
import { useTheme } from "@mui/material";
import Invoices from "../components/Invoice";
import Header from "../components/Header";
import { tokens } from "../theme";

const InvoicesDisplay = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
              <Box m="10px" sx={{ bgcolor: colors.box }}>
<Header title="INVOICES" subtitle="List of Invoice Balances" />
      <Box height="75vh">
        <Invoices />
      </Box>
    </Box>
    );
};

export default InvoicesDisplay;
