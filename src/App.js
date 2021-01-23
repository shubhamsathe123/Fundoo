import './App.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import RegisterForm from './Components/RegistrationPage/register.jsx'
 import LoginForm from './Components/LoginPage/login.jsx'


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Switch>
        <Route path="/register" component={RegisterForm} />
        <Route path="/login" component={LoginForm} />
      </Switch>
    </BrowserRouter>
  </div>
  );
}

export default App;
