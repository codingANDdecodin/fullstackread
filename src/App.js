import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Login from './pages/Login';
import SignIn from './pages/SignIn';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
     
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Login></Login>}></Route>
      <Route path='/signup' element={<SignIn></SignIn>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
     </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
