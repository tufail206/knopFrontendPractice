import { PaletteOptions as PaletteOptionsMUI, ThemeOptions as ThemeOptionsMUI ,TypographyProps} from "@mui/material";

declare module '@mui/material/styles' {
     
    interface PaletteOptions extends PaletteOptionsMUI {
        
    }


    interface Shadows {
        //small , medium , large
        small: string;
        medium: string;
        large: string;
    }


 
  



    interface ColorSchemes {
        light: string;
        dark: string;
        contrast: string;
        contrastText: string;
        primaryText: string;
        secondaryText: string;
        background: string;
        backgroundText: string;
        backgroundSecondary: string;
        backgroundContrast: string;
        backgroundContrastText: string;
        backgroundContrastSecondary: string;
        backgroundContrastPrimary: string;
        backgroundContrastSecondaryText: string;
        backgroundContrastPrimaryText: string;
        backgroundContrastTertiary: string;
        backgroundContrastTertiaryText: string;
        backgroundContrastQuaternary: string;
        backgroundContrastQuaternaryText: string;
        backgroundContrastQuinary: string;
        backgroundContrastQuinaryText: string;
    }

    interface TypographyProps{
        fontFamily?: string;
        fontColor?: string;
        

    }
    interface Theme {
        customShadow?: Partial<Shadows>;
        colorSchemes?:Partial<ColorSchemes>;

    }

    interface ThemeOptions extends ThemeOptionsMUI {
        customShadow?: Partial<Shadows>
        colorSchemes?: Partial<ColorSchemes>
        typography?: Partial<Typography> ;
        background?: Partial<Background>



    }
}
