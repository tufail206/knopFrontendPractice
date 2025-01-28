import { Outlet } from 'react-router-dom';
import { AuthLayoutContainer } from './styled';

const AuthLayout = () => {
    return (
        <AuthLayoutContainer>
            <Outlet />
        </AuthLayoutContainer>
    );
};

export default AuthLayout;