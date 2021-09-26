import "./App.css";
import "./App.scss";
import "./components/Navbar";
import { Navbar } from "./components/Navbar";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { Switch, Route } from "react-router";
import { PortfolioPage } from "./pages/PortfolioPage";
import { ContactPage } from "./pages/ContactPage";
import { BlogsPage } from "./pages/BlogsPage";

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <Navbar/>
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
