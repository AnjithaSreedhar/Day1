import logo from './logo.svg';
import './App.css';
import Submit from './componenets/Submit';
import Registration from './componenets/Registration';
import Navbar from './componenets/Navbar';
import { Route, Routes } from 'react-router-dom';
import Statebasics from './componenets/Statebasics';
import Counter from './componenets/Counter';
import UseE from './componenets/UseE';
import Viewdata from './componenets/Viewdata';

function App() {
  return (
    <div className="App">
      {/* <Navbar/>
      <Routes>
        <Route path='/' element={<Submit/>}/>
        <Route path='/signup' element={<Registration/>}/>
      </Routes>
      */}
      {/* <Statebasics/> */}
      {/* <Counter/> */}
      {/* <UseE/> */}
      <Viewdata/>
    </div>
  );
}

export default App;
