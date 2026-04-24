import { Outlet } from "react-router-dom";
import Header from '../components/organisms/Header/Header';
import UserProvider from '../context/User/UserProvider';

const AuthLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default AuthLayout;