import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Register() {
  const [user, setUser] = useState({});
  const API_URL = import.meta.env.VITE_API_URL;
  const Navigate = useNavigate();
  const handleSubmit = async () => {
    const url = API_URL + "/auth/signup";
    const response = await axios.post(url, user);
    Navigate("/login");
  };
  return (
    <div>
      <h2>Registration Page</h2>
      <p>
        <input
          type="text"
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          placeholder="Name"
        />
      </p>
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
        <button onClick={handleSubmit}>Submit</button>
      </p>
      <p>
        <Link to="/login">Already a member? Login here</Link>
      </p>
    </div>
  );
}
export default Register;