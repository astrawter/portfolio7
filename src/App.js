import logo from './logo.svg';
import './App.css';
import Jumbotron from './components/jumbotron'
import Nav from './components/nav'
import About from './components/about'
import Portfolio from './components/portfolio'

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Jumbotron></Jumbotron>
      <Portfolio></Portfolio>
      <About></About>
    </div>
  );
}
export default App;


//<header className="App-header">
  //<img src={logo} className="App-logo" alt="logo" />
//</header>
