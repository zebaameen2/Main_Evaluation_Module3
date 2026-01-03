import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth, setisAuth] = useState(false);

  const [role, setRole] = useState("");

  const login = (email, password) => {
    if (email === "admin@gmail.com" && password === "admin1234") {
      setisAuth(true)
      setRole("admin");
      return "admin"
    }
    if (email === "customer@gmail.com" && password === "customer1234") {
      setisAuth(true)
      setRole("customer");
      return "customer "
    }
    return null;

  }


  const logout = () => {
    setisAuth(false);
    setRole(null);
  }

  return (
    <AuthContext.Provider value={{ isAuth, role, login, logout }}>

      {children}

    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
};