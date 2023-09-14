import {useState,useEffect} from 'react'
import {onAuthStateChanged} from 'firebase/auth'
import { auth } from '../firebaseConnection'
import {Navigate} from 'react-router-dom'


export default function Private({children}){ 
const [ loading,setLoading] = useState(true)
const [ sign,setSingn] = useState(false)

useEffect(()=>{
async function checkLogin(){
    const unsub = onAuthStateChanged(auth, (user)=> {
if(user){
    const userData = {
        uid: user.uid,
        email:user.email
    }
    localStorage.setItem("@userDetail", JSON.stringify(userData))
    setLoading(false)
    setSingn(true)
} else{
    setLoading(false)
    setSingn(false)
}
    })
}
checkLogin()
},[])

if(loading){
    return(<div></div>)
}
if(!sign){
    return <Navigate to='/'/>
}
    return children;
   
}