import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import RouteApp from "./routes";
import { useSelector } from "react-redux";
import Login from "./pages/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Test from "./pages/Test";
import Ujian from "./pages/Ujian";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Dashboard from "./pages/admin/Dashboard";
import Question from "./pages/admin/Question";
import Category from "./pages/admin/Category";
import Rule from "./pages/admin/Rule";
import Testimonials from "./pages/Testimonials";

function App() {
  // const isLoggedIn = !!useSelector(state => state.auth.token);

  return (
    <>
      {/* <RouteApp /> */}
      {/* <Login /> */}
      <Routes>
        {/* {
                    isLoggedIn ? protectedRoutes : guestRoutes
                } */}

        <Route path="/" exact element={<Home />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/register" exact element={<Register />} />
        <Route path="/test" exact element={<Test />} />
        <Route path="/ujian" exact element={<Ujian />} />
        <Route path="/profile" exact element={<Profile />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/admin" exact element={<Dashboard />} />
        <Route path="/admin/question" exact element={<Question />} />
        <Route path="/admin/category" exact element={<Category />} />
        <Route path="/admin/rule" exact element={<Rule />} />
        <Route path="/testimonials" exact element={<Testimonials />} />
        {/* <Route path="*" exact element={<NotFound />} /> */}
      </Routes>
    </>
  );
}

export default App;
