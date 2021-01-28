import './App.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import RegisterForm from './Components/RegistrationPage/register.jsx'
 import LoginForm from './Components/LoginPage/login.jsx'
 import ForgotPassword from './Components/Forgot-Password/forgotPassword.jsx'
 import ResetPassword from './Components/Reset-password/resetPassword.jsx'
  import Dashboard from './Components/Dashboard/Dashboard.jsx'


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Switch>
        <Route path="/register" component={RegisterForm} />
        <Route path="/login" component={LoginForm} />
        <Route path="/forgot" component={ForgotPassword} />
        <Route path="/resetPassword/:id" component={ResetPassword} />
        <Route path="/dashboard" component={Dashboard} />   
      </Switch>
    </BrowserRouter>
  </div>
  );
}

export default App;
