import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../App";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Login() {
  const { user, setUser } = useContext(AppContext);
  const API_URL = import.meta.env.VITE_API_URL;
  const Navigate = useNavigate()
  const handleLogin = async () => {
    const url = API_URL + "/auth/signin";
    const response = await axios.post(url, user);
    setUser(response.data)
    Navigate("/")
  };
  return (
    <div>
      <h2>Login Page</h2>
      <p>
        <input
          type="text"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="Email"
        />
      </p>
      <p>
        <input
          type="password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="Password"
        />
      </p>
      <p>
        <button onClick={handleLogin}>Login</button>
      </p>
      <p>
        <Link to="/register">New user register here</Link>
      </p>
    </div>
  );
}
export default Login;