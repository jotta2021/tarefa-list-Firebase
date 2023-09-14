import { useState } from 'react'
import {auth} from './../../../firebaseConnection'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {Link,useNavigate} from 'react-router-dom'

export default function Register(){
const navigate = useNavigate()
const[email,setEmail] = useState('')
const[password,setPassword] =useState('')

async function Cad(){
    if (email !== '' && password !== ''){
       await createUserWithEmailAndPassword(auth,email,password)
       .then(()=>{
        alert('Contra criada com sucesso')
navigate('/admin',{replace:true})
       })
       .catch((error)=> {

if(error.code === "auth/invalid-email"){
    alert('digite um email válido')
}if (error.code ==="auth/weak-password") {
    alert('a senha precisa ter no minímo 6 caracteres')
} else {
 alert('esse email já está em uso')
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
<button onClick={Cad}>
   Criar conta
</button>
<div className="cadast">
<p>Já tem uma conta?</p>

<Link to='/'>
<a>faça login</a>
</Link>


</div>


</div>

        </div>
    )
}