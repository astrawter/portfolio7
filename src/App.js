import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Nav from './components/nav'
import Jumbotron from './components/jumbotron'
import Testimonials from './components/testimonials'
import About from './components/about'
import Portfolio from './components/portfolio'
import Footer from './components/footer'

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Nav></Nav>
          <Route exact path="/">
            <Jumbotron></Jumbotron>
            <Testimonials></Testimonials>
          </Route>
          <Route exact path="/portfolio">
            <Portfolio></Portfolio>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Footer></Footer>
        </div>
      </Switch>
    </Router>
  );
}
export default App;


//<header className="App-header">
  //<img src={logo} className="App-logo" alt="logo" />
//</header>
