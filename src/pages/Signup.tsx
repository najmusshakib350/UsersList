import Form from "../components/signUp/Form";
import { isAuthenticated } from "./../utils/auth";
import { Navigate } from "react-router-dom";

const Signup = () => {
  if (isAuthenticated()) {
    return <Navigate to="/users" />;
  }
  return <Form />;
};

export default Signup;
