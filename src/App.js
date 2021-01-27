import React from 'react'
import Bio from './views/Bio'
import GlobalStyle from "./components/GlobalStyle"
import Nav from './components/Nav';
import { Route , Switch, useLocation} from 'react-router-dom';
import Contact from './views/Contact';
import Projects from './views/Projects'
import ProjectDetail from "./views/ProjectDetail";
import { AnimatePresence } from 'framer-motion';

function App() {
  const location= useLocation();
  
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" component={Bio} exact />
          <Route path="/projects" component={Projects} exact/>
          <Route path="/projects/:id" component={ProjectDetail} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
