import React from 'react';
import {useParams, useNavigate, Outlet, Link} from 'react-router-dom'

export function Profile(){
  const { id } = useParams()
  const navigate = useNavigate()
  const handleNavigate = () =>{
    navigate('/')
  }
  return(
    <>
      <h1> Profiles {id}</h1>
      <Link to="purchase"> Compras</Link>
      <Link to="password"> Change Password</Link>
      <button onClick={handleNavigate}> Move to Dashboard</button>
      <Outlet/>
    </>
  ) 
}