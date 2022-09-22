import React from "react";
import { styled } from "@mui/material/styles";
import { Grid, Tab, TextField } from "@mui/material";

export const UploadButtonGrid = styled(Grid)(() => ({
  border: "1px solid #58a776",
  borderRadius: 5,
  paddingTop: 10,
  paddingBottom: 10,
  width: "100%",
  height: "100%",
  overflow: "hidden",
}));

export const ImageForHolder = styled("img")((props) => {
  return {
    width: props.width ?? "420px",
    height: props.height ?? "160px",
    objectFit: props.objectFit ?? "cover",
    border: "1px solid #58a776",
    borderRadius: 5,
  };
});


export const StyledTab = styled(Tab)(() => ({
  height: "30",
}));
