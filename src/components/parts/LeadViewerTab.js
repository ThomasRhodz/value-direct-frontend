import * as React from "react";
import Tabs from "@mui/material/Tabs";
import {
  Container,
  Grid,
  Typography,
  Stack,
  Button,
  Dialog,
} from "@mui/material/";

import { Divider } from "@mui/material";
import LeadsTable from "../tables/LeadsTable";

const LeadViewerTab = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  //States
  const [open, setOpen] = React.useState(false); //-> for open and close of dialog

  //function for opening and closing the dialog
  const handleClickOpen = () => {
    setOpen(true);
  };

  //Function for closing the create forumn dialog
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 3, mb: 4 }}>
      <Stack direction="row" sx={{ flexGrow: 1 }}>
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Raleway",
            fontWeight: "bold",
            color: "#42855B",
            pt: 1,
            flexGrow: 1,
          }}
        >
          Leads Viewer
        </Typography>

      </Stack>

      <Divider sx={{ borderBottomWidth: 0.1, backgroundColor: "#d5eaef" }} />

      <Grid
        container
        direction="column"
        alignItems="center"
        sx={{ marginTop: "-10px", maxWidth:1200, overflowY:'scroll', pt:4 }}
      >
        <Grid item display={value === 0 ? "flex" : "none"}>
          <LeadsTable />
        </Grid>
        <Grid item display={value === 1 ? "flex" : "none"}>
          Insert Deactivated Affiate
        </Grid>
      </Grid>

    </Container>
  );
};

export default LeadViewerTab;
