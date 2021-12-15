import React from 'react';
import {useParams, useNavigate} from 'react-router-dom'

export function Profile(){
  const { id } = useParams()
  const navigate = useNavigate()
  const handleNavigate = () =>{
    navigate('/')
  }
  return(
    <>
      <h1> Profiles {id}</h1>
      <button onClick={handleNavigate}> Move to Dashboard</button>
    </>
  )
}