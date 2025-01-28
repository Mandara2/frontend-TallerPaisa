import { BrowserRouter, Routes, Route } from "react-router-dom"

import RegisterPage from "./app/views/auth/pages/regiter/RegisterPage"
import LoginPage from "./app/views/auth/pages/login/LoginPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home page</h1>} />

        <Route path="/login" element={<LoginPage/>} />
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/profile" element={<h1>Profile</h1>} />
        <Route path="/change-password" element={<h1>Change Password</h1>} />
        
        <Route path="/suppliers" element={<h1>Supplier</h1>} />
        <Route path="/add-supplier" element={<h1>Add Supplier</h1>} />
        <Route path="/supplier/:id" element={<h1>Update Supplier</h1>} />
        <Route path="/profile" element={<h1>Profile</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App