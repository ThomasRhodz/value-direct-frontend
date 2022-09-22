import { Divider, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import LoginForm from '../forms/LoginForm'
import Logo from "../../images/ValueDirectLogo5.png";
const Login = () => {
  return (
    <Grid container direction='row' alignItems='center' sx={{ width:900, height:500, backgroundColor:'gray', border: '1px solid #7FB77E', borderRadius:8, position: 'absolute', top:'50%', left: '50%', transform: 'translate(-50%, -50%)', overflow:'hidden' }}>
        
        <Grid item sx={{ flexGrow: 1, height:500, backgroundColor:'#42855B',p: 2, pt:5  }}>
            <Stack direction='column' alignItems='center' sx={{ width:'100%' }}>
            
                
                <div style={{ height:80 }}/>
                <Typography align='center' sx={{ fontFamily:'arvo', fontSize:15, color: 'white' }}>
                    WELCOME TO
                </Typography>

                <Grid style={{ marginTop: '-15px' }}>
                    <img src={Logo} alt='logo' style={{width:250, height:120}}/>
                </Grid>
                <div style={{ height:15 }}/>
                <Typography variant='caption' align='center'sx={{ fontFamily: 'Raleway', color: '#C4DFAA', maxWidth:350 }}>
                    To keep connected and work with us, please enter your account credentials to login. 
                </Typography>
            </Stack>

        </Grid>

        <Grid item sx={{ width:450, height:500, backgroundColor:'white' }}>
            <LoginForm />
        </Grid>
    </Grid>
  )
}

export default Login