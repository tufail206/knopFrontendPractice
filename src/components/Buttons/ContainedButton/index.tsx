import { ButtonProps, CircularProgress } from '@mui/material';
import { ReactNode } from 'react';
import { ContainedButtonStyled } from './ContainedButtonStyled';

// Extending ButtonProps to include `styleType` as a valid prop
interface UIButtonProps extends ButtonProps {
    label: string;
    variant?: 'contained' | 'outlined';
    icon?: ReactNode;
    iconPosition?: 'start' | 'end';
    fs?: number; // Font size for text
    imgWidth?: number;
    imgHeight?: number;
    styleType?: 'default' | 'inverted'; // Custom prop
    isLoading?: boolean;
}

const ContainedUIButton = ({
    label,
    variant = 'contained',
    icon,
    iconPosition = 'start',
    fs = 16, // Default font size to 16px if not passed
    imgWidth,
    imgHeight,
    styleType = 'default',
    isLoading = false,
    color,
    ...props
}: UIButtonProps) => {
    return (
        <ContainedButtonStyled
            {...props}
            variant={variant}
            color={color}
            styleType={styleType} // Pass styleType prop down to ContainedButtonStyled
            style={{ fontSize: fs }} // Set font size dynamically based on `fs` prop
        >
            {isLoading ? (
                <CircularProgress size={24} color="inherit" /> // Show a spinner while loading
            ) : (
                <>
                    {icon && iconPosition === 'start' && icon} {/* Icon at the start */}
                    {label} {/* Label text */}
                    {icon && iconPosition === 'end' && icon} {/* Icon at the end */}
                </>
            )}
        </ContainedButtonStyled>
    );
};

export default ContainedUIButton;
