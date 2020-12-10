import React from 'react'
import Bio from './views/Bio'
import GlobalStyle from "./components/GlobalStyle"
import Nav from './components/Nav';
import { BrowserRouter as Router, Route , Switch} from 'react-router-dom';
import Contact from './views/Contact';
import Projects from './views/Projects'
import ProjectDetail from "./views/ProjectDetail";


function App() {
  return (
    <Router>
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route path="/" component={Bio} exact />
        <Route path="/projects" component={Projects} exact/>
        <Route path="/projects/:id" component={ProjectDetail} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
