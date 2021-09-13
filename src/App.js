
import NavBar from "./Componants/NavBar/NavBar"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./Pages/About/About";
import "./Pages/Projects/Projects.css"

import Projects from "./Pages/Projects/Projects";
import Contact from "./Pages/Contact/Contact";
import Welcome from "./Pages/Welcome/Welcome";



function App() {
  return (

    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path="/projects" component={Projects} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>


    </div>
  );
}

export default App;
