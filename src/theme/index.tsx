import { createTheme } from "@mui/material";

export const AppThme=createTheme({
    palette: {
        primary: {
            main: '#1976D2',
          
        },
        secondary: {
            main: '#1976D4',
        },
        
        text: {
            primary: '#fff',
            secondary: '#757575',
        },
        
    },
   customShadow: {
   small:"0px 0px 10px -4px black",
   medium:"0px 0px 20px 1px black",
   large:"0px 0px 30px 2px black",
   },
   typography:{
    fontFamily: "'Poppins', sans-serif",
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,  
   },
   colorSchemes:{
    light: '#fff',
    dark: '#000',
    contrast: '#baafaf',
       primaryText: '#252B5C',
       secondaryText: '#53587A',

   }
})