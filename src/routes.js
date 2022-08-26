import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import Test from './pages/Test'
import Dashboard from './pages/admin/Dashboard'
import Question from './pages/admin/Question'

const RouteApp = () => {
    return (
        <>
            <Routes>
                <Route path="/login" exact element={<Login />} />
                <Route path="/" exact element={<Home />} />
                <Route path="/test" exact element={<Test />} />
                <Route path="/admin" exact element={<Dashboard />} />
                <Route path="/admin/question" exact element={<Question />} />
            </Routes>
        </>
    )
}

export default RouteApp