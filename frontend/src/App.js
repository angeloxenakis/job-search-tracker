import './App.css'; 
import { BrowserRouter, Route } from "react-router-dom"

import { NavBar } from "./components/NavBar"
import { OppContainer } from "./components/OppContainer"
import { About } from "./components/About"
import { Auth } from "./components/Auth"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Route exact path="/" component={OppContainer}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/login" component={Auth}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
