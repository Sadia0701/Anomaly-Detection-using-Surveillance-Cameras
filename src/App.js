import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import ModuleSelection from './components/ModuleSelection';
// import EvaluationCriteriaSelection from './EvaluationCriteriaSelection';
import ExecutionResult from './components/ExecutionResult';
import ComparisonResult from './components/ComparisonResult';
import SignupForm from './components/SignupForm';
import LandingComponent from './components/LandingComponent';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {

  const [ user, setLoginUser] = useState({})
  const [ isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <div className="App">

      <Router>
      {/* <Navbar
        setLoginUser={setLoginUser}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
      /> */}
        <Switch>
          <Route exact path="/">
              <LandingComponent />:
          </Route>
          <Route path="/login">
            <LoginForm 
              setLoginUser={setLoginUser}
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
            />
          </Route>
          <Route path="/signup">
            <SignupForm />
          </Route>
          <Route path="/results">
          <ExecutionResult />
          </Route>

          <Route path="/homepage">
           <ModuleSelection 
            setLoginUser={setLoginUser}
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
           />
          </Route>
          
          <Route path="/compareresults">
          <ComparisonResult setLoginUser={setLoginUser}/>
          </Route>   


        </Switch>
       
      </Router>
       {/* <Footer/> */}
    </div>
  );
}

export default App;
