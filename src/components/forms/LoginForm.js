//For components
import { Grid, TextField, Stack, Button, Typography } from "@mui/material";
import React, { useEffect } from "react";
import Logo from '../../images/ValueDirectLogo.png'

//For Styling
import "../../style/styles.css";

//For api call methods
import { useGetUserTokenQuery } from "../../services/authApi";

//For data handling
import { useForm } from "react-hook-form";
import { navigate } from "gatsby";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { selecAuthKey, selecRefKey, setAuth, setAuthToker, setRefToker } from "../../redux/auth";

//Schema: Rules for inputs
const schema = yup.object({
  // email: yup.string().required('Username Required'),
  // password: yup.string().required('Password is required'),
});

const LoginForm = ({toast}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch();
  const authKey = useSelector(selecAuthKey);
  const refKey = useSelector(selecRefKey);
  const [getToken] = useGetUserTokenQuery();

  const onSubmit = (data) => {
    console.log(data);

    const credentials = {
      email: data.email,
      password: data.password,
    };

    // const {data:userToken} = getToken(credentials)
    // console.log(JSON.stringify(userToken))
    
    dispatch(setAuthToker({YOUR_AUTH_KEY:'hi'}))
    dispatch(setRefToker({YOUR_REFRESH_KEY:'hello'}))


    console.log(authKey.YOUR_AUTH_KEY, ' & ' , refKey.YOUR_REFRESH_KEY)
  
  };

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      sx={{
        width: '100%',
        height: 450,
        padding: 7
      }}
    >
      <Grid item sx={{ width: "100%" }}>
        <Stack
          direction="column"
          align="center"
          spacing={2}
          sx={{ width: "100%" }}
        >
          
          <Typography align='center' sx={{ fontFamily:'arvo', fontWeight:'bold', fontSize:25, color: '#42855B' }}>
            Sign In to Visual Direct Inc.
          </Typography>
          <div style={{ height: 5 }} />
          <form style={{ width: "100%" }} onSubmit={handleSubmit(onSubmit)}>
            <TextField
              {...register("email")}
              variant="filled"
              label="Email"
              type="text"
              InputProps={{ disableUnderline: true, fontFamily:'arvo' }}
              sx={{ width: "100%" }}
            />
            <div style={{ height: 15 }} />
            <TextField
              {...register("password")}
              variant="filled"
              label="Password"
              type="password"
              InputProps={{ disableUnderline: true }}
              sx={{ width: "100%" }}
            />
            <div style={{ height: 20 }} />
            <Typography variant='subtitle1' sx={{ fontFamily:'raleway' }}>
              Forgot your password?
            </Typography>
            <div style={{ height: 35 }} />
            {/* <Button
              variant="contained"
              type="submit"
              className={"logInButton"}
              sx={{
                backgroundColor: "#42855B",
                color: "white",
                width: 200,
                fontFamily: "Arvo",
                borderRadius:10,
              }}
            >
              Login
            </Button> */}
            <Button
              variant="contained"
              onClick={() => navigate("/module")}
              className={"logInButton"}
              size='large'
              sx={{
                backgroundColor: "#42855B",
                color: "white",
                width: 200,
                height:50,
                fontFamily: "Arvo",
                borderRadius:10,
              }}
            >
              Login
            </Button>
          </form>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default LoginForm;
