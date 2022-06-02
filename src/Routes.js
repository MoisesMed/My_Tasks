import React from "react";
import {Routes, Route, Navigate} from "react-router-dom";
import Home from "./pages/Home";
import {isAuthenticated} from "./util/auth";
import ScrumPage from "./pages/ScrumPage";

export default function MainRoutes() {
    const ProtectedRoute = ({children}) => {
        if (!isAuthenticated()) {
            return <Navigate to="/home" replace/>;
        }
        return children;
    };

    return (
        <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/tasks" element={<ProtectedRoute>
                <ScrumPage/>
            </ProtectedRoute>}/>
            {/* <Route path="/login" element={<Login/>}/> */}
            <Route path="*" element={<Navigate to="/home" replace/>}/>
        </Routes>
    );
}