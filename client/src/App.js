import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./Pages/Home/Home";
//Calendar
import Calendar from "./Components/Calendar/Calendar";
// Redux 
import { Provider} from "react-redux";
import store from "./store";


function App() {

  return (
    <div>
    <Calendar />
    <Provider store={store}>
      <Router>
      <Route exact path="/" component={Home} />
      <Switch>

      </Switch>
    </Router>
    </Provider> 
    </div>  
  );
}

export default App;
