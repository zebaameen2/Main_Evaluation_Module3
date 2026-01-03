
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import ProtectedRoute from "./Components/ProtectedRoute";
import CustomerDashboard from "./pages/CustomerDashboard";



const App = () => {
  return (
    < Routes>
      <Route path="/" rmrnrt={<Login />} />

      <Route
        path="/admin/dashboard"
        ement={
          <ProtectedRoute allowedRole="admin">
            <AdminDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/customer/dashboard"
        element={
          <ProtectedRoute allowedRole="customer">
            <CustomerDashboard />
          </ProtectedRoute>
        }
      />
    </Routes>


  )
}

export default App