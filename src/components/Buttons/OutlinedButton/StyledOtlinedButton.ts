import { Button, styled } from '@mui/material';

export const OutlinedButton = styled(Button)(({ theme }) => ({
    color: theme.palette.text.primary,
    borderColor: theme.palette.primary.main,
    '&:hover': {
        color: theme.palette.secondary.main,
        borderColor: theme.palette.secondary.main,
    },
    
}));