import { Outlet } from "react-router-dom";
import Header from '../components/organisms/Header/Header';
import UserProvider from '../context/User/UserProvider';

const AuthLayout = () => {
  return (
    <UserProvider>
      <Header />
      <Outlet />
    </UserProvider>
  );
};

export default AuthLayout;