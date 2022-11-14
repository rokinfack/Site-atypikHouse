import Category from './components/Home';
import './App.css';
import ErrorPage from "./components/ErrorPage";
import Home from "./components/Home";
import Menu from "./components/Menu";
import PageContact from "./components/PageContact";
import Reinitialisation from "./components/Reinitialisation";
import Footer from "./components/Footer";
import SignUp from './components/SignUp';
import Activity from './components/Activity';
import Bg from './bg.jpg';
import { BrowserRouter , Route, Routes } from 'react-router-dom';

function App() {
 

  return (
    
    <BrowserRouter  >
              <Menu/>
                <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/sign' element={<SignUp/>}/>
                <Route path='/activite' element={<Activity/>}/>
                <Route path='*' element={<ErrorPage/>}/>
                <Route path='/reinitialisation' element={<Reinitialisation/>}/>
                <Route path='/contact' element={<PageContact/>}/>
              </Routes>
              <Footer/>  
  </BrowserRouter>
  
    );
}

export default App;
