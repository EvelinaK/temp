
// import React, { useState } from 'react';
// import { makeStyles } from '@material-ui/core';
// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';
//  import Avatar from '@material-ui/core/Avatar';
//  import CssBaseline from '@material-ui/core/CssBaseline';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
// import Paper from '@material-ui/core/Paper';
// import Box from '@material-ui/core/Box';
// import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';
//  import {createTheme,ThemeProvider } from '@material-ui/core/styles';

import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {makeStyles} from "@material-ui/core/styles";
import { alpha, styled } from '@mui/material/styles';
 import CustomField from '../input/InputField'
// import style from './form-style'
 import CustomButton from "../item"
import Sidebar from "../sidebar/sidebar"
 import { withStyles } from '@material-ui/core/styles'

import { createStyles } from '@material-ui/core/styles'

import { Formik, Field, Form, ErrorMessage  } from 'formik';
import * as yup from "yup";



let SignupSchema = yup.object().shape({
  Name: yup.string().required("This field is required."),
  email: yup
    .string()
    .email()
    .required("This field is required."),
  password: yup
    .string()
    .min(6, "Password is too short.")
    .max(20, "Password is too long.")
    .required("This field is required."),
    RepeatPassword: yup
    .string()
    .min(6, "Password is too short.")
    .max(20, "Password is too long.")
    .required("This field is required.")
});






  const style = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      backgroundColor:theme.palette.secondary.main,
    },
    button: {
      '&&': {
        marginRight: theme.spacing(2),
        backgroundColor:theme.palette.secondary.main,
        maxWidth:'280px',
        display:'flex',
        justifyContent:'center',
        margin: '0 auto',
        borderRadius: '30px',
        padding: '21px 16px',
        color: 'white',
        '&:hover': {
          background: '#FFFFFF',
          border:`1px solid ${theme.palette.secondary.main}`,
          color:theme.palette.secondary.main,
      },
      
      }, 

    },
    checkbox:{
      '&&': {
        color: "#1AAA8D",
        "&&:hover": {
          color: "#1AAA8D"
        },
        "&&$checked": {
          color: "#1AAA8D",
          "&&:hover": {
            color: "#1AAA8D"
          },
          "&&.Mui-focusVisible": {
            color: "#1AAA8D"
          },
      },
      checked: {}
    }
  },
    title: {
      flexGrow: 1,
      color:theme.palette.secondary.main,
    },
    paper: {
      marginTop: "1rem",
      padding: "1rem"
    },
    fab: {
      position: "absolute",
      bottom: theme.spacing(2),
      right: theme.spacing(2)
    },
    form:{
      '&&': {
        width: '100%',
        maxWidth: '380px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          
          padding: theme.spacing(2),
          margin: {
            margin: theme.spacing(1)
          },  '& .MuiTextField-root': {
            margin: theme.spacing(1),
        
          },
          '& .MuiButtonBase-root': {
            margin: theme.spacing(2),
          },
      },
    }
  }));





const FormComponent = ({ handleClose }) => {
  const classes = style()
 


  const initialValues = {
    Name: "",
    email: "",
    password: "",
    RepeatPassword: "",
};


  // const [firstName, setFirstName] = useState('');
  // const [lastName, setLastName] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   console.log(firstName, lastName, email, password);
  //   handleClose();
  // };

  function onSubmit( event ,values, { setStatus, setSubmitting }) {
    event.preventDefault();
    setStatus();

console.log(values)
console.log('submit')
    // if (isAddMode) {
    //   createFormProduct(values, setSubmitting);
    // } else {
    //   updateFormProduct(id, values, setSubmitting);
    // }
  }




  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);

  //   console.log({
  //     email: data.get('email'),
  //     password: data.get('password'),
  //   });
  // };


  return (

 <Grid container component="main" sx={{ height:'100vh'}}>
        <CssBaseline />
    <Sidebar/>
        <Grid item xs={12} sm={8} md={7} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >

            <Typography className={classes.title} component="h1" variant="h5">
            Create Account
            </Typography>


            <Box className={classes.form}  sx={{ mt: 1 }}>
            <Formik initialValues={initialValues} 
                  validationSchema={SignupSchema} 
                  onSubmit={onSubmit}
                  enableReinitialize>
          {({values, setFieldValue, handleChange, handleSubmit,  errors, touched, enableReinitialize}) => 

          (
            <Form  onSubmit={handleSubmit} enableReinitialize={enableReinitialize}>
              <Field value={values.Name}
               error={errors.Name && touched.Name}
                      onChange={handleChange}
                      name="name"
                      placeholder="Name"
                      type="text"
                      id="Name"
                      label="First Name"
                      autoFocus
                      // helperText={
                      //   errors.Name && touched.Name
                      //     ? errors.Name
                      //     : null
                      // }
                      component={CustomField}
                      />
                      <Field  value={values.email}
                      error={errors.email && touched.email}
                      fullWidth
                      onChange={handleChange}
                      id="email"
                      label="Email Address"
                      name="email"
                      placeholder="Email Address"
                      type="text"
                      autoComplete="email"
                      // helperText={
                      //   errors.email && touched.email ? errors.email : null
                      // }
                      component={CustomField}
                      />
                      <Field value={values.password}
                     error={errors.password && touched.password}
                     fullWidth
                     onChange={handleChange}
                     name="password"
                     label="Password"
                     type="password"
                     id="password"
                     placeholder="password"
                     autoComplete="current-password"
                    //  helperText={
                    //    errors.password && touched.password
                    //      ? errors.password
                    //      : null
                    //  }
                      component={CustomField}
                      />
                       <Field value={values.RepeatPassword}
                     error={errors.RepeatPassword && touched.RepeatPassword}
                     fullWidth
                     onChange={handleChange}
                     name="RepeatPassword"
                     label="Password"
                     type="password"
                     id="RepeatPassword"
                     placeholder="password"
                     autoComplete="current-password"
                    //  helperText={
                    //    errors.RepeatPassword && touched.RepeatPassword
                    //      ? errors.RepeatPassword
                    //      : null
                    //  }
                      component={CustomField}
                      />     

                           <FormControlLabel
                control={<Checkbox className={classes.checkbox}  value="remember"/>}
                label="I agree to the Terms of User"
              />
              <Button 
              className={classes.button}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>   
            </Form>
          )}
        </Formik>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
  );
};
export default FormComponent;
