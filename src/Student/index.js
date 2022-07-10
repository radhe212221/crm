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
            <Route exact path="/Student/Admin" component={Admin}/>
            <Route exact path="/Student/Faculty" component={Faculty}/>
            <Route exact path="/Student/Courses" component={Courses}/>
            <Route exact path="/Student/Slot" component={Slot}/>
            <Route exact path="/Student/Batch" component={Batch}/>
            <Route exact path="/Student/Attendance" component={Attendance}/>
            <Route exact path="/Student/Chart" component={Chart}/>
            <Route exact path="/Student/Graph" component={Graph}/>
            <Route exact path="/Student/Planner" component={Planner}/>
            <Route exact path="/Student/Logout" component={Logout}/>
        </Switch>
    )
}