import { styled ,Box} from "@mui/material";

export const LoginContainer=styled(Box)(({theme})=>({
    width: '100%',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
   
    
}))
export const LoginImageContainer=styled(Box)(({theme})=>({
    width:"621px",
    minHeight:"470px",
    backgroundColor: theme.palette.mainBg,
    borderRadius:theme.shape.borderRadiusLarge,
}))
export const LoginForm = styled(Box)(({ theme }) =>({
    width: '470px',
    padding: theme.spacing(3),
   
   
   
    
}))

export const InputContainer = styled(Box)`
margin:10px 0;


`