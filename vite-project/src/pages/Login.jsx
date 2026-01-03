import React, { useDebugValue, useState } from 'react'



const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate();

  const handlelogin = () => {
    const userRole = login(email, password);

    if (!userRole) {
      alert("invalid email or pasword ")
      return;
    }

    alert("login succesful");

    if (userRole === "admin") {
      navigate("/admin/dashboard");

    } else {
      navigate("/customer/dashboatrd");

    }
  }
  return (
    <div style={{ width: "300px", margin: "1000px auto" }}>
      <h2>Login</h2>

      <input type="text"
        placeholder='Email'
        value={email}
        onChange={(e) => setPassword.target.value}
      />

      <br /><br />
      <button onClick={handlelogin}>
        Login
      </button>


    </div>

  )
}

export default Login