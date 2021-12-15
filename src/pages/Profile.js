import React from 'react';
import {useParams} from 'react-router-dom'

export function Profile(){
  const { id } = useParams()
  return(
    <h1> Profiles {id}</h1>
  )
}