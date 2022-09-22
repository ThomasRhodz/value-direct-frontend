import React, { useState } from "react";
import DialogActions from "@mui/material/DialogActions";
import {
  Grid,
  Stack,
  Divider,
  Button,
  TextField,
  Typography,
} from "@mui/material";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import { FaUserCircle } from "react-icons/fa";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import { HiIdentification } from "react-icons/hi";
import { MdTopic } from "react-icons/md";

// Form and Data Handling
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

//Schema: Rules for inputs
const schema = yup.object({
  note: yup.string().max(500, "Maximum content is 500 characters"),
});

const QualifiedInquiryViewerForm = ({
  onClose,
  id,
  name,
  contact,
  email,
  ip,
  subject,
  details,
}) => {
  //For react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Grid>
      <form style={{ width: "100%" }} onSubmit={handleSubmit(onSubmit)}>
        <Grid
          container
          direction="column"
          alignItems="center"
          sx={{ width: { xs: 330, sm: 360, md: 450 }, padding: 2 }}
        >
          <Grid item>
            <FaUserCircle style={{ color: "#5C6D63", fontSize: 50 }} />
          </Grid>
          <Grid item>
            <Stack direction="row" spacing={1}>
              <Typography
                variant="h6"
                style={{ fontFamily: "apple-system", color: "#5C6D63" }}
              >
                {name}
              </Typography>
            </Stack>
          </Grid>

          <Grid item sx={{ width: "100%" }}>
            <Divider light />
          </Grid>

          <div style={{ height: 15 }} />

          <Grid item>
            <Grid container direction="column" alignItems="left">
              <Grid item>
                <Stack direction="row" spacing={1}>
                  <EmailRoundedIcon
                    style={{ color: "#5C6D63", fontSize: 20 }}
                  />
                  <Typography
                    variant="subtitle1"
                    style={{ fontFamily: "apple-system", color: "#5C6D63" }}
                  >
                    {email}
                  </Typography>
                </Stack>
              </Grid>

              <Grid item>
                <Stack direction="row" spacing={1}>
                  <PhoneEnabledIcon
                    fontSize="small"
                    sx={{ color: "#5C6D63" }}
                  />
                  <Typography
                    variant="subtitle1"
                    style={{ fontFamily: "apple-system", color: "#5C6D63" }}
                  >
                    {contact}
                  </Typography>
                </Stack>
              </Grid>

              <Grid item>
                <Stack direction="row" spacing={1}>
                  <LocationOnRoundedIcon
                    fontSize="small"
                    sx={{ color: "#5C6D63" }}
                  />
                  <Typography
                    variant="subtitle1"
                    style={{ fontFamily: "apple-system", color: "#5C6D63" }}
                  >
                    {ip}
                  </Typography>
                </Stack>
              </Grid>

              <Grid item>
                <Stack direction="row" spacing={1}>
                  <MdTopic style={{ color: "#5C6D63", fontSize: 20 }} />
                  <Typography
                    variant="subtitle1"
                    style={{ fontFamily: "apple-system", color: "#5C6D63" }}
                  >
                    {subject}
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
          </Grid>

          <div style={{ height: 10 }} />
          <Grid item style={{ width: "100%" }}>
            <Stack direction="column">
              <Typography
                variant="subtitle1"
                style={{
                  fontFamily: "apple-system",
                  fontWeight: "bold",
                  color: "#5C6D63",
                }}
              >
                Details:
              </Typography>
              <Typography
                variant="body1"
                align="justify"
                style={{ fontFamily: "apple-system", color: "#5C6D63" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
              </Typography>
            </Stack>
          </Grid>

          <div style={{ height: 10 }} />
          <Grid item style={{ width: "100%" }}>
            <TextField
              {...register("note")}
              label="Add note"
              multiline
              minRows={3}
              maxRows={10}
              size="small"
              style={{ width: "100%", fontSize: 10, fontFamily: "Raleway" }}
            />
          </Grid>

          <div style={{ height: 15 }} />
        </Grid>

        <DialogActions sx={{ paddingRight: 2 }}>
          <Button
            type="button"
            onClick={() => onClose()}
            sx={{
              height: 45,
              minWidth: 40,
              borderRadius: 1,
              color: "black",
              backgroundColor: "transparent",
              fontFamily: "Playfair Display",
              textTransform: "NONE",
            }}
          >
            Close
          </Button>
          <Button
            variant="contained"
            type="submit"
            sx={{
              height: 45,
              minWidth: 40,
              borderRadius: 1,
              color: "white",
              textTransform: "NONE",
              fontFamily: "Playfair Display",
            }}
          >
            Save
          </Button>
        </DialogActions>
      </form>
    </Grid>
  );
};

export default QualifiedInquiryViewerForm;
