import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Signup from './Pages/Signup/Signup.Pages'
import Career from './Pages/Career/Career.Pages'
import About from  './Pages/About/About.Pages'
import Blog from './Pages/Blog/Blog.Pages'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/Signup' element={<Signup/>}/>
      <Route path='/career' element={<Career/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Blog' element={<Blog/>}/>
    </Routes>
    </BrowserRouter>
  );
}
export default App;
