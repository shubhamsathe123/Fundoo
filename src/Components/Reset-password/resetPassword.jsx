import React, { Component } from "react"
import "./resetPassword.css"
import { Card } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import UserService from '../../Services/userService'

const userServices = new UserService()


class ResetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password1: "",
      password2: "",
      password1error: "",
      password2error: "",
      errorValid: {

        password1: false,
        password2: false,

      },
      enable: true,
      service: "advance",
      errors: {
        password1: "",
        password2: "",
      },

    };
  }

  handlePassword1Input = (event) => {

    event.preventDefault();
    this.setState({
      hidePassword: true,
      password1: event.target.value,
      icEye: 'visibility-off',
    });
    let errors = this.state.errors;
    let validate = false;
    const regexvalidatePassword1 = new RegExp(/[A-Z]/ && /[0-9]/ && !/[aeiou]/ && /^[@#][A-Za-z0-9]{7,13}$/);
    if (!regexvalidatePassword1.test(event.target.value)) {
      errors.password =
        "Password is not valid";
      validate = true;
    } else {
      errors.password = "";
    }
    this.setState({
      errorValid: { password1: validate },
      errors: { password1: errors.password1 },
    });
  };

  handlePassword2Input = (event) => {
    event.preventDefault();
    this.setState({
      hidePassword: true,
      password2: event.target.value,
      icEye: 'visibility-off',
    });
    let errors = this.state.errors;
    let validate = false;
    if (this.state.password !== this.state.password2) {

      errors.password2 =
        "Password did not match";
      validate = true;

    } else if (this.state.password === this.state.password2) {
      errors.password2 = true;
    }
    this.setState({

      errorValid: { password2: validate },
      errors: { password2: errors.password2 },
    });

  };

  handleSubmit = (e) => {
    e.preventDefault()
    let token = this.props.match.params.id;
    console.log("token is" + token)
    if (this.state.password1 === "" && this.state.password2 === "") {
      this.setState({
        password1: this.state.password1,

        errorValid: {

          password1: true,
          password2: true

        },
        errors: {

          password1: "Password field should not be empty",
          password2: "Confirm password field should not be empty",
        },
      });
    }

    if (this.state.password1 !== "" && this.state.password2 !== "") {
      console.log("valid form");

      let ResetPasswordData = {
        newPassword: this.state.password1,
        // password2: this.state.password2,
      };
      userServices.resetPassword(ResetPasswordData, token).then((response) => {
        console.log(response)

      }).catch((error) => {
        console.log(error)
      })

    } else {
      console.log("invalid form");
    }

  };
  // this.validateForm()  &&
  // validateForm() {
  //   let valids = true;
  //   Object.values(this.state.errors).forEach(
  //     (val) => val.length > 0 && (valids = false)
  //   );
  //   return valids;
  // }
  render() {
    return (
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
                <span style={{ color: "#0606f8" }}>F</span>
                <span style={{ color: "#d10303" }}>u</span>
                <span style={{ color: "#f0b000" }}>n</span>
                <span style={{ color: "#0606f8" }}>d</span>
                <span style={{ color: "green" }}>o</span>
                <span style={{ color: "#d10303" }}>o</span>
              </Typography>
              <Typography component="h1" variant="h5" className="head">
                <span><h6>Resetting the password for </h6></span>
              </Typography>
              <form className="form">
                <Grid>
                  <Grid>
                    <br>
                    </br>
                    <br>
                    </br>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="password1"
                      label="Enter your new password:"
                      name="password1"
                      autoComplete="password1"
                      value={this.state.password1}
                      error={this.state.errorValid.password1}
                      onChange={this.handlePassword1Input}
                      helperText={this.state.errors["password1"]}
                      type={this.state.showPassword ? 'text' : 'password1'}


                    />

                  </Grid>

                </Grid>
                <br>
                </br>
                <Grid>
                  <Grid>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="password2"
                      label="Enter your confirm password :"
                      name="password2"
                      autoComplete="password2"
                      value={this.state.password2}
                      error={this.state.errorValid.password2}
                      onChange={this.handlePassword2Input}
                      helperText={this.state.errors["password2"]}
                      type="text"
                      type={this.state.showPassword ? 'text' : 'password2'}
                    />
                    {this.state.pass2error ? (<div style={{ color: "red" }} fontsize="10">
                      {this.state.pass2error}
                    </div>) : null}
                  </Grid>

                </Grid>
                <br>
                </br>
                <Grid>
                  <Grid>
                    <Link color="textPrimary" >
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={this.handleSubmit}>
                        Submit
                  </Button>
                    </Link>
                  </Grid>
                </Grid>
              </form>
            </div>
          </Container>
        </Card>
      </div>
    )
  }
}

export default ResetPassword;