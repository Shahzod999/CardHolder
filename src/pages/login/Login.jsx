import { useState } from "react";
import "./login.scss";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../state/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [register, setRegister] = useState(false);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const registerOrLogin = register ? createUserWithEmailAndPassword : signInWithEmailAndPassword;

    registerOrLogin(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch(login(user));
        navigate("/");
      })
      .catch((error) => {
        setError(true);
        console.log(error);
      });
  };

  return (
    <div className="login">
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">{register ? "Register" : "Login"}</button>
        {error && <span>Wrong Email or Password</span>}
      </form>

      <span onClick={() => setRegister(!register)}>{register ? "Are u reddy to login?" : "Do u wanna register?"}</span>
    </div>
  );
};

export default Login;
