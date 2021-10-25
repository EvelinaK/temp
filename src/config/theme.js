import React from 'react';
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';
import { NoEncryption } from '@material-ui/icons';

//  const theme = createTheme({
//   palette: {
//     primary: {
//       main: "#1AAA8D"
//     },
//     secondary: {
//       main: "#30B78D"
//     }
//   },
//   fontFamily: [
//             'Mulish',
//           ].join(','),
//   typography:  {
//     root:{
//     fontFamily: "Mulish",
//     body2: {
//       fontFamily: "Mulish",
//       fontSize: "1.1rem"
//     },
//     h1: {
//       fontFamily: "Mulish",
//       fontSize: "48px",
//       fontWeight: 600,
//     }
//   }
//   },
//   // shape: {
//   //   borderRadius: 30
//   // },
//   spacing: 8,
//   overrides: {
//     MuiFilledInput: {
//       root: {
//         backgroundColor: "green"
//       }
//     },
//     MuiInputBase: {
//       root: {
//         background: "white",
//         "&$focused": {
//           borderColor: "green",
//           backgroundColor: "white",
//         }
//       },
     
//     },
//     MuiOutlinedInput:{
//       root: {
//         backgroundColor: "#F1FAF7",
//         fontFamily: "Mulish",
//         caretColor:'#30B78D',

//           "& $notchedOutline": {
//             borderColor: "transparent",
//             backgroundColor: "transparent",
//           },
//           "&:hover $notchedOutline": {
//             borderColor: "transparent",
//             backgroundColor: "transparent",
//           },
//           "&$focused $notchedOutline": {
//             borderColor: "#30B78D"
//           }
//         },
//     },
//     MuiTextField: {
//       root: {
//         border: "none",
//         borderRadius: 5,
//     // backgroundColor: "#F1FAF7",
//         // transition: theme.transitions.create(["border-color", "box-shadow"]),
//         width:'100%',
        
//         "&:hover": {
   
//           borderColor: "transparent",
//         },
        
//         "&:focus": {
      
//           // borderColor: theme.palette.primary.main,   
//         },
//       }
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
//   MuiCheckbox: {
//       root: {
//               color: "#1AAA8D",
//               "&&:hover": {
//                 color: "#1AAA8D"
//               },
//               '&.Mui-checked': {
//                 color: "#1AAA8D",
//               },
//               "&&$checked": {
//                 color: "#1AAA8D",
//                 "&&:hover": {
//                   color: "#1AAA8D"
//                 },
//                 "&&.Mui-focusVisible": {
//                   color: "#1AAA8D"
//                 },
//             },
//             checked: {

//             }   
//     }
//   },
//   props: {
//     MuiButton: {
//       disableRipple: true,
//       variant: "contained",
//       color: "primary"
//     },
//     MuiCheckbox: {
//       disableRipple: true,
//       color:'#30B78D',
//     },
//     MuiTextField: {
//       // variant: "filled",
//       // InputLabelProps: {
//       //   shrink: true
//       // }
//     },
//     MuiPaper: {
//       elevation: 12
//     },
//     MuiCard: {
//       elevation: 12
//     }
//   }
// });


//  let theme = createTheme({
//   palette: {
//         type: 'light',
//         primary: {
//           main: '#1AAA8D',
//         },
//         secondary: {
//           main: '#30B78D',
//         },
//         error:{
//           main: '#30B78D',
//         }
//       },
//       typography: {
//             fontFamily: "Mulish",
//             h2: {
//               fontFamily: "Mulish",
//               fontSize: "48px",
//               fontWeight: 600,
//             }
            
//           },
//        fontFamily: [
//         'Mulish',
//       ].join(','),
//       components: {

//         MuiTextField: {

//           styleOverrides: {

//             root: {  
//               border: "none",
//               overflow: "hidden",
//               borderRadius: 5,
//               backgroundColor: "#F1FAF7",
//             //  transition: theme.transitions.create(["border-color", "box-shadow"]),
//               width:'100%',
//               caretColor:'#1AAA8D',
//             }, 
//           },

//         },
//           MuiCheckbox:{

//             styleOverrides: {

