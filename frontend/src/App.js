
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import LandingPage from './screens/LandingPage/LandingPage';
import {BrowserRouter, Route} from "react-router-dom";
import MyNotes from './screens/MyNotes/MyNotes';
import RegisterPage from './screens/RegisterPage/RegisterPage';
import LoginPage from './screens/LoginPage/LoginPage';


const App = () => (

  <BrowserRouter>  
   <Header/>
  <main style ={{ minHeight : "95vh "}} >
    <Route path ='/' component= {LandingPage} exact />
    <Route path ='/register' component= {RegisterPage} exact />
    <Route path ='/login' component= {LoginPage} exact />v
    <Route path ='/mynotes' component= {() => <MyNotes/>}  />
     
      </main>

     <Footer/>
     
     </BrowserRouter>
 
  
  
  );


export default App;
