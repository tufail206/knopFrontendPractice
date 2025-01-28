import { TextField, styled } from '@mui/material';

const StyledOutlinedInput = styled(TextField)<{
    multiline?: boolean;
    error?: boolean;
}>(({ theme, multiline, error }) => ({
   
    '.MuiOutlinedInput-root': {
        color: theme.palette.text.secondary,
        
        marginTop: 10,
        '& fieldset': {
            border: `2px solid ${error ? '#ff8080' : '#000'} !important`,
            color:theme.palette.text.primary,
            borderRadius: multiline
                ? theme.shape.borderRadiusLarge
                : theme.shape.borderRadiusRound,
            boxShadow: theme.shadows[2],
           
        },

        '&:hover fieldset': {
            borderColor: error ? '#ff8080' : 'transparent',
        },

        '&.Mui-focused fieldset': {
            borderColor: error ? '#ff8080' : 'transparent',
        },
    },
}));

export default StyledOutlinedInput;

// adn also inside stroke add