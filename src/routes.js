import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'

const RouteApp = () => {
    return (
        <>
            <Routes>
                <Route path="/login" exact element={<Login />} />
                <Route path="/" exact element={<Home />} />
            </Routes>
        </>
    )
}

export default RouteApp