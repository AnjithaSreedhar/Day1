import logo from './logo.svg';

import './App.css';



import ViewEmployee from './component/ViewEmployee';


import { Route, Routes } from 'react-router-dom';
import AddEmployee from './component/AddEmployee';
import Navbar from './component/Navbar';

function App() {

 return (

   <div className="App">

<Navbar/>


   <Routes>

     <Route path='/' element={<ViewEmployee/>}/>

     <Route path='/add' element={<AddEmployee/>} />

   </Routes>

   </div>

 );

}

export default App;

