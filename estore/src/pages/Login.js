import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

function Login() {

  const { login } = useContext(AuthContext);

  const [email, setEmail] = useState("");

  return (
    <div className="form">

      <h2>Login</h2>

      <input
        placeholder="Email"
        onChange={(e) =>
          setEmail(e.target.value)
        }
      />

      <button
        onClick={() => login(email)}
      >
        Login
      </button>

    </div>
  );
}

export default Login;