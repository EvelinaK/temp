
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import InputBase from "@material-ui/core/InputBase";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Icon from '@material-ui/core/Icon';
// import LockOutlinedIcon from '@material-ui/core/LockOutlined';
import Typography from '@material-ui/core/Typography';
 import {createTheme,ThemeProvider } from '@material-ui/core/styles';
 import {
    alpha,
    withStyles,
  } from "@material-ui/core/styles";
 import InputAdornment from "@material-ui/core/InputAdornment";




  const useStyles = makeStyles(theme => ({

    root: {
        border: "none",
        overflow: "hidden",
        borderRadius: 5,
        backgroundColor: "#F1FAF7",
        transition: theme.transitions.create(["border-color", "box-shadow"]),
        width:'100%',
        
        "&:hover": {
          backgroundColor: "#fffff",
          borderColor: "transparent",
        },
        
        "&:focus": {
          backgroundColor: "#fffff",
          borderColor: theme.palette.primary.main,

          
        },
      
      },
      icon :{
        color:'#949494',
     }

  }));

  



const CustomField = (props) => {
  console.log(props)
  const { name, placeholder, value,error=null, onChange,id } = props;
  const classes = useStyles();
  const [isFocused, setIsFocused] = useState(true);



  const hadleFocus = () => {
    setIsFocused(false)
  };

  return (
<>           
          <TextField
        className={classes.root}
        variant="outlined"
        placeholder={placeholder}
        id={id}
        value={value}
        name={name}
        onFocus={hadleFocus}
        onBlur={()=>setIsFocused(true)}
  
        onChange={onChange}
        {...(error && {error:true,helperText:error})}
       InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PermIdentityIcon  className={classes.icon} />
              </InputAdornment>
            )
          }}

      // startAdornment={
      //   isFocused ? <InputAdornment position="start">
      //     <PermIdentityIcon  className={classes.icon} />
      //   </InputAdornment> : null
      // }

      />

</>
   

  );
};
export default CustomField ;
