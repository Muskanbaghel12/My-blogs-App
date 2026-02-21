import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import PageNotFound from "./pages/PageNotFound"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Profile from "./pages/Profile"
import Blogs from "./pages/Blogs"
import SingleBlog from "./pages/SingleBlog"
import { ToastContainer } from "react-toastify"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<SingleBlog />} />
      </Routes>
      <ToastContainer />
    </Router>
  )
}

export default App
