import "./App.css";
import "./App.scss";
import "./components/Navbar";
import { Navbar } from "./components/Navbar";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { Switch, Route } from "react-router";
import  PortfolioPage  from "./pages/PortfolioPage";
import { ContactPage } from "./pages/ContactPage";
import { BlogsPage } from "./pages/BlogsPage";
import { useState } from "react";


function App() {
  const [navToggle, setNaveToggle] = useState(false);

 
  const navClick = () => {
    setNaveToggle(!navToggle)
    document.addEventListener("mousedown", () =>{
      setNaveToggle(false);
    });


  }
  return (
    <div className="App">
      <div id="sideB" className={`sidebar ${navToggle ? "nav-toggle": ""}`}>
        <Navbar/>
      </div>
      <div className="nav-btn" id="Navtog" onClick={navClick}>
         <div className="line1"></div>
         <div className="line2"></div>
         <div className="line3"></div>
      </div>
      <div className="main-content">
        <div className="content">
          <Switch>
            <Route path="/" exact>
              <HomePage/>
            </Route>
            <Route path="/about" exact>
              <AboutPage/>
            </Route>
            <Route path="/portfolio" exact>
              <PortfolioPage/>
            </Route>
            <Route path="/contact" exact>
              <ContactPage/>
            </Route>
            <Route path="/blogs" exact>
              <BlogsPage/>
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
