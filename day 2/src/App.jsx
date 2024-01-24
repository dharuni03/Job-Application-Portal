import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import Home from './Components/Home';
const App = () => {
  return (
    <Router>
      <div>
        <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/Login" element={<Login/>} />
      <Route path="/Register"  element={<Register/>}/>
      <Route path="/Home" element={<Home/>}/>
     
      </Routes>
      </div>
      
      
    </Router>
  );
};

export default App;