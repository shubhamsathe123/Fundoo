import React  from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import logo from '../../Images/account.svg';
import Checkbox from '@material-ui/core/Checkbox';
// import ReactDOM, { render } from 'react-dom';
import '../RegistrationPage/register.css'
// import { FormHelperText, Grid } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(5),
      width: '25ch',
    },
  },
}));

export default class RegisterForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      Rpassword: "",
      errorValid: {
        firstName: false,
        lastName: false,
        email: false,
        password: false,
        Rpassword: false,
        showPassword : false,
      }, 
      errors: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        Rpassword: "",
      },
    };
  }

  handleFirstNameInput = (event) => {
    event.preventDefault();
    this.setState({
      firstName: event.target.value,
    });
    let errors = this.state.errors;
    let validate = false;
    const regexvalidatefirstName = new RegExp(/^[A-Z]{1}[a-z]{3,}$/);
    if (!regexvalidatefirstName.test(this.state.firstName)) {
      errors.firstName = "First Name is incorrect";
      validate = true;
    } else {
      errors.firstName = "";
    }
    this.setState({
      errorValid: { firstName: validate },
      errors: { firstName: errors.firstName },
    });
  };
  
  handleLastNameInput = (event) => {
    event.preventDefault();
    this.setState({
      lastName: event.target.value,
    });
    let errors = this.state.errors;
    let validate = false;
    
    const regexvalidatelastName = new RegExp(/^[A-Z]{1}[a-z]{3,}$/);
    if (!regexvalidatelastName.test(event.target.value)) {
      errors.lastName = "Last Name is incorrect";
      validate = true;
    } else {
      errors.lastName = "";
    }
    this.setState({
      errorValid: { lastName: validate },
      errors: { lastName: errors.lastName },
    });
  };

   

  handleEmailInput = (event) => {
    event.preventDefault();
    this.setState({
      email: event.target.value,
    });
    let errors = this.state.errors;
    let validate = false;
    const regexValidateEmail = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$$/);
    if (!regexValidateEmail.test(event.target.value)) {
      errors.email = "Email is not according to the syntx";
      validate = true;
    } else {
      errors.email = "";
    }
    this.setState({
      errorValid: { email: validate },
      errors: { email: errors.email },
    });
  };

  handlePasswordInput = (event) => {
    event.preventDefault();
    this.setState({
      hidePassword: true,
      password: event.target.value,
      icEye: 'visibility-off',
    });
    let errors = this.state.errors;
    let validate = false;
    const regexvalidatePassword = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/);
    if (!regexvalidatePassword.test(event.target.value)) {
      errors.password =
        "Password is not valid";
      validate = true;
    } else {
      errors.password = "";
    }
    this.setState({
      errorValid: { password: validate },
      errors: { password: errors.password },
    });
  };
  
  
  handleReapetPasswordInput = (event) => {
    event.preventDefault();
    this.setState({
      hidePassword: true,
      Rpassword: event.target.value,
      icEye: 'visibility-off',
    });
    let errors = this.state.errors;
    let validate = false;
    if (this.state.password !== this.state.Rpassword) {

      errors.Rpassword =
        "";
      validate = true;

    } else if (this.state.password === this.state.Rpassword) {
      errors.Rpassword = true;
    }
    this.setState({

      errorValid: { Rpassword: validate },
      errors: { Rpassword: errors.Rpassword },
    });
   
  };

   handleSubmit = () => {

         if (
           this.state.email === "" &&
           this.state.password === "" &&
           this.state.firstName === "" &&
           this.state.lastName === "" &&
           this.state.Rpassword === ""
         ) {
           this.setState({
             errorValid: {
               email: true,
               password: true,
               firstName: true,
               lastName: true,
               Rpassword: true
             },
             errors: {
               email: "email field shoul not be empty",
               password: "password field should not be empty",
               firstName: "firstname field should not be empty",
               lastName: "lastname field should not be empty",
               Rpassword: "password field should not be empty"
             },
           });
         }
    
        }   
render() {
    return (
      <div className="main" >
         <div className="left-container">
          <div className="title">
                 <Typography component="h1" variant="h5" className="fundooShift">
                     <span style={{ color: "#0606f8"}}><b>F</b></span>
                     <span style={{ color: "#d10303" }}><b>u</b></span>
                     <span style={{ color: "#f0b000" }}><b>n</b></span>
                     <span style={{ color: "#0606f8" }}><b>d</b></span>
                     <span style={{ color: "green" }}><b>o</b></span>
                    <span style={{ color: "#d10303" }}><b>o</b></span>
                </Typography>
         </div>
         <div className="header"><h1> Create your Fundoo Account</h1></div>

         <div className={useStyles.root} noValidate autoComplete="off">
             <div className="parent">
                 <div className="name">
                    <TextField 
                     size="small"  
                      id="outlined-basic"
                      label="First Name" 
                      variant="outlined" 
                       name = "firstName"
                       required
                       value={this.state.firstName}
                      error={this.state.errorValid.firstName}
                      onChange={this.handleFirstNameInput}
                      helperText={this.state.errors["firstName"]}
                         />
                  </div> 
                 <div className="laname">
                    <TextField size="small"  
                    id="outlined-basic" 
                    label="Last Name" 
                    variant="outlined" 
                    name = "lastName" 
                    value={this.state.lastName}
                    error={this.state.errorValid.lastName}
                   onChange={this.handleLastNameInput}
                   helperText={this.state.errors["lastName"]}
                      />
                 </div>
                
             </div>
            <div className="email">
                  <TextField size="small"  
                  id="outlined-basic" 
                  style ={{width: '140%'}} 
                  label="Username" 
                  variant="outlined" 
                  width="500px" 
                    name="email"
                    value={this.state.email}
                    error={this.state.errorValid.email}
                    onChange={this.handleEmailInput}
                    helperText={this.state.errors["email"]}
                     />
                  <p><span  class="spanid">You can use letters, numbers and symbols</span></p>
            </div>
            <div className="emp"> 
               <div className="name">       
                <TextField  size="small"  
                id="outlined-basic" 
                label="password" 
                variant="outlined"  
                 name="password"
                 autoComplete="current-password"
                 value={this.state.password}
                error={this.state.errorValid.password}
                onChange={this.handlePasswordInput}
                helperText={this.state.errors["password"]}
                type={this.state.showPassword ? 'text' : 'password'}
                 />
                </div> 
                 <TextField size="small" 
                 id="outlined-basic" 
                 label="confirm" 
                 variant="outlined"
                 name="rpassword"
                 error={this.state.errorValid.Rpassword}
                onChange={this.handleReapetPasswordInput}
               helperText={this.state.errors["Rpassword"]}
               type="text"
              // type={this.state.showPassword ? 'text' : 'password'}
                  />     
            </div>
          <div>
             <p><span class="spanid">Use 8 or more characters with a mix of letters, numbers & symbols</span></p>
          </div>
          <div className="chkbox">
          <Checkbox
            defaultChecked
           color="primary"
            inputProps={{ 'aria-label': 'secondary checkbox' }}
         />
          <p>show password</p>
          </div>
              <Button className="button1" 
              variant="contained" 
              color="primary"
              onClick={this.handleSubmit}
              >  Next </Button>
              <Button className="button2" color="primary">Sign in instead</Button>
        </div>
      </div>

         <div className="right-container">
            <img src={logo} style={{ height: 256 }} alt="Signup logo" />
            
           <p> One account. All of Google  working <br/> for you.</p> 
         </div>
    </div>
     
      
    
    ) ;   
}

}

