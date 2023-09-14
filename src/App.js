import {db,auth} from './firebaseConnection'
import {useState,useEffect} from 'react'
import Router from './routes/routes'

export default function App(){
  return(
    <div>
      <Router/>
    </div>
  )
}