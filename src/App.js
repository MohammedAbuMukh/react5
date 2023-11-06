import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Welcome from "./Welcome";
import Menu from "./Menu";
import View from "./View";
import Load from "./Load";

function App() {
  return (
    <Router>
      <Routes className="App">
    
        <Route path="/" exact component={Welcome} />
        <Route path="/menu" component={Menu} />
        <Route path="/view" component={View} />
        <Route path="/load" component={Load} />
      
      </Routes>
    </Router>
  );
}

export default App;
