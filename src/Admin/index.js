import React from "react";
import { Switch,Route } from "react-router-dom";
import  Admin from './Admin'
import  Faculty from './Faculty'
import  Courses from './Courses' 
import  Slot from './Slot'
import  Batch from './Batch'
import  Attendance from './Attendance'
import  Chart from './Chart'
import  Graph from './Graph'
import  Planner from './Planner'
import  Logout from './Logout'
export default function index(){
    return (
        <Switch>
            <Route exact path="/Admin/Admin" component={Admin}/>
            <Route exact path="/Admin/Faculty" component={Faculty}/>
            <Route exact path="/Admin/Courses" component={Courses}/>
            <Route exact path="/Admin/Slot" component={Slot}/>
            <Route exact path="/Admin/Batch" component={Batch}/>
            <Route exact path="/Admin/Attendance" component={Attendance}/>
            <Route exact path="/Admin/Chart" component={Chart}/>
            <Route exact path="/Admin/Graph" component={Graph}/>
            <Route exact path="/Admin/Planner" component={Planner}/>
            <Route exact path="/Admin/Logout" component={Logout}/>
        </Switch>
    )
}