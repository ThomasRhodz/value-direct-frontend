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
import { FaUserPlus } from "react-icons/fa";
import { BiListPlus } from "react-icons/bi";
import { FiUserCheck, FiUserX } from "react-icons/fi";
import { Divider } from "@mui/material";

import AffiliateTable from "../tables/AffiliateTable";
import NewAffiliateForm from "../forms/NewAffiliateForm";
import NewAffiliateUserForm from "../forms/NewAffiliateUserForm";
import { StyledTab } from "../forms/FormComponents";

const AffaliateManagementTab = ({toast}) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  //States
  const [openAffiliate, setOpenAffiliate] = React.useState(false); //-> for open and close of dialog
  const [openAffiliateUser, setOpenAffiliateUser] = React.useState(false); //-> for open and close of dialog

  //function for opening and closing the dialog
  const handleClickOpenAffiliate = () => {
    setOpenAffiliate(true);
  };

  //Function for closing the create forumn dialog
  const handleCloseAffiliate = () => {
    setOpenAffiliate(false);
  };

   //function for opening and closing the dialog
   const handleClickOpenAffiliateUser = () => {
    setOpenAffiliateUser(true);
  };

  //Function for closing the create forumn dialog
  const handleCloseAffiliateUser = () => {
    setOpenAffiliateUser(false);
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
          Affaliate Management
        </Typography>

        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="secondary tabs example"
          TabIndicatorProps={{ sx: { height: 3, borderRadius: 5 } }}
        >
          <StyledTab
            icon={
              <FiUserCheck
                style={
                  value === 0
                    ? { color: "#42855B", fontSize: 25 }
                    : { color: "#A5D6A7", fontSize: 25 }
                }
              />
            }
            iconPosition="start"
            label={
              <span
                style={value === 0 ? { color: "#42855B" } : { color: "#A5D6A7" }}
              >
                Active
              </span>
            }
            sx={{
              fontSize: 17,
              fontFamily: "Arvo",
              textTransform: "none",
              height: "100%",
            }}
          />
          <StyledTab
            icon={
              <FiUserX
                style={
                  value === 1
                    ? { color: "#42855B", fontSize: 25 }
                    : { color: "#A5D6A7", fontSize: 25 }
                }
              />
            }
            iconPosition="start"
            label={
              <span
                style={value === 1 ? { color: "#42855B" } : { color: "#A5D6A7" }}
              >
                Deactivated
              </span>
            }
            sx={{
              fontSize: 17,
              fontFamily: "Arvo",
              textTransform: "none",
              height: "100%",
            }}
          />
        </Tabs>
      </Stack>

      <Divider sx={{ borderBottomWidth: 0.1, backgroundColor: "#d5eaef" }} />
      <Grid
        container
        direction="column"
        alignItems="center"
        sx={{ maxWidth:{xs:800, sm: 800, md:'100%'}, overflowX:'scroll' }}
      >
        <Grid item display={value === 0 ? "flex" : "none"}>
          <Grid container direction='column'>
            <Grid container direction="row" justifyContent="flex-end" sx={{ pt: 3 }}>
              <Grid item>
                <Button
                  variant="contained"
                  startIcon={<BiListPlus style={{ fontSize: 30 }} />}
                  onClick={() => handleClickOpenAffiliate()}
                  sx={{
                    height: 45,
                    minWidth: 40,
                    borderRadius: 1,
                    color: "white",
                    textTransform: "NONE",
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{ fontFamily: "Raleway", fontWeight: "bold", color: "white" }}
                  >
                    Add affiliate
                  </Typography>
                </Button>
              </Grid>
              <Grid sx={{ width:10 }}/>
              <Grid item>
                <Button
                  variant="contained"
                  startIcon={<FaUserPlus style={{ fontSize: 30 }} />}
                  onClick={() => handleClickOpenAffiliateUser()}
                  sx={{
                    height: 45,
                    minWidth: 40,
                    borderRadius: 1,
                    color: "white",
                    textTransform: "NONE",
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{ fontFamily: "Raleway", fontWeight: "bold", color: "white" }}
                  >
                    Add affiliate user
                  </Typography>
                </Button>
              </Grid>
            </Grid>

            <AffiliateTable />
          </Grid>
        </Grid>
        <Grid item display={value === 1 ? "flex" : "none"}>
          Insert Deactivated Users
        </Grid>
      </Grid>

      <Dialog open={openAffiliate} onClose={handleCloseAffiliate} scroll="body">
        <NewAffiliateForm onClose={() => handleCloseAffiliate()} toast={(stringMessage)=>toast(stringMessage)}/>
      </Dialog>

      <Dialog open={openAffiliateUser} onClose={handleCloseAffiliateUser} scroll="body" sx={{ 
        "& .MuiDialog-container": {
          "& .MuiPaper-root": {
            width: "100%",
            maxWidth: "850px",  // Set your width here
          },
        },
       }}>
        <NewAffiliateUserForm onClose={() => handleCloseAffiliateUser()} toast={(stringMessage)=>toast(stringMessage)}/>
      </Dialog>
    </Container>
  );
};

export default AffaliateManagementTab;
