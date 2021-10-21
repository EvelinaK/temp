import * as React from 'react';
import Grid from '@mui/material/Grid';
import {makeStyles} from "@material-ui/core/styles";


const style = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      backgroundColor:theme.palette.secondary.main,
    },
    
  }));



const Sidebar = () => {
    const classes = style()
  
  return (
<>           
<Grid  
          item 
          className={classes.root}
          xs={false}
          sm={4}
          md={5}
          sx={{
          }}
          />

</>
   

  );
};
export default Sidebar ;
