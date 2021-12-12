import './App.css';
import Navbar from './components/Navbar/Navbar';
import ElementPage from './Pages/ElementPage/ElementPage';
import HomePage from './Pages/HomePage/HomePage';
import axios from 'axios'
import { useEffect, useState } from 'react';
import {useHistory } from 'react-router-dom';

import {useDispatch, useSelector} from 'react-redux'
import {add_action,remove_action} from './redux/actions' ;
import MainPage from './Pages/MainPage/MainPage';
import DepPage from './Pages/DepPage/DepPage';
import {BrowserRouter , Route,Switch} from 'react-router-dom' ; 
import SearchPage from './Pages/SearchPage/SearchPage';
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage';
import Redirect from './Pages/Redirect';
import AdminPage from './Pages/AdminPage/AdminPage';
import LoginPage from './Pages/LoginPage/LoginPage';
import { GuardProvider, GuardedRoute } from 'react-router-guards';
import jwt_decode from "jwt-decode";

function App() {
  
  const elements = useSelector(state => state[0])
  const dispatch = useDispatch()
  const history = useHistory()

  
  
  const requireLogin = (to, from, next) => {

    const token = localStorage.getItem('token')
    let isAdmin
    try {
      if(!token) isAdmin = false
      else if(jwt_decode(token)) isAdmin = true
    } catch (error) {
        isAdmin = false
        localStorage.clear()
    }

    if (to.meta.auth) {
      if (to.location.pathname == '/admin' && isAdmin) next()
      else if(to.location.pathname == '/login' && !isAdmin) next()
      else if(to.location.pathname == '/admin' && !isAdmin) next.redirect('/login')
      else if (to.location.pathname == '/login' && isAdmin) next.redirect('/')
    } else next();
  };

  useEffect(()=>{
    axios.get('/api')
    .then(data =>{
      dispatch(add_action(data.data.data))
    })
    .catch(err => console.log(err))
    return(()=>console.log('component dead .. the connection will destroyed'))
  },[])

  return (
    <div className="App">
        <BrowserRouter>
          <div>
            <Navbar/>
            <GuardProvider guards={[requireLogin]} >
              <Switch>
                <GuardedRoute exact path='/' component={MainPage} />
                <GuardedRoute path='/home' component={HomePage} />
                <GuardedRoute exact path='/departments' component={Redirect} />
                <GuardedRoute path='/departments/:dep?/:subdep?' component={DepPage} />
                <GuardedRoute exact path='/search' component={SearchPage} />
                <GuardedRoute exact path='/elements' component={Redirect} />
                <GuardedRoute path='/elements/:element' component={ElementPage} />
                <GuardedRoute path='/admin' component={AdminPage} meta={{ auth: true }} />
                <GuardedRoute path='/login' component={LoginPage} meta={{ auth: true }}/>
                <GuardedRoute exact path='/404' component={NotFoundPage} />
                <GuardedRoute component={NotFoundPage} />
              </Switch>
            </GuardProvider>
          </div>
        </BrowserRouter>
    </div>
  );
}

export default App ;