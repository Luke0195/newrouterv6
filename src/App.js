import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import Routes from './routes'
import './App.css'

export function App(){
  return(
    <BrowserRouter>
      <Routes/>
    </BrowserRouter>

  )
}