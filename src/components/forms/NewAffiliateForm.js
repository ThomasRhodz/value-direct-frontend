//For Components
import React from "react";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import {
  Grid,
  Stack,
  Divider,
  Button,
  TextField,
  Select,
  InputLabel,
  FormControl,
  MenuItem,
  Typography,
  Dialog,
} from "@mui/material";
// import UserRegConfirmation from "../confirmations/UserRegConfirmation";

// Form and Data Handling
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

//Data Passing
// import { useAddUserMutation } from "../../services/userApi";

//Schema: Rules for inputs
const schema = yup.object({
  company_name: yup.string().required("Company Name is required"),
  company_acronym: yup.string().required("Provide the Comapny's Acronym"),
});

const NewAffiliateForm = ({ onClose, toast }) => {
  const [companyName, setCompanyName] = React.useState("");
  const [companyAcronym, setCompanyAcronym] = React.useState("");

  const handleCreateNewAffiliate = () => {
    setCompanyName("");
    setCompanyAcronym("");
  };

  //For react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  //restating a newvariable name
  // const [addAffiliate] = [add_function]();

  //function for handling the data in the form
  const onSubmit = (data) => {
  
      // Note: might change depending on attribute name in table
      const affiliate = {
        'company_name': data.company_name,
        'company_acronym': data.company_acronym
      };

      console.log(affiliate);
      //Comment for now, since base url and endpoint url is not yet established
      // addUser(user).the((payload) => {
      //   console.log('New user was successfully added')
      //   handleOpenConfirmation();
      // }).catch((error) => {
      //   console.log('Error, please try again')
      // })

  };
  return (
    <Grid>
      <Stack direction="column" alignItems="center" sx={{ width: "100%" }}>
        <Grid item>
          <DialogTitle>New Affiliate Form</DialogTitle>
        </Grid>

        <Grid item sx={{ width: "100%" }}>
          <Divider light />
        </Grid>
      </Stack>

      <form style={{ width: "100%" }} onSubmit={handleSubmit(onSubmit)}>
        <Grid
          container
          direction="column"
          alignItems="center"
          sx={{ width: { xs: 330, sm: 360, md: 450 }, padding: 2 }}
        >
          <div style={{ height: 15 }} />
          <Grid item style={{ width: "100%" }}>
            <TextField
              {...register("company_name")}
              label={"Company name"}
              style={{ width: "100%" }}
              size="regular"
              value={companyName}
              onChange={(event) => {
                setCompanyName(event.target.value);
              }}
            />
          </Grid>

          <div style={{ height: 15 }} />

          <Grid item style={{ width: "100%" }}>
            <TextField
              {...register("company_acronym")}
              label={"Acronym"}
              style={{ width: "100%" }}
              size="regular"
              value={companyAcronym}
              onChange={(event) => {
                setCompanyAcronym(event.target.value);
              }}
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
            Discard
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
            Add Affiliate
          </Button>
        </DialogActions>
      </form>

    </Grid>
  );
};

export default NewAffiliateForm;
