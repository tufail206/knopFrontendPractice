import {
    PaletteOptions as PaletteOptionsMUI,
    SimplePaletteColorOptions as SimplePaletteColorOptionsMUI,
    ThemeOptions as ThemeOptionsMUI,
    TypeText as TypeTextMUI,
    TypographyProps as MuiTypographyProps
} from '@mui/material';

PaletteOptions;
declare module '@mui/material/styles' {
    interface PaletteOptions extends PaletteOptionsMUI {
        mainBg: string;
       

     

        button: {
            primary: string;
        };

        border: {
            primary: string;
        };

        text: {
            primary: string;
            secondary: string;
        };

        background: {
            primary: string;
        };
    }
 

    interface TypographyProps extends MuiTypographyProps {
        children: React.ReactNode;
        weight?: number;
        color?: string;
        as?: React.ElementType; // Allows changing the element type (like h1, p, etc.)
        sx?: React.CSSProperties; // For additional styling using `sx` prop
        paragraph?: boolean;
    }
    interface Palette extends PaletteOptions { }

    interface SimplePaletteColorOptions extends SimplePaletteColorOptionsMUI {
        shade1?: string;
        shade2?: string;
    }

    interface TypeText extends TypeTextMUI {
        main: string;
        shade1: string;
        shade2: string;
        shade3: string;
        shade4: string;
        shade5: string;
    }
     interface Space{
        spaceWide:number;
        spaceNarrow:number;
        spaceExtraWide:number;
     }
    interface Shape {
        borderRadius: number;
        borderRadiusSmall: number;
        borderRadiusMedium: number;
        borderRadiusLarge: number;
        borderRadiusRound: number;
    }
    
    interface ThemeOptions extends ThemeOptionsMUI {
        shape?: Partial<Shape>;
        shadow?: string[];
        space?: Partial<Space>;
    }

    interface Theme {
        shape: Shape;
        space: Space;
    }
}