import React, { Component } from "react"
 import "./forgotPassword.css"
import { Card } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import UserService from '../../Services/userService'

const userServices = new UserService()

class ForgotPassword extends Component{
    constructor(props) {
        super(props);
        this.state = {
          email: "",
         
          errorValid: {
            email: false,
          },
          enable: true,
          service: "advance",
          errors: {
            email: "",
          },
        };
      }

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

      handleSubmit2 = () =>{
        if(this.state.email === ""){
          this.setState({
            errorValid: {
              email: true,
            },
            errors: {
              email: "email field shoul not be empty",
            },
          });
          return false;
        }
      }
      
      handleSubmit =(event) =>{
        event.preventDefault();
        const err = this.handleSubmit2();
       if(!err){
        console.log("Line no 51")
         let forgotPassData = {
          cartId: "",
          email: this.state.email,
          service: "advance"
  
        }
        console.log(forgotPassData)
        userServices.forgot(forgotPassData).then((data)=>{
          console.log(data);
        })
        .catch ((error)=>{
          console.log(error)
        })
          
       }  
      }

render(){
    return(
        <div className="wrapper-tool">
            <Card id='form'>
            <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className="paper">
                <br>
                </br>
                <br>
                </br>
            <Typography component="h1" variant="h5" className="fundooShift">
              <span style={{ color: "#0606f8"}}>F</span>
              <span style={{ color: "#d10303" }}>u</span>
              <span style={{ color: "#f0b000" }}>n</span>
              <span style={{ color: "#0606f8" }}>d</span>
              <span style={{ color: "green" }}>o</span>
              <span style={{ color: "#d10303" }}>o</span>
              </Typography>
              <Typography component="h1" variant="h5" className="head">
              <span>Find your email</span>
              </Typography>
              <Typography component="h1" variant="h5" className="head">
              <span><h6>Please Enter your recovery email address</h6></span>
              </Typography>
              <form className="form">
              <Grid>
              <Grid>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="emailOrNumber"
                      label="Enter your email :"
                      name="email"
                      autoComplete="email"
                      value={this.state.email}
                      error={this.state.errorValid.email}
                      onChange={this.handleEmailInput}
                      helperText={this.state.errors["email"]}
                      
                     
                    />
                  </Grid>
                  
              </Grid>
              <br>
              </br>
              <Grid>
                  <Grid>
                  {/* href="http://localhost:3000/ResetPassword"  */}
                  <Link color="textPrimary" >
                  <Button 
                     variant="contained" 
                     color="primary"
                     onClick={this.handleSubmit}>
                      Reset password
                  </Button>
                  </Link>
                  </Grid>
                </Grid>
              </form>

            </div>
            </Container>
            </Card>
        </div>
    );
}

}
export default ForgotPassword;