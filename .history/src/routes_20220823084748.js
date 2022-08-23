import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import Test from './pages/Test'

const RouteApp = () => {
    return (
        <>
            <Routes>
                <Route path="/login" exact element={<Login />} />
                <Route path="/" exact element={<Home />} />
                <Route path="/test" exact element={<Test />} />
            </Routes>
        </>
    )
}

export default RouteApp