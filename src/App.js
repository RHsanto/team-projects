import React from 'react';
import { BrowserRouter as Router, Route, Switch ,} from 'react-router-dom';
import './App.css';
import Home from './Home/Home/Home';

function App() {
  return (
    <div className="App">
     <Router>
       <Switch>
         <Route exact path ='/'>
           <Home/>
         </Route>
         <Route path ='/home'>
           <Home/>
         </Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
