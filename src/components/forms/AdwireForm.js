//For components
import React, { useState } from "react";
import {
  Grid,
  Typography,
  Stack,
  TextField,
  FormControl,
  FormControlLabel,
  Checkbox,
  MenuItem,
  Select,
  InputLabel,
  Button,
} from "@mui/material";

//Styling and Icon
import "./Adwire.css";
import FileUploadCard from "../cards/FileUploadCard";
import { BsUpload } from "react-icons/bs";

// Form and Data Handling
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

//Schema: Rules for inputs
const schema = yup.object({
  firstname: yup.string().required("firstname is required"),
  lastname: yup.string().required("last name is required"),
  dayphone: yup.string().required("Provide your day phone number"),
  evephone: yup.string().required("Provide your evening phone number"),
  email: yup
    .string()
    .email("Provide an email")
    .max(100, "Maximum of 100 characters"),
  zip: yup.string().required("Zip code is required"),
  consent: yup.string().required(),
  otherfield1: yup.string().required(),
  otherfield2: yup.string().required(),
  attorney_help: yup.string().required(),
});

//Max count -> serve as the total file the user can upload per entry
const MAX_COUNT = 5;

//-------------------------------------------------------------------Main Component--------------------------------------------------------------------------------
const AdwireForm = ({toast}) => {
  //STATE & VARIABLES
  const [uploadedFiles, setUploadedFiles] = useState([]); // -> Array that hold the file uploads
  const [fileLimit, setFileLimit] = useState(false); // -> Signifier for the limit of file

  //FUNCTIONS:
  //function that handle file upload by pushing it into the array
  const handleUploadFiles = (files) => {
    const uploaded = [...uploadedFiles];
    let limitExceeded = false;
    files.some((file) => {
      if (uploaded.findIndex((f) => f.name === file.name) === -1) {
        uploaded.push(file);
        if (uploaded.length === MAX_COUNT) setFileLimit(true);
        if (uploaded.length > MAX_COUNT) {
          toast(`You can only add a maximum of ${MAX_COUNT} files`);
          setFileLimit(false);
          limitExceeded = true;
          return true;
        }
      }
    });
    if (!limitExceeded) setUploadedFiles(uploaded);
  };

  //Function that serve as the function that will be called once a file is uploaded and the calling back the handleUploadFiles
  const handleFileEvent = (e) => {
    const chosenFiles = Array.prototype.slice.call(e.target.files);
    handleUploadFiles(chosenFiles);
  };

  //Function in removing specific element by its file name
  const handleRemoveFiles = (index, fileName) => {
    const uploaded = [...uploadedFiles];
    for (var i = 0; i < uploaded.length; i++) {
      if (uploaded[i].name === fileName) {
        uploaded.splice(i, 1);
      }
    }

    if (uploaded.length === MAX_COUNT) {
      setFileLimit(true);
    } else {
      setFileLimit(false);
    }
    setUploadedFiles(uploaded);
  };

  //State for the 3 select field in the form.
  const [affected, setAffected] = React.useState("");
  const [cancer, setCancer] = React.useState("");
  const [activeAttorney, setActiveAttorney] = React.useState("");

  //For react hook form
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  //Function that handles the data once the data in the form is submitted.
  const onSubmit = (data) => {
    console.log(data);
  };

  //Returning the main component
  return (
    //Main Container: Grid
    <Grid
      container
      direction="column"
      alignItems="center"
      sx={{
        background: "white",
        marginTop: 2,
        width: "100%",
        height: "100%",
        p: 5,
        pl: { xs: 2, sm: 5, md: 10 },
        pr: { xs: 2, sm: 5, md: 10 },
      }}
    >
      <form style={{ width: "100%" }} onSubmit={handleSubmit(onSubmit)}>
        <Grid item>
          <Typography variant="h4" align="center" sx={{ fontFamily: "Arvo" }}>
            Upload Form
          </Typography>
        </Grid>

        <Grid item sx={{ marginTop: 3, width: "100%" }}>
          <Typography variant="h5" align="left" sx={{ fontFamily: "Raleway" }}>
            Contact Information
          </Typography>
        </Grid>
        <Grid item sx={{ width: "100%" }}>
          <Stack direction="row" sx={{ marginTop: 2, pb: 2, width: "100%" }}>
            <TextField
              {...register("firstname")}
              variant="outlined"
              label="First Name"
              sx={{ width: "100%" }}
            />
            <div style={{ width: 20 }} />
            <TextField
              {...register("lastname")}
              variant="outlined"
              label="Last Name"
              sx={{ width: "100%" }}
            />
          </Stack>
          <Stack direction="row" sx={{ pb: 2, width: "100%" }}>
            <TextField
              {...register("dayphone")}
              variant="outlined"
              label="Day phone"
              sx={{ width: "100%" }}
            />
            <div style={{ width: 20 }} />
            <TextField
              {...register("evephone")}
              variant="outlined"
              label="Evening Phone"
              sx={{ width: "100%" }}
            />
          </Stack>
          <Stack direction="row" sx={{ pb: 2, width: "100%" }}>
            <TextField
              {...register("email")}
              variant="outlined"
              type="email"
              label="Email"
              sx={{ width: "100%" }}
            />
            <div style={{ width: 20 }} />
            <TextField
              {...register("zip")}
              variant="outlined"
              label="Zip Code"
              sx={{ width: "100%" }}
            />
          </Stack>
        </Grid>

        <Grid item sx={{ marginTop: 3, width: "100%" }}>
          <Typography variant="h5" align="left" sx={{ fontFamily: "Raleway" }}>
            Case Information
          </Typography>
        </Grid>
        <Grid item sx={{ width: "100%" }}>
          <Stack direction="column" sx={{ marginTop: 2, pb: 2, width: "100%" }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Were you or a loved one harmed by a product?
              </InputLabel>
              <Select
                {...register("otherfield1")}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={affected}
                label="Were you or a loved one harmed by a product?"
                onChange={(event) => setAffected(event.target.value)}
                required
              >
                <MenuItem value={"Yes"}>Yes</MenuItem>
                <MenuItem value={"No"}>No</MenuItem>
              </Select>
            </FormControl>

            <div style={{ height: 15 }} />

            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Were you or a loved one diagnosed with a cancer due to that
                incident?
              </InputLabel>
              <Select
                {...register("otherfield2")}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={cancer}
                placeholder={""}
                label="Were you or a loved one diagnosed with a cancer due to that incident?"
                onChange={(event) => setCancer(event.target.value)}
                required
              >
                <MenuItem value={"No"}>No</MenuItem>
                <MenuItem value={"Carcinoma"}>Carcinoma</MenuItem>
                <MenuItem value={"Sarcoma"}>Sarcoma</MenuItem>
                <MenuItem value={"Melanoma"}>Melanoma</MenuItem>
                <MenuItem value={"Lymphoma"}>Lymphoma</MenuItem>
                <MenuItem value={"Leukemia"}>Leukemia</MenuItem>
              </Select>
            </FormControl>

            <div style={{ height: 15 }} />

            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Is an attorney already helping with you claim?
              </InputLabel>
              <Select
                {...register("attorney_help")}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={activeAttorney}
                placeholder={""}
                label="Is an attorney already helping with you claim?"
                onChange={(event) => setActiveAttorney(event.target.value)}
                required
              >
                <MenuItem value={"Yes"}>Yes</MenuItem>
                <MenuItem value={"No"}>No</MenuItem>
              </Select>
            </FormControl>
          </Stack>
        </Grid>

        <Grid item sx={{ marginTop: 3, width: "100%" }}>
          <Typography variant="h5" align="left" sx={{ fontFamily: "Raleway" }}>
            File Upload:
          </Typography>
        </Grid>
        <Grid item sx={{ width: "100%", mt: 1 }}>
          <Grid
            container
            direction="column"
            alignItems="center"
            className="uploaded-files-list"
            sx={{
              width: "100%",
              p: 3,
              border: "1px solid #cccccc",
              borderRadius: 2,
            }}
          >
            <Grid item sx={{ width: "100%" }}>
              <Button
                startIcon={<BsUpload />}
                variant="contained"
                component="label"
                sx={{
                  textTransform: "none",
                  fontFamily: "Arvo",
                  width: "100%",
                  backgroundColor: "#c6c6c6",
                  p: 2,
                }}
              >
                <Typography
                  variant="body1"
                  align="left"
                  sx={{ fontFamily: "Raleway" }}
                >
                  Upload a File
                </Typography>
                <input
                  hidden
                  id="fileUpload"
                  onChange={handleFileEvent}
                  disabled={fileLimit}
                  accept="application/pdf, image/png"
                  multiple
                  type="file"
                />
              </Button>
            </Grid>

            {uploadedFiles.map((file, index) => {
              return (
                <Grid item key={file.name} sx={{ width: "100%" }}>
                  <FileUploadCard
                    index={index}
                    name={file.name}
                    type={file.type}
                    remove={(index, fileName) =>
                      handleRemoveFiles(index, fileName)
                    }
                  />
                </Grid>
              );
            })}
          </Grid>
          <Stack direction="row" sx={{ mt: 2, width: "100%" }}>
            <FormControlLabel
              {...register("consent")}
              value="Yes"
              control={<Checkbox required />}
              label={
                <Typography variant="body1" sx={{ fontFamily: "raleway" }}>
                  {" "}
                  Do you consent?{" "}
                </Typography>
              }
              labelPlacement="start"
            />
          </Stack>
        </Grid>

        <Grid item sx={{ width: "100%", mt: 5 }}>
          <Button
            variant="contained"
            type="submit"
            sx={{
              width: "100%",
              minWidth: 40,
              borderRadius: 1,
              color: "white",
              textTransform: "NONE",
              fontFamily: "RALEWAY",
              fontSize: 25,
              backgroundColor:"#42855B"
            }}
          >
            Submit
          </Button>
        </Grid>
      </form>
    </Grid>
  );
};

export default AdwireForm;
