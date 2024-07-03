import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home"
import About from "./Pages/About"
import Dashboard from "./Pages/Dashboard"
import Signin from "./Pages/Signin"
import Signup from "./Pages/Signup"
import Projects from "./Pages/Projects"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home />}/>
        <Route path = "/About" element = {<About/>}/>
        <Route path = "/sign-up" element = {<Signup />}/>
        <Route path = "/sign-in" element = {<Signin />}/>
        <Route path = "/dashboard" element = {<Dashboard />}/>
        <Route path = "/projects" element = {<Projects />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
