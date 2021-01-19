import React  from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import ReactDOM, { render } from 'react-dom';
import './register.css'
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
render() {
    return (
      <div className="main">
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
                   <TextField id="outlined-basic" label="First Name" variant="outlined" />
                 </div>
                <div className="lname">
                   <TextField id="outlined-basic" label="Last Name" variant="outlined" />
                </div>
             </div>
            <div className="email">
                  <TextField id="outlined-basic" style ={{width: '155%'}} label="Username" variant="outlined" width="500px" />
                  <p><span class="spanid">You can use letters, numbers and symbols</span></p>
            </div>
           <div className="emp">  
              {/* <div className="pwd">     */}
                  <TextField id="outlined-basic" label="password" variant="outlined" />  
              {/* </div> */}
              {/* <div className="conf">     */}
                 <TextField id="outlined-basic" label="confirm" variant="outlined" />
              {/* <div>  */}
              <p><span class="spanid">Use 8 or more characters with a mix of letters, numbers & symbols</span></p>
          </div>
          <Button className="button1" variant="contained" color="primary">  Next </Button>
          <Button className="button2" color="primary">Sign in instead</Button>
        </div>
    </div>
    
    ) ;   
}

}

