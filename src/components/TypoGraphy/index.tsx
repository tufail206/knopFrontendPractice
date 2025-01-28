import { TypographyProps } from "@mui/material/Typography";
import StyledTypographyUI from "./TypoGrapyStyled";


const  UITypography = ({
    variant,
    children,
    color,
    sx,
    mt,
    mb,
    fontSize,
    fontWeight,
    lineHeight,
    align,
 
  
}: TypographyProps) => {
    return (
        <StyledTypographyUI
         
            variant={variant} 
           color={color}
            sx={sx}
            fontSize={fontSize}
            fontWeight={fontWeight}
            lineHeight={lineHeight}
            marginTop={mt}
            marginBottom={mb}
            textAlign={align}  // Align text based on the passed align prop
           
        >
            {children}
        </StyledTypographyUI>
    );
};

export default UITypography;
