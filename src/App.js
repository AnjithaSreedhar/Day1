import logo from './logo.svg';
import './App.css';
import Submit from './componenets/Submit';
import Registration from './componenets/Registration';
import Navbar from './componenets/Navbar';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Submit/>}/>
        <Route path='/signup' element={<Registration/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
