import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import image1 from '../../assets/images/Rectangle 8.png'
import image2 from '../../assets/images/Rectangle 11.png'
import image3 from '../../assets/images/Rectangle 9.png'
import image4 from '../../assets/images/Rectangle 10.png'
import UITextInput  from "../../components/TextField"; // import your custom component
// import {  useSubmit } from "react-router-dom";
import { InputContainer, LoginContainer, LoginForm, LoginImageContainer, SubImageContainer } from "./styled";
import ContainedUIButton from "../../components/Buttons/ContainedButton";
import UITypography from "../../components/TypoGraphy";
import { Link } from "react-router-dom";

interface FormValues {
  
  email: string;
  password: string | number;
}

const MyForm: React.FC = () => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FormValues>();
  // const submit=useSubmit()
  const onSubmit: SubmitHandler<FormValues> = (data) => {
      // const submitOption={
      //     method:"POST",
      //   encType:"application/json",
      //   action:"/login",
      
      // }
      // submit(data, submitOption)
    console.log("data",data);
    reset()
  };

  return (
    <LoginContainer>
      <LoginImageContainer>
        <SubImageContainer>
       <img src={image1} alt="" />
          <img src={image2} className="sec"  alt="" />
        </SubImageContainer>
        <SubImageContainer>
       <img src={image3}  alt="" />
       <img src={image4} alt="" />
     
        </SubImageContainer>
      </LoginImageContainer>
      <LoginForm>
        <UITypography color="black" fontSize={24} fontWeight={700}>Let’s Sign In 👇 </UITypography>
        <UITypography color="black" fontSize={16} fontWeight={400} mt={3}  paragraph>Hey, Enter your details to get sign in <br />
to your account. </UITypography>
        <form onSubmit={handleSubmit(onSubmit)}>
         
         <InputContainer>
            <UITypography color="black" fontWeight={700}>Email</UITypography>
            <UITextInput
              fullWidth
              name="email"
              control={control}

              placeholder="enter your email"
              error={errors.email ? true : false}
              rules={{
                required: "Email is required",
                pattern: {
                  value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                  message: "Invalid email address",
                },
              }}
            />
         </InputContainer>

          <InputContainer>
            <UITypography color="black" fontWeight={700}>Password</UITypography>
            <UITextInput
              fullWidth
              name="password"
              placeholder="enter your password"
              control={control}
              type="password"
              error={errors.password ? true : false}
              rules={{ required: "password is required" }}
            />
          </InputContainer>
          <UITypography color="black" fontSize={16} fontWeight={400}  mt={3} paragraph align="right"> <Link to={"/forgotPassword"} color="blue">Forgot Password </Link> </UITypography>
          <ContainedUIButton label="login" type="submit" variant="contained" fs={23} color="primary"/>
           
         
        </form>
      </LoginForm>
    
    </LoginContainer>
   
  );
};

export default MyForm;
