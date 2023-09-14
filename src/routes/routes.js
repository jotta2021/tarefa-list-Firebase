import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from '../pages/home/home'
import Register from '../pages/home/register/register'
import Admin from '../pages/admin/admin'
import Private from './private'


export default function Router(){
    return(
    <BrowserRouter>
<Routes>
<Route path='/' element={<Home/>}  />
<Route path='/register' element={<Register/>}/>
<Route path='/admin' element={<Private><Admin/></Private>}/>

</Routes>

</BrowserRouter>    
    )



}