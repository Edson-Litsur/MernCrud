import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Users from './Users.jsx';
import CreateUser from './CreateUser';
import UpdateUser from './UpdateUser';

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className="">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Users/> }></Route>
        <Route path='/create' element={<CreateUser/> }></Route>
        <Route path='/update' element={<UpdateUser/> }></Route>
      </Routes>

    </BrowserRouter>
   </div>
  )
}

export default App
