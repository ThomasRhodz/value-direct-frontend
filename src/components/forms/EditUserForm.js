//For Components
import React from "react";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import {
  Grid,
  Stack,
  Divider,
  Button,
  IconButton,
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

import { MdAddCircle } from 'react-icons/md'
import ContactCard from "../cards/ContactCard";
//Data Passing
// import { useAddUserMutation } from "../../services/userApi";

//Schema: Rules for inputs
const schema = yup.object({
  first_name: yup.string().required("First name is required"),
  middle_name: yup.string(),
  last_name: yup.string().required("Last name is required"),
  role: yup.string().required("Type is required"),
  address: yup.string().required("Provide the user's Address"),
  email: yup.string().email().max(100, "Maximum of 100 characters"),
  password: yup
    .string()
    .required("password is required")
    .min(8, "Minimum of 8 characters")
    .max(20, "Maximum of 20 characters"),
  re_type_password: yup
    .string()
    .required("password is required")
    .min(8, "Minimum of 8 characters")
    .max(20, "Maximum of 20 characters"),
});

const MAX_COUNT = 3;

const EditUserForm = ({ onClose, id, firstname, lastname, middlename, address, role, email, password, contactList, toast }) => {
  
  //States
  const [openConfirmation, setOpenConfirmation] = React.useState(false); //-> for open and close of dialog
  const [buttonState, setButtonState] = React.useState(true); //-> for open and close of dialog
  const [first_name, setFirstName] = React.useState(firstname);
  const [middle_name, setMiddleName] = React.useState(middlename);
  const [last_name, setLastName] = React.useState(lastname);
  const [user_role, setRole] = React.useState(role);
  const [user_email, setEmail] = React.useState(email);
  const [user_address, setAddress] = React.useState(address);
  const [pass, setPass] = React.useState(password);
  const [rePass, setRePass] = React.useState(password);
  
  const [contact, setContact] =  React.useState(contactList);
  const [contact_type, setContactType] = React.useState("Mobile");
  const [contact_number, setContactNumber] = React.useState("");
  const [contactLimit, setContactLimit] = React.useState(false); // -> Signifier for the limit of file
  

  //function for opening and closing the dialog
  const handleOpenConfirmation = () => {
    setOpenConfirmation(true);
  };

  //Function for closing the create forumn dialog
  const handleCloseConfirmation = () => {
    setOpenConfirmation(false);
    onClose();
  };

  //Function for closing the create forumn dialog
  const handleCloseConfirmationOnly = () => {
    setOpenConfirmation(false);
  };

  const handleAddContact = () =>{
    const contacts = [...contact];
    if (contact_number!==''){
      if (contact.findIndex((c) => c.number === contact_number) === -1){
        const input = {
          'type': contact_type,
          'number': contact_number
        };
    
        if (contact.length === MAX_COUNT) setContactLimit(true);
          console.log(contactLimit)
          console.log(MAX_COUNT)
          console.log(contact.length)
        if (!contactLimit) {
          contacts.push(input);
          setContact(contacts);
          setContactNumber("")
          setContactType('Mobile')
        }else{
          toast('Only 4 contacts is allowed.')
        }
      }else{
        toast('Contact number already exist')
      }
    }else{
      toast('Input your contact number')
    }
      
    
  }

  const handleRemoveContact = (index, contactNumber) => {
    console.log(contactNumber)
    const contacts = [...contact];
    for (var i = 0; i < contacts.length; i++) {
      if (contacts[i].number === contactNumber) {
        contacts.splice(i, 1);
      }
    }
    setContact(contacts);
    setContactLimit(false)
  };

  const handleCreateNewUser = () => {
    handleCloseConfirmationOnly();
    setFirstName("");
    setMiddleName("");
    setLastName("");
    setEmail("");
    setContact("");
    setAddress("");
    setPass("");
    setRePass("");
    setRole("admin");
  };

  const [passView, setPassView] = React.useState(false);
  const [passResult, setPassResult] = React.useState("");

  //For react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  //restating a newvariable name
  // const [addUser] = useAddUserMutation();

  //function for handling the data in the form
  const onSubmit = (data) => {
    if (data.password !== data.re_type_password) {
      setPassView(true);
      setPass("");
      setRePass("");
      setPassResult("Password does not match");
      toast("Password does not match");
    }
    if(firstname === data.first_name && lastname===data.last_name && middlename===data.middle_name && email === data.email && address===data.address && password===data.password && role === data.role && contactList === contact){
      toast("No actions can be done");
    } else {
      //console.log(data);

      // Note: might change depending on attribute name in table
      const user = {
        'first_name': data.first_name,
        'middle_name': data.middle_name,
        'last_name': data.last_name,
        'role': data.role,
        'address': data.address,
        'email': data.email,
        'password': data.password,
        'contact': contact
      };

      console.log(user);
      //Comment for now, since base url and endpoint url is not yet established
      // addUser(user).the((payload) => {
      //   console.log('New user was successfully added')
      //   handleOpenConfirmation();
      // }).catch((error) => {
      //   console.log('Error, please try again')
      // })
    }
  };
  return (
    <Grid>
      <Stack direction="column" alignItems="center" sx={{ width: "100%" }}>
        <Grid item>
          <DialogTitle>
            <Typography variant='h6' sx={{ fontFamily:'arvo' }}>
              Edit Employee Form
            </Typography>
          </DialogTitle>
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
          sx={{ width: { xs: 330, sm: 360, md: 850 }, padding: 2 }}
        >
          <div style={{ height: 15 }} />
          <Stack direction='row'>
            <Stack direction='column' sx={{ maxWidth:350 }}>

              <Typography 
                variant='h6'
                sx={{ 
                  fontFamily:'arvo',
                  color:'green'
                 }}
              >
                Personal Details
              </Typography>
              <div style={{ height: 10 }} />
              <Grid item style={{ width: "100%" }}>
                <TextField
                  {...register("first_name")}
                  label={"First name"}
                  style={{ width: "100%" }}
                  value={first_name}
                  onChange={(event) => {
                    setFirstName(event.target.value);
                    setButtonState(false);
                  }}
                />
              </Grid>
              <div style={{ height: 15 }} />

              <Stack direction='row'>
                <Grid item style={{ width: "100%" }}>
                  <TextField
                    {...register("middle_name")}
                    label={"Middle name"}
                    style={{ width: "100%" }}
                    value={middle_name}
                    onChange={(event) => {
                      setMiddleName(event.target.value);
                      setButtonState(false);
                    }}
                  />
                </Grid>
                <div style={{ width: 10 }} />
                <Grid item style={{ width: "100%" }}>
                  <TextField
                    {...register("last_name")}
                    label={"Last name"}
                    style={{ width: "100%" }}

                    value={last_name}
                    onChange={(event) => {
                      setLastName(event.target.value);
                      setButtonState(false);
                    }}
                  />
                </Grid>
              </Stack>
              <div style={{ height: 15 }} />

              <Typography 
                variant='h6'
                sx={{ 
                  fontFamily:'arvo',
                  color:'green'
                 }}
              >
                Account Details
              </Typography>

              <div style={{ height: 15 }} />
              <Grid item sx={{ width: "100%" }}>
                <FormControl variant="outlined" sx={{ width: "100%" }}>
                  <InputLabel id="demo-simple-select-helper-label">
                    User Role
                  </InputLabel>
                  <Select
                    {...register("role")}
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    label="User Role"

                    value={user_role}
                    onChange={(event) => {
                      setRole(event.target.value);
                      setButtonState(false);
                    }}
                  >
                    <MenuItem value={"Admin"}>Admin</MenuItem>
                    <MenuItem value={"Super Admin"}>Super Admin</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <div style={{ height: 10 }} />
              <Grid item style={{ width: "100%" }}>
                <TextField
                  {...register("password")}
                  label={"Password"}
                  style={{ width: "100%" }}
                  value={pass}
                  onChange={(event) => {
                    setPass(event.target.value);
                    setButtonState(false);
                  }}
                  type="password"
                />
              </Grid>

              <div style={{ height: 15 }} />

              <Grid item style={{ width: "100%" }}>
                <TextField
                  {...register("re_type_password")}
                  label={"Re-type Password"}
                  style={{ width: "100%" }}
                  value={rePass}
                  onChange={(event) => {
                    setRePass(event.target.value);
                    setButtonState(false);
                  }}
                  type="password"
                />
              </Grid>
              <Grid
                item
                style={
                  passView
                    ? { pl: 2, width: "100%", display: "flex" }
                    : { display: "none" }
                }
              >
                <Typography variant="caption" sx={{ color: "red" }}>
                  {passResult}
                </Typography>
              </Grid>

              <div style={{ height: 15 }} />
            </Stack>

            <div style={{ width: 20 }} />

            <Stack direction='column' sx={{ width:380 }}>
              <Typography 
                  variant='h6'
                  sx={{ 
                    fontFamily:'arvo',
                    color:'green'
                  }}
                >
                Contact Details
              </Typography>
              <div style={{ height: 10 }} />

              <Grid item style={{ width: "100%" }}>
                <TextField
                  {...register("address")}
                  label={"Address"}
                  style={{ width: "100%" }}
                  value={user_address}
                  onChange={(event) => {
                    setAddress(event.target.value);
                    setButtonState(false);
                  }}
                />
              </Grid>

              <div style={{ height: 15 }} />
              <Grid item style={{ width: "100%" }}>
                <TextField
                  {...register("email")}
                  label={"Email"}
                  style={{ width: "100%" }}
                  value={user_email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                    setButtonState(false);
                  }}
                />
              </Grid>

              <div style={{ height: 15 }} />
              <Stack direction='row'>
                
                <Grid item sx={{ width: "100%" }}>
                  <FormControl variant="outlined" sx={{ width: 160 }}>
                    <InputLabel id="demo-simple-select-helper-label">
                      Type
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      label="User Role"

                      value={contact_type}
                      onChange={(event) => {
                        setContactType(event.target.value);
                        setButtonState(false);
                      }}
                    >
                      <MenuItem value={"Mobile"}>Mobile</MenuItem>
                      <MenuItem value={"Telephone"}>Telephone</MenuItem>
                      <MenuItem value={"Day Phone"}>Day phone</MenuItem>
                      <MenuItem value={"Evening Phone"}>Evening phone</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                <div style={{ width: 25 }} />
                <Grid item style={{ width: "100%" }}>
                  <TextField
                    label={"Contact Number"}
                    style={{ width: 160}}
                    value={contact_number}
                    onChange={(event) => {
                      setContactNumber(event.target.value);
                      setButtonState(false);
                    }}
                  />
                </Grid>

                <div style={{ width: 15 }} />
                <Grid item style={{ width: "100%" }}>
                  <IconButton size="large" sx={{ p:1 }}  onClick={
                    () => {
                      handleAddContact(); 
                      setButtonState(false);
                      }
                    }
                  >
                    <MdAddCircle  style={{fontSize:38}}/>
                  </IconButton>
                </Grid>
              </Stack>
              
              <div style={{ height: 15 }} />
              <Grid sx={{ backgroundColor:"#D9D9D9", borderRadius:1, p:2, pb:3, maxHeight:170, overflowY:'scroll'}}>
               <Typography variant='body1' align='center' sx={{ fontFamily:'arvo', width:'100%', display: contact.length === 0? true :'none' }}>
                No contacts
               </Typography>
               {contact.map((contact, index) => {
                  return (
                    <Grid item key={contact.number} sx={{ width: "100%" }}>
                      <ContactCard
                        index={index}
                        number={contact.number}
                        type={contact.type}
                        remove={(index, contactNumber) =>
                          handleRemoveContact(index, contactNumber)
                        }
                        changeButton={() => setButtonState(false)}
                      />
                    </Grid>
                  );
                })}
              </Grid>
              
            </Stack>

          </Stack>         
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
            disabled={buttonState}
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

      <Dialog open={openConfirmation} onClose={handleCloseConfirmation}>
        {/* <UserRegConfirmation
          onClose={() => handleCloseConfirmation()}
          newUser={() => handleCreateNewUser}
        /> */}
      </Dialog>
    </Grid>
  );
};

export default EditUserForm;
