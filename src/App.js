import React from 'react';
import Sidebar from './Sidebar';
import Hero from './Hero';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './Header';
import MenuAnimate from './MenuAnimate';
// import { Sidebar } from 'react-pro-sidebar';
// import { useState } from 'react';
// import {Router, Switch, Route} from 'react';

function App() {

  // const [show, setShow] = useState(false);

  return (


    <div className="App">
      <MenuAnimate/>
      {/* <Header /> */}
      {/* <Hero /> */}
      <Sidebar />

      {/* <Router>
        <Switch>
          <Route path='/' exact component={Header} />
         <Route path='/reports' component={Reports} />
          <Route path='/products' component={Products} /> 
        </Switch>
      </Router> */}
      {/* <button onClick={() => setShow(!show)} >Toggle</button> */}
      {/* {show ? <div id="accordian"></div> : null} */}
      {/* {show ? <h1>Hello World !</h1> : null} */}
      {/* <button onClick={()=>setShow(true)} >Show</button>
     <button onClick={()=>setShow(false)} >Hide</button> */}

    </div>
  );
}

export default App;