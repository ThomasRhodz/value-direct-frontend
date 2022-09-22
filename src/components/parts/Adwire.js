import React from "react";
import { Grid, Container, Stack, Typography, Divider } from "@mui/material";
import Link from "@mui/material/Link";
import AdwireForm from "../forms/AdwireForm";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      style={{ color: "white" }}
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link style={{ color: "white" }} href="https://mui.com/">
        IND Legal Services
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const Adwire = ({toast}) => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Stack direction="column">
        <Grid sx={{ flexGrow: 1 }}>
          <Typography
            variant="h4"
            sx={{ fontFamily: "Raleway", fontWeight: "bold", color: "#42855B" }}
          >
            Adwire Services
          </Typography>
        </Grid>
        <Divider sx={{ borderBottomWidth: 0.1, backgroundColor: "white" }} />
        <Grid
          container
          direction="column"
          alignItems="center"
          sx={{ width: "100%", pl: 5, pr: 5 }}
        >
          <AdwireForm toast={(stringMessage)=>toast(stringMessage)}/>
        </Grid>
      </Stack>

      <Copyright sx={{ pt: 4 }} />
    </Container>
  );
};

export default Adwire;
