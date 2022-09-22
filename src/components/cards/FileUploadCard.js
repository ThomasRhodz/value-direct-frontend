import React from "react";
import { Grid, IconButton, Typography } from "@mui/material";
import { AiFillFilePdf, AiFillFileImage, AiFillDelete } from "react-icons/ai";

const FileUploadCard = ({ name, type, remove, index }) => {
  const iconChanger = () => {
    if (type === "image/png") {
      return <AiFillFileImage style={{ color: "#4d81b2", fontSize: 40 }} />;
    } else if (type === "application/pdf") {
      return <AiFillFilePdf style={{ color: "#ee4d4d", fontSize: 40 }} />;
    }
  };
  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      sx={{
        width: "100%",
        p: 1,
        backgroundColor: "#D9D9D9",
        mt: 1,
        borderRadius: 2,
      }}
    >
      <Grid item sx={{ width: 50 }}>
        {iconChanger()}
      </Grid>
      <Grid item sx={{ width: 400, height: "100%", flexGrow: 1 }}>
        <Typography
          variant="body1"
          sx={{ fontFamily: "raleway", overflow: "hidden" }}
        >
          {name}
        </Typography>
      </Grid>
      <Grid item>
        <IconButton onClick={() => remove(index, name)}>
          <AiFillDelete />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default FileUploadCard;
