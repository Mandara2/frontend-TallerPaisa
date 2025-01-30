import { BrowserRouter, Routes, Route } from "react-router-dom"

import RegisterPage from "./app/views/auth/pages/regiter/RegisterPage"
import LoginPage from "./app/views/auth/pages/login/LoginPage"
import ChangePasswordPage from "./app/views/auth/pages/change-password/ChangePasswordPage"
import RecoveryPasswordPage from "./app/views/auth/pages/recovery-password/RecoveryPasswordPage"
import VerifyCodePage from "./app/views/auth/pages/verify-code/VerifyCodePage"
import ContactUsPage from "./app/views/website/pages/contact-us/ContactUsPage"

import crudRoutes from "./app/views/crud/routes"

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<h1></h1>} />

        {/* Auth routes */}
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/change-password" element={<ChangePasswordPage/>} />
        <Route path="/recovery-password" element={<RecoveryPasswordPage/>} />
        <Route path="/verify-code" element={<VerifyCodePage/>} />

        {/* Website Routes */}

        <Route path="/contact-us" element={<ContactUsPage/>} />

        {/* Rutas CRUD importadas dinámicamente */}
        {crudRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}

      </Routes>
    </BrowserRouter>
  )
}

export default App