//             colorSecondary: {
//                     '&&': {
//                    backgroundColor: "#1AAA8D",
//                     "&&:hover": {
//                        color: "#1AAA8D"
//                        },
//                    "&&$checked": {
//                     color: "#1AAA8D",
//                   "&&:hover": {
//                    color: "#1AAA8D"
//                      },
//                    "&&.Mui-focusVisible": {
//                   color: "#1AAA8D"
//                  },
//       },
//       checked: {}
//     }
              
//             },
//           },
//           },
//       }, 
     
// });   



// const theme = createTheme({
//   overrides: {
//     // Name of the component ⚛️ / style sheet
//     MuiButton: {
//       // Name of the rule
//       root: {
//         // Some CSS
//         background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//         borderRadius: 3,
//         border: 0,
//         color: 'white',
//         height: 48,
//         padding: '0 30px',
//         boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//       },
//     },
//   },
// });

let theme = createTheme({
  palette: {
    primary: {
      main: "#1AAA8D"
    },
    secondary: {
      main: "#30B78D"
    }
  },
  fontFamily: [
            'Mulish',
          ].join(','),
  typography:  {
    root:{
    fontFamily: "Mulish",
    body2: {
      fontFamily: "Mulish",
      fontSize: "1.1rem"
    },
    h1: {
      fontFamily: "Mulish",
      fontSize: "48px",
      fontWeight: 600,
    }
  }
  },
  spacing: 8,
});

// theme = createTheme(theme, {

//   overrides: {
//     // Name of the component ⚛️ / style sheet
//     MuiButton: {
//       // Name of the rule
//       root: {
//         // Some CSS
//         background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//         borderRadius: 3,
//         border: 0,
//         color: 'white',
//         height: 48,
//         padding: '0 30px',
//         boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//       },
//     },
//   },

// });
theme = createTheme(theme, {
  overrides: {
    MuiFilledInput: {
      root: {
        backgroundColor:  theme.palette.primary.main
      }
    },
    MuiButton: {
      root: {
        background: theme.palette.secondary.main,
          border: 0,
          color: 'white',
          height: 48,
          padding: '0 30px',
          boxShadow: '0 3px 5px 2px rgba(220 228 226 / 50%)',
        maxWidth:'280px',
        display:'flex',
        justifyContent:'center',
        margin: '0 auto',
        borderRadius: '30px',
        '&:hover': {
          background: '#FFFFFF',
          backgroundColor: "FFFFFF",
          border:`1px solid ${theme.palette.secondary.main}`,
          color:theme.palette.secondary.main,
         },
      }, 
    },

    MuiInputBase: {
      root: {
        background: "white",
        "&$focused .MuiIconButton": {
          borderColor:  theme.palette.primary.main,
         backgroundColor: "white",
          
        }
      },
   
    },
    MuiOutlinedInput:{
      root: {
        backgroundColor: "#F1FAF7",
        fontFamily: "Mulish",
        caretColor:theme.palette.primary.main,

          "& $notchedOutline": {
            borderColor: "transparent",
            backgroundColor: "transparent",
          },
          "&:hover $notchedOutline": {
            borderColor: "transparent",
            backgroundColor: "transparent",
          },
          "&$focused $notchedOutline": {
            borderColor: 'theme.palette.primary.main',

           "&&MuiIconButton":{}
          },
        },
    },
    MuiTextField: {
      root: {
        border: "none",
        borderRadius: 5,
        // transition: theme.transitions.create(["border-color", "box-shadow"]),
        width:'100%',
        
        "&:hover": {
          borderColor: "transparent",
        },
        
        "&:focus": {
           borderColor: theme.palette.primary.main,   
        },
      }
    },

    MuiCheckbox: {
      root: {
        color: "#1AAA8D",
        "&&:hover": {
          color: theme.palette.primary.main,
        },
        '&.Mui-checked': {
          color:theme.palette.primary.main,
        },
        "&&$checked": {
          color: theme.palette.primary.main,
          "&&:hover": {
            color:theme.palette.primary.main,
          },
          "&&.Mui-focusVisible": {
            color: "#1AAA8D"
          },
      },
      checked: {} 
      }
    },
    MuiIconButton:{
      root: {
        color: '#949494',
    

      }
    },
  }
});







 export default theme;

