
import  React ,{ useState} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@mui/material/Grid';
import Typography from '@material-ui/core/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {makeStyles} from "@material-ui/core/styles";
import { alpha, styled } from '@mui/material/styles';
 import CustomField from '../input/InputField'
 import CustomPassword from '../inputPassword/inputPassword'

// import style from './form-style'
 import CustomButton from "../item"
import Sidebar from "../sidebar/sidebar"
import googlePlus from "../../image/icons/googlePlus.svg"
import facebook from "../../image/icons/facebook.svg"
import Icon from '@material-ui/core/Icon';

import InputAdornment from "@material-ui/core/InputAdornment";
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import IconButton from '@mui/material/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';


 import { withStyles } from '@material-ui/core/styles'

import { createStyles } from '@material-ui/core/styles'

import { Formik, Field, Form, ErrorMessage  } from 'formik';
import * as yup from "yup";



const signupSchema = yup.object().shape({
  name: yup.string().required("This field is required."),
  email: yup
    .string()
    .email("Invalid email")
    .required("This field is required."),
  password: yup
    .string()
    .min(6, "Password is too short.")
    .max(20, "Password is too long.")
    .required("This field is required."),
    repeatPassword: yup
    .string().when("password", {
      is: val => (val && val.length > 0 ? true : false),
      then: yup.string().oneOf(
        [yup.ref("password")],
        "Both password need to be the same"
      )
      .required("This field is required."),
    })
});





  const style = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      backgroundColor:theme.palette.secondary.main,
    },
    title: {
      '&&': {
      flexGrow: 1,
      color:theme.palette.secondary.main,
      fontFamily:theme.typography.h2,
      fontSize:theme.typography.h2.fontSize,
      fontWeight:theme.typography.h2.fontWeight,
      }
    },
   text: {
    '&&': {
      flexGrow: 1,
      color:'#949494',
    }
    },
    paper: {
      marginTop: "1rem",
      padding: "1rem"
    },
    imgCont:{
     display:'flex',
     height:'auto',
     padding: '45px 0',
    },
    fab: {
      position: "absolute",
      bottom: theme.spacing(2),
      right: theme.spacing(2)
    },
    iconImg:{
      display:'flex',
      height:'20px',
      width:'auto',
      marginRight:'30px',
      '&:nth-last-of-type(1)': {
        marginRight:'0',
      },

    },
    form:{
      '&&': {
        width: '100%',
        maxWidth: '380px',
            // padding:0,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          
          // padding: theme.spacing(2),
          margin: {
            // margin: theme.spacing(1)
          },  '& .MuiTextField-root': {
            margin: theme.spacing(1),
        
          },
          '& .MuiButtonBase-root': {
        
          },
      },
    },
    icon :{
      color:'#949494',
   }
  }));




const FormComponent = () => {
  const classes = style()
 
  const initialValues = {
    name: "",
    email: "",
    password: "",
    repeatPassword: "",
};


  function onSubmit( event ,values, { setStatus, setSubmitting }) {
    event.preventDefault();
    setStatus();

    console.log(values)
     console.log('submit')
  }


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
            <Typography className={classes.title} component="h1" variant="h2">
            Create Account
            </Typography>


            <Link
            variant="body2"
              >
          <div className={classes.imgCont}>
            <img src={facebook} className={classes.iconImg} alt="facebook" />
            <img src={googlePlus} className={classes.iconImg} alt="google"/>
          </div>
           </Link>
    
            <Typography className={classes.text} component="h2" >
            or use your email for registration
            </Typography>

            <Box className={classes.form}  sx={{ mt: 1 }}>
            <Formik initialValues={initialValues} 
                  validationSchema={signupSchema} 
                  onSubmit={onSubmit}
                  enableReinitialize>
          {({values, setFieldValue, handleChange, handleSubmit,  errors, touched, enableReinitialize}) => 

          (
            <Form  onSubmit={handleSubmit} enableReinitialize={enableReinitialize}>
              {console.log(values)}
                     <Field 
                      value={values.name}
                      error={errors.name && touched.name}
                      onChange={handleChange}
                      name="name"
                      placeholder="Name"
                      type="text"
                      id="name"
                      label="First Name"
                      autoComplete="name"
                      autoFocus
                      inputIcon={<PermIdentityIcon  className={classes.icon} />}
                      helperText={
                        errors.name && touched.name
                          ? errors.name
                          : null
                      }
                      component={CustomField}
                      />
                      <Field  
                      value={values.email}
                      error={errors.email && touched.email}
                      fullWidth
                      onChange={handleChange}
                      id="email"
                      label="Email Address"
                      name="email"
                      placeholder="Email Address"
                      type="text"
                      autoComplete="email"
                      autoFocus
                      inputIcon={<EmailOutlinedIcon  className={classes.icon} />}
                      helperText={
                        errors.email && touched.email ? errors.email : null
                      }
                      component={CustomField}
                      />
                      <Field 
                      value={values.password}
                      error={errors.password && touched.password}
                      fullWidth
                      onChange={handleChange}
                      name="password"
                      label="Password"
                      id="password"
                      placeholder="password"
                      autoComplete="current-password"
                      inputIcon={<LockOutlinedIcon  className={classes.icon} />}
                      helperText={
                       errors.password && touched.password
                         ? errors.password
                         : null
                     }
                      component={CustomPassword}
                      />
                       <Field 
                       value={values.repeatPassword}
                       error={errors.repeatPassword && touched.repeatPassword}
                       fullWidth
                       onChange={handleChange}
                       name="repeatPassword"
                       label="Password"
                       id="repeatPassword"
                       placeholder="repeatPassword"
                       autoComplete="current-password"
                     inputIcon={<LockOutlinedIcon  className={classes.icon} />}
                     helperText={
                       errors.repeatPassword && touched.repeatPassword
                         ? errors.repeatPassword
                         : null
                     }
                      component={CustomPassword}
                      />     

                           <FormControlLabel
                control={<Checkbox   color="primary" value="remember"/>}
                label="I agree to the Terms of User"
              />
              <Button 

                type="submit"
                fullWidth
                // variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>   
            </Form>
          )}
        </Formik>
              {/* <Grid container>
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
              </Grid> */}
            </Box>
          </Box>
        </Grid>
      </Grid>
  );
};
export default FormComponent;