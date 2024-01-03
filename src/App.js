import Navbar from "./component/Navbar";
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import '../src/Pro.css'
import Home from "./component/Home";
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import About from "./component/About";
import Contact from "./component/Contact";
import Menu from "./component/Menu";
import Gallary from "./component/Gallary";


function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Menu" element={<Menu/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/Contact" element={<Contact/>}></Route>
        <Route path="/Gallary" element={<Gallary/>}></Route>
      </Routes>
      </BrowserRouter>

      
    </div>
  );
}

export default App;
