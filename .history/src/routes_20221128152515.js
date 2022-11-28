import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import Test from './pages/Test'
import Dashboard from './pages/admin/Dashboard'
import Question from './pages/admin/Question'
import { useSelector } from 'react-redux'
import NotFound from './pages/NotFound'
import Profile from './pages/Profile'
import Register from './pages/Register'
import Category from './pages/admin/Category'
import Answer from './pages/admin/Answer'
import About from './pages/About'
import Ujian from './pages/Ujian'

const RouteApp = () => {
    const { isLoggedIn } = useSelector((state) => state.auth);

    const protectedRoutes = <>
        <Route path="/admin" exact element={<Dashboard />} />
        <Route path="/admin/question" exact element={<Question />} />
        <Route path="/profile" exact element={<Profile />} />
    </>

    const guestRoutes = <>
        <Route path="/login" exact element={<Login />} />
        <Route path="/register" exact element={<Register />} />
        <Route path="/test" exact element={<Test />} />
        <Route path="/ujian" exact element={<Ujian />} />
        <Route path="/profile" exact element={<Profile />} />

    </>

    return (
        <>
            <Routes>
                {/* {
                    isLoggedIn ? protectedRoutes : guestRoutes
                } */}

                <Route path="/" exact element={<Home />} />
                <Route path="/login" exact element={<Login />} />
                <Route path="/register" exact element={<Register />} />
                <Route path="/test" exact element={<Test />} />
                <Route path="/profile" exact element={<Profile />} />
                <Route path="/about" exact element={<About />} />
                <Route path="/admin" exact element={<Dashboard />} />
                <Route path="/admin/question" exact element={<Question />} />
                <Route path="/admin/category" exact element={<Category />} />
                <Route path="/admin/answer" exact element={<Answer />} />
                {/* <Route path="*" exact element={<NotFound />} /> */}
            </Routes>
        </>
    )
}

export default RouteApp