import React,{useState} from 'react';
import {BrowserRouter as Router , Route , Switch, Redirect} from 'react-router-dom';
import Main from './components/Main';
import './App.css';

function App() {
  const [name,setName] = useState('');
  function sname(name){
setName(name);
  }
  return (
    <div className="App">
          <Router>
         <Switch>
            <Route exact path={`/HomePage/bestMovie/${name}`} render={() => (<Main sname={sname} />)}/>
            <Redirect to='/HomePage/bestMovie' />
            </Switch> 
            </Router>    </div>
  );
}

export default App;
