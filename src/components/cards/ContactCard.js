import React from "react";
import { Grid, IconButton, Typography } from "@mui/material";
import { FaMobileAlt } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdCancel } from "react-icons/md";

const ContactCard = ({ number, type, remove, index, changeButton }) => {
  const iconChanger = () => {
    if (type === "Telephone") {
      return <BsFillTelephoneFill style={{ color: "#A5D6A7", fontSize: 25 }} />;
    } else{
        return <FaMobileAlt style={{ color: "#A5D6A7", fontSize: 25 }} />; 
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
        backgroundColor: "white",
        mt: 1,
        borderRadius: 2,
      }}
    >
      <Grid item sx={{ width: 50 }}>
        {iconChanger()}
      </Grid>
      
      <Grid item sx={{ width: 100, height: "100%", flexGrow: 1 }}>
        <Typography
          variant="caption"
          sx={{ fontFamily: "raleway", overflow: "hidden" }}
        >
          {type}: {number}
        </Typography>
      </Grid>
      <Grid item>
        <IconButton onClick={
          () => {
            remove(index, number);
            changeButton();
            }
          }
        >
          <MdCancel style={{fontSize:25, color:'#e45b60'}}/>
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default ContactCard;
