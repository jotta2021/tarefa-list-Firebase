import { useState,useEffect } from 'react'
import './home.css'
import {Link} from 'react-router-dom'
import {auth} from './../../firebaseConnection'
import {signInWithEmailAndPassword} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

export default function Home(){
const navigate = useNavigate()
const[email,setEmail] = useState('')
const[password,setPassword] =useState('')

async function Login(){
    if (email !== '' && password !== ''){
       await signInWithEmailAndPassword(auth,email,password)
       .then(()=> {
  navigate('/admin',{replace:true})
       })
       .catch((error)=>{
if (error.code === 'auth/user-not-found'){
    alert('o usuário não existe')
} 
       })



    }else{
        alert('preencha os campos vazios')
    }
}

    return(
        <div className="container-home">

<h1>Lista de tarefas</h1>
<p>Gerencie sua agenda de forma fácil e rápida</p>
<div className="container-login">
    <div>
     
<input
type="text"
autoComplete="true"
placeholder="Digite seu email"
value={email}
onChange={e=> setEmail(e.target.value)}

/>
    </div>
    <div>
 
<input

type="password"
placeholder="Digite sua senha"
value={password}
onChange={e=> setPassword(e.target.value)}
/>  
    </div>
<button onClick={Login}>
    Entrar
</button>
<div className="cadast">
<p>Ainda não tem uma conta?</p>

<Link to='/register'>
<a>Cadastre-se</a>
</Link>


</div>


</div>

        </div>
    )
}