import { useContext } from "react";
import { AuthContext } from "../Contexts/Auth/AuthContext";
import SignIn from "../Pages/Login/Signin";

const Security = ({ children }: { children: JSX.Element }) => {
  const auth = useContext(AuthContext);

  if (!auth.user) {
    return <SignIn />;
  }
  return children;
};

export default Security;
