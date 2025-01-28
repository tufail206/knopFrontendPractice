import { styled ,Box} from "@mui/material";

export const LoginContainer=styled(Box)`
    width: '100%',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
   
`
export const LoginImageContainer=styled(Box)(({theme})=>({
    width:"621px",
    minHeight:"470px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap:"10px",
    backgroundColor: theme.palette.mainBg,
    borderRadius:theme.shape.borderRadiusLarge,
}))
export const SubImageContainer = styled(Box)`
 width:50%;
 display:flex;
 gap:20px;
 justify-content:center;
 align-items:end;

 & .sec {
    height:111px;
    width:159px;
  }


`
export const LoginForm = styled(Box)(({ theme }) =>({
    width: '470px',
    padding: theme.spacing(3),
   
   
   
    
}))

export const InputContainer = styled(Box)`
margin:10px 0;


`