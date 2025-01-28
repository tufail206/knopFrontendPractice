import { Button, styled, ButtonProps } from "@mui/material";

// Define interface for the props
interface ContainedButtonProps extends ButtonProps {
    fullWidth?: boolean; 
    fs?: number; // Font size (optional)
    styleType?: 'default' | 'inverted'; // styleType for different styles
}

// Create the styled component
export const ContainedButtonStyled = styled(Button)<ContainedButtonProps>(({ theme, fullWidth, fs, styleType }) => ({
    fontSize: fs ? `${fs}px` : '16px', // Default font size if fs is not provided
    backgroundColor: styleType === 'inverted' ? theme.palette.secondary.main : theme.palette.primary.main, // Use inverted or default color
    color: styleType === 'inverted' ? theme.palette.primary.main : theme.palette.common.white, // Change text color based on styleType
   
    borderRadius: theme.shape.borderRadiusLarge,
    textTransform: 'none', 
    width: fullWidth ? '100%' : '190px',
    // Button padding
   
    '&:hover': {
        backgroundColor: styleType === 'inverted' ? theme.palette.secondary.dark : theme.palette.primary.dark, // Change on hover
    },
}));

