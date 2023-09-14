import { useState,useEffect } from 'react'
import './admin.css'
import {auth,db} from './../../firebaseConnection'
import {signOut} from 'firebase/auth'
import {collection,addDoc,onSnapshot,query,where, orderBy, loadBundle, doc,deleteDoc,updateDoc} from 'firebase/firestore'
import {useNavigate} from 'react-router-dom'
export default function Admin(){
const navigate = useNavigate
const [textInput,setTextInput] = useState('')
const [user,setUser] =  useState({})
const [tarefa,setTarefas] = useState([])
const [edit,setEdit] = useState({})

useEffect(()=>{
    async function LoadList(){
        const userDetail = localStorage.getItem("@userDetail")
        setUser(JSON.parse(userDetail))
if(userDetail){
    const data = JSON.parse(userDetail);
    const tarefasRef = collection(db,"tarefas");
    const q = query(tarefasRef,orderBy("created","desc"), where("useruid","==",data?.uid))
   
    const unsub = onSnapshot(q,(snapshot)=>{
let list = [];
snapshot.forEach((doc)=>{
    list.push({
        id: doc.id,
        tarefa: doc.data().tarefa,
        useruid: doc.data().useruid
  })
})

setTarefas(list)

    })
}

    }
    LoadList()
},[])


async function Register(){
if(textInput ===""){
    alert('Digite uma tarefa')
    return;
}

if (edit?.id){
   handleUpdateTarefa()
   return;
}
await addDoc(collection(db,"tarefas"),{
    tarefa: textInput,
    created:new Date(),
    useruid: user.uid,


    
})
  .then(()=>{
alert('tarefa registrada')
setTextInput("");
  }) 
  .catch((error)=>{
console.log(error)
  })
}
async function Logout(){
    await signOut(auth)
}
  

async function Delete(id){
 const docRef= doc(db,"tarefas",id)
await deleteDoc(docRef)
}
    

async function Edit(item){
setTextInput(item.tarefa)
setEdit(item)


}

async function handleUpdateTarefa(){
const docRef = doc(db,"tarefas",edit.id)
await updateDoc(docRef,{
    tarefa:textInput
})
.then(()=>{
    setTextInput('')
    alert('tarefa atualizada')
})
.catch((error)=>{
console.log(error)
})
}
     return(
        <div className='container-admin'>
            <h1>Lista de tarefas</h1>
            
            <input 
            type='text'
            placeholder='Digite uma tarefa' 
            value={textInput}
            onChange={e => setTextInput(e.target.value)}
            
            />
            { Object.keys(edit).length> 0 ? (
                <button  style={{backgroundColor:'green'}}onClick={Register}>Atualizar tarefa</button>

            

            ): (
                <button onClick={Register}>Registrar tarefa</button>

            )

            }
            { tarefa.map((item)=>(

<div  key={item.id} className='text-list'>
                <p>{item.tarefa}</p>
                             <div className='buttons'>
                   <button onClick={()=> Edit(item)} className='edit'>Editar</button>
                <button onClick={()=> Delete(item.id)}  className='conclu'>Concluir</button>  
                </div>
               
            </div>

            )
            )}




           
            <button onClick={Logout} id='logout'>Sair </button>
        </div>
    )
}