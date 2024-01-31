import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import Home from './Components/Home';
import Freejobs from './Components/Freejobs';
import Enter from './Components/Enter';
import Skill from './Components/Skill';
import Know from './Components/Know';
import Freelance from './Components/Freelance';
import Apply from './Components/Apply';
import Financial from './Components/Financial';
import Digital from './Components/Digital';
import Social from './Components/Social';
import Event from './Components/Event';
import Pod from './Components/Pod';
import About from './Components/About';
import Cover from './Components/Cover';
import Jobs from './Components/Jobs';
import Categories from './Components/Categories';
import Adminlog from './Components/Adminlog';
import Adminhome from './Components/Adminhome';
import Post from './Components/Post';
import Feed from './Components/Feed';
import Terms from './Components/Terms';
import Premium from './Components/Premium';


const App = () => {
  return (
    <Router>
      <div>
        <Routes>
      <Route path="/" element={<Cover/>}/>
      <Route path="/Cover" element={<Cover/>}/>
      <Route path="/Login" element={<Login/>} />
      <Route path="/Register"  element={<Register/>}/>
      <Route path="/Home" element={<Home/>}/>
      <Route path="/Freejobs" element={<Freejobs/>}/>
      <Route path="/Enter" element={<Enter/>}/>
      <Route path="/Skill" element={<Skill/>}/>
      <Route path="/Know" element={<Know/>}/>
      <Route path="/Freelance" element={<Freelance/>}/>
      <Route path="/Apply" element={<Apply/>}/>
      <Route path="/Financial" element={<Financial/>}/>
      <Route path="/Digital" element={<Digital/>}/>
      <Route path="/Social" element={<Social/>}/>
      <Route path="/Event" element={<Event/>}/>
      <Route path="/Pod" element={<Pod/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Jobs" element={<Jobs/>}/>
      <Route path="/Categories" element={<Categories/>}/>
      <Route path="/Adminlog" element={<Adminlog/>}/>
      <Route path="/Adminhome" element={<Adminhome/>}/> 
      <Route path="/Post" element={<Post/>}/> 
      <Route path="/Feed" element={<Feed/>}/> 
      <Route path="/Terms" element={<Terms/>}/> 
      <Route path="/Premium" element={<Premium/>}/> 



      </Routes>
      </div>
      
      
    </Router> 
  );
};

export default App;