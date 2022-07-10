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
            <Route exact path="/Faculty/Admin" component={Admin}/>
            <Route exact path="/Faculty/Faculty" component={Faculty}/>
            <Route exact path="/Faculty/Courses" component={Courses}/>
            <Route exact path="/Faculty/Slot" component={Slot}/>
            <Route exact path="/Faculty/Batch" component={Batch}/>
            <Route exact path="/Faculty/Attendance" component={Attendance}/>
            <Route exact path="/Faculty/Chart" component={Chart}/>
            <Route exact path="/Faculty/Graph" component={Graph}/>
            <Route exact path="/Faculty/Planner" component={Planner}/>
            <Route exact path="/Faculty/Logout" component={Logout}/>
        </Switch>
    )
}