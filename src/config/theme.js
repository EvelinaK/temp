import React from 'react';
import { createTheme, ThemeProvider, Button } from '@material-ui/core';

//  const theme = createTheme({
//   palette: {
//     primary: {
//       main: "#1AAA8D"
//     },
//     secondary: {
//       main: "#30B78D"
//     }
//   },
//   typography: {
//     fontFamily: "Mulish",
//     body2: {
//       fontFamily: "Mulish",
//       fontSize: "1.1rem"
//     }
//   },
//   shape: {
//     borderRadius: 30
//   },
//   spacing: 8,
//   overrides: {
//     MuiFilledInput: {
//       root: {
//         backgroundColor: "green"
//       }
//     },
//     MuiInputLabel: {
//       root: {
//         backgroundColor: "yellow"
//       }
//     },
//     MuiTextField: {
//       root: {}
//     },
//     MuiButton: {
//       root: {
//         textTransform: "none",
//         padding: "20px"
//       },
//       fullWidth: {
//         maxWidth: "300px"
//       }
//     }
//   },
//   props: {
//     MuiButton: {
//       disableRipple: true,
//       variant: "contained",
//       color: "primary"
//     },
//     MuiCheckbox: {
//       disableRipple: true
//     },
//     MuiTextField: {
//       variant: "filled",
//       InputLabelProps: {
//         shrink: true
//       }
//     },
//     MuiPaper: {
//       elevation: 12
//     },
//     MuiCard: {
//       elevation: 12
//     }
//   }
// });


 let theme = createTheme({
  palette: {
        type: 'light',
        primary: {
          main: '#1AAA8D',
        },
        secondary: {
          main: '#30B78D',
        },
        error:{
          main: '#30B78D',
        }
      }, fontFamily: [
        'Mulish',
      ].join(','),
      components: {
          TextField: {
            styleOverrides: {
            root: {
              '&&:after, &&&:before': {
                borderBottom: 'none',
              }
            }, 
          },
          },
          MuiCheckbox:{
            styleOverrides: {

            colorSecondary: {
      
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
          },
          },
      }, 
     
});   



 export default theme;

