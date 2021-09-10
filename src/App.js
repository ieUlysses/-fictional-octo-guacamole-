import ProjectsProvider from "./Info/ProjectsProvider"
import Cards from "./Componants/Cards"
import ViewManager from "./Componants/ViewManager";
import NavBar from "./Componants/NavBar"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./Componants/About";
import "./Componants/Projects.css"
import Service from "./Componants/Projects";
import Projects from "./Componants/Projects";
import Forms from "./Componants/Forms";

import MyContext from "./Context/MyContext";

function App() {
  return (

    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={ViewManager} />
          <Route path="/projects" component={Projects} />
          <Route path="/about" component={About} />

        </Switch>
      </Router>


    </div>
  );
}

export default App;
