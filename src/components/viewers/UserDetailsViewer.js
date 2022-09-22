//Components
import React from "react";
import DialogActions from "@mui/material/DialogActions";
import {
  Grid,
  Stack,
  Divider,
  Button,
  Dialog,
  IconButton,
  Typography,
} from "@mui/material";

//Icons
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import { FaMobileAlt, FaUserCircle } from "react-icons/fa";
import { RiUserSettingsFill } from "react-icons/ri";
import { MdCancel } from "react-icons/md";
import EditUserForm from "../forms/EditUserForm";


//--------------------------------------------------------------------Main Functional Component------------------------------------------------------------------
const UserDetailViewer = ({
  onClose,
  id,
  firstname,
  middlename,
  lastname,
  contactList,
  email,
  address,
  role,
  password
}) => {

  const [openEditUser, setOpenEditUser] = React.useState(false); //-> for open and close of Client Inquiry dialog

 //Function for closing the edit dialog
 const handleUserEditClose = () => {
    setOpenEditUser(false);
  };

  const contactIconChanger = (type) => {
    if (type === 'Telephone'){
        return (
          <PhoneEnabledIcon
              fontSize="small"
              sx={{ color: "#5C6D63" }}
          />
        );
    }else {
      return (
        <FaMobileAlt
            
            style={{ fontSize:20, color: "#5C6D63" }}
        />
      );

    }
  }

  return (
    <Grid>
      <Grid container direction="row" justifyContent="flex-end" sx={{pt:1, pr:1 }}>
        <Grid item>
          <IconButton onClick={() => onClose()}>
            <MdCancel style={{fontSize:35, color:'#e3e7e7'}}/>
          </IconButton>
        </Grid>
      </Grid>

        <Grid
          container
          direction="column"
          alignItems="center"
          sx={{ width: { xs: 330, sm: 360, md: 400 }, padding: 2, pt:0, marginTop:'-15px' }}
        >
          <Grid item>
            <FaUserCircle style={{ color: "#5C6D63", fontSize: 60 }} />
          </Grid>
          <Grid item sx={{ mt:2 }}>
            <Stack direction="row" spacing={1}>
              <Typography
                variant="h5"
                style={{ fontFamily: "apple-system", color: "#5C6D63" }}
              >
                {(firstname +' '+ middlename +' '+ lastname)}
              </Typography>
            </Stack>
          </Grid>

          <Grid item sx={{ width: "100%" }}>
            <Divider light />
          </Grid>

          <div style={{ height: 15 }} />

          <Grid item>
            <Grid container direction="column" alignItems="left">
              <Grid item sx={{ pt:2 }}>
                <Stack direction="row" spacing={1}>
                  <RiUserSettingsFill style={{ color: "#5C6D63", fontSize: 22 }} />
                  <Typography
                    style={{ fontFamily: "apple-system", color: "#5C6D63", fontSize:18 }}
                  >
                    {role}
                  </Typography>
                </Stack>
              </Grid>

              <Grid item sx={{ pt:1 }}>
                <Stack direction="row" spacing={1}>
                  <LocationOnRoundedIcon
                    fontSize="small"
                    sx={{ color: "#5C6D63" }}
                  />
                  <Typography
                    style={{ fontFamily: "apple-system", color: "#5C6D63", fontSize:18  }}
                  >
                    {address}
                  </Typography>
                </Stack>
              </Grid>

              <Grid item sx={{ paddingTop:1 }}>
                <Stack direction="row" spacing={1}>
                  <EmailRoundedIcon
                    style={{ color: "#5C6D63", fontSize: 20 }}
                  />
                  <Typography
                    style={{ fontFamily: "apple-system", color: "#5C6D63", fontSize:18  }}
                  >
                    {email}
                  </Typography>
                </Stack>
              </Grid>
              <Grid item>
                {contactList.map((contact) => {
                  return (
                    <Stack direction="row" spacing={1} key={contact.number} sx={{ pt:1 }}>
                        {contactIconChanger(contact.type)}
                        <Typography
      
                            style={{ fontFamily: "apple-system", color: "#5C6D63", fontSize:18  }}
                        >
                            {contact.number}
                        </Typography>
                    </Stack>
                  );
                })}
                
              </Grid>


            </Grid>
          </Grid>

          <div style={{ height: 15 }} />
        </Grid>

        <DialogActions sx={{ paddingRight: 2 }}>
          <Button
            type="button"
            onClick={() => console.log('Create function for deactivate')}
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
            Deactivate
          </Button>
          <Button
            variant="contained"
            type="subuttonbmit"
            sx={{
              height: 45,
              minWidth: 40,
              borderRadius: 1,
              color: "white",
              textTransform: "NONE",
              fontFamily: "Playfair Display",
            }}
            onClick={() => setOpenEditUser(true)}
          >
            Edit
          </Button>
        </DialogActions>

        <Dialog open={openEditUser} onClose={handleUserEditClose} scroll="body" sx={{ 
            "& .MuiDialog-container": {
            "& .MuiPaper-root": {
                width: "100%",
                maxWidth: "850px",  // Set your width here
            },
            },
        }}>
            <EditUserForm
                onClose={() => handleUserEditClose()}
                id={id}
                firstname={firstname} 
                lastname={lastname}
                middlename={middlename} 
                address={address}
                role={role} 
                email={email}
                password={password} 
                contactList={contactList}
            />
        </Dialog>
    </Grid>
  );
};

export default UserDetailViewer;
