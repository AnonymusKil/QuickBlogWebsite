import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import BlogDetails from "./pages/BlogDetails";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import NotFound from "./pages/NotFound";
import AddBlog from "./components/AddBlog";
import Dashboard from "./components/Dashboard";
import AllBlogs from "./components/AllBlogs";
import Comments from "./components/ListofComments";
function App() {
  return (
    <div className="">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/adminLogin" element={<AdminLogin />} />
        <Route path="/adminDashboard" element={<AdminDashboard />}>
          <Route index element={<Dashboard/>}/>
          <Route path="addBlog" element={<AddBlog />} />
          <Route path="blogList" element={<AllBlogs/>} />
          <Route path="comments" element={<Comments/>} />


        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
