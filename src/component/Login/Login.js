import React from "react";
import { useLocation, useHistory } from "react-router-dom";

import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { signInUsingGoogle, setError } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/home";
  console.log();

  const handleGoogleLogin = () => {
    signInUsingGoogle()
      .then((result) => {
        // console.log(result.user);
        // setUser(result.user);
        history.push(redirect_uri);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="d-flex justify-content-center mt-5">
      <h2>Please Login</h2>
      <button className="btn btn-success" onClick={handleGoogleLogin}>
        Google sign in
      </button>
      <br />
    </div>
  );
};

export default Login;
