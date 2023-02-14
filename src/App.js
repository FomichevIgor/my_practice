import {  NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import Contact from "./Contact";
import Goods from "./Goods";
import Item from "./Item";
import Main from "./Main";
const ActinClass=({isActive})=>isActive? 'active-link':'';

function App(props) {

   


  return (
    <div className="App">
     
      <div>
        <header>
          <NavLink className={(({isActive})=>isActive? 'active-link':'')} to='/'>Main</NavLink>
          <NavLink className={ActinClass} to="/goods">about</NavLink>
          <NavLink  className={ActinClass}  to="/item">setting</NavLink>
          <NavLink  className={ActinClass}  to="/contact">contact</NavLink>
        </header>
      </div>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/goods" element={<Goods />} />
        <Route path="/item" element={<Item />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
    </div>
  );
}

export default App;
