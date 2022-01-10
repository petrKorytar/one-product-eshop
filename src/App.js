import './App.css';
import MyNavBar from "./components/NavBar";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import MyHome from "./components/Pages/Home.js";
import MyAbout from "./components/Pages/About.js";
import Contact from "./components/Pages/Contact";
import MyShoppingCart from './components/Pages/ShoppingCart';


function App() {
  return (
    <>
      <Router>
      <div className="pages">
            <MyNavBar />
         <Routes>
              <Route path='/' exact element={<MyHome/>}/>
              <Route path='/about' element={<MyAbout/>}/>
              <Route path='/contact' element={<Contact/>}/>
              <Route path='/myShoppingCart' element={<MyShoppingCart/>}/>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;