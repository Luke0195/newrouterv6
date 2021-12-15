import React from 'react';
import {Routes as Switch, Route} from 'react-router-dom'
import { Dashboard } from '../pages/Dashboard';
import { Profile } from '../pages/Profile';


export default function Routes(){
  return(
    <Switch>
      <Route path="/" element={<Dashboard/>}/>
      <Route path="/profile/:id" element={<Profile/>}/>
      <Route path="*" element={<h1> Not found :{'('}</h1>}/>

    </Switch>
  )
}