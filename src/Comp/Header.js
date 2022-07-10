import React from "react";
import {Link} from "react-router-dom"
import { useSelector } from "react-redux"
export default function Header() {
    const state = useSelector(_s => _s)
    const { menu, loggedin, role } = state
    // console.log
    return (
        <header>
             
            {/* <h1>Admin Panel</h1>
            <div>
                <Link to="/" >Home</Link>
                <Link to="/Admin/Admin" >Admin</Link>
                <Link to="/Admin/Faculty" >Faculty</Link>
                <Link to="/Admin/Student" >Student</Link>
                <Link to="/Admin/Courses" >Courses</Link>
                <Link to="/Admin/Slot" >Slot</Link>
                <Link to="/Admin/Chart" >Chart</Link>
                <Link to="/Admin/Graph" >Graph</Link>
                <Link to="/Admin/Attendance" >Attendance</Link>
                <Link to="/Admin/Planner" >Planner</Link>
                <Link to="/Admin/Logout" >Logout</Link>
            </div> */}
         </header>
    )
}