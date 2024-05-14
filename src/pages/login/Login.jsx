import { useState } from "react";
import "./login.scss";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../state/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch(login(user));
        navigate("/");
      })
      .catch((error) => {
        setError(true);
      });
  };

  return (
    <div className="login">
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="email" onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Login</button>
        {error && <span>Wrong Email or Password</span>}
      </form>
    </div>
  );
};

export default Login;
