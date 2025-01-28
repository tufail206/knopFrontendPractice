import { Typography, styled } from "@mui/material";

// Define the styled Typography component
const StyledTypographyUI = styled(Typography)<{
    weight?: number;
    color?: string;
    paragraph?: boolean;
   

}>(
    ({theme, weight, color, paragraph }) => ({
        fontWeight: weight || 'normal',
        color: theme.palette.text.secondary  || 'inherit',
        marginBottom: paragraph ? '16px' : '0',
            
    })
);

export default StyledTypographyUI;
