 import React , {Component} from 'react';
 import { Route,Redirect,Switch } from 'react-router-dom';
 import { ToastContainer } from 'react-toastify';
 import Movies from './components/movies';
 import Rentals from './components/rentals';
import NotFound from './components/notfound';
import Customers from './components/customers';
import NavBar from './components/navbar';
import MovieForm from './components/movieForm';
import LoginForm from './components/loginform';
import RegisterForm from './components/registerform';
import "react-toastify/dist/ReactToastify.css"
import './App.css';
 
// import { render } from '@testing-library/react';
 





class App extends Component {
  render(){
    return (
      <React.Fragment>
        <ToastContainer/>
      <NavBar/>
      <main className="container">
        <Switch>
        <Route path="/register" component={RegisterForm}></Route>
        <Route path="/login" component={LoginForm}></Route>
        <Route path="/movies/:id" component={MovieForm}></Route>
        <Route path="/movies" component={Movies}></Route>
        <Route path="/rentals" component={Rentals}></Route>
        <Route path="/not-found" component={NotFound}></Route>
        <Route path="/customers" component={Customers}></Route>
        <Redirect from="/" exact to="/movies"/>
        <Redirect to ="/not-found"/>
        </Switch>
      </main>
      </React.Fragment>
    )
  }
    
}

export default App;
