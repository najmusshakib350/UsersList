import Form from "./../components/signIn/Form";
import { isAuthenticated } from "./../utils/auth";
import { Navigate } from "react-router-dom";

const Signin = () => {
  if (isAuthenticated()) {
    return <Navigate to="/users" />;
  }
  return <Form />;
};

export default Signin;
