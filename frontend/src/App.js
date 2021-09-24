import './App.css'; 
import { BrowserRouter, Route } from "react-router-dom"
import { NavBar } from "./components/NavBar"
import { About } from "./components/About"
import { Auth } from "./components/Auth"
import { Footer } from "./components/Footer"
import { AppContainer } from './components/AppContainer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Route exact path="/" component={AppContainer}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/login" component={Auth}/>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
