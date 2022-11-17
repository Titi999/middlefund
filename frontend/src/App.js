import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Home/home';
import Register from './Register/register';
import Login from './Login/login';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
