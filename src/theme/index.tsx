import { createTheme } from "@mui/material";

 const AppTheme=createTheme({
    palette:{
         mainBg:"#1976d2",
         primary:{
            main:'#1976d2',
           
        },
      border:{
          primary:"#707070"
      },
      button:{
          primary:"##2C64E3",
       
      },
      text:{
          primary: '#fff5fC',
          secondary: '#252B5C',
         
      }
        
    },
   
     shape: {
         borderRadius: 8,
         borderRadiusSmall: 4, // Small radius for specific cases
         borderRadiusMedium: 8, // Medium radius for general components
         borderRadiusLarge: 16, // Large radius for cards, dialogs, etc.
         borderRadiusRound: 50,
     },
     shadow:[
            'none',
            "0px 0px 10px 0px black",
            "0px 0px 10px 0px black"
     ],
     space:{
        spaceWide:12,
        spaceExtraWide:30,
        spaceNarrow:20,
     }
   
})

export default AppTheme;