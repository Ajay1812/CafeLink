import { Component } from "react";
import "./Login.css";
import Signup from './Signup';
import User_dash from "./User_dash";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
class Login extends Component {
    constructor() {
        super();
        this.state = {
            n: "",
            m:"",
            si: false,
            st: false,
        };
    }
    checklogin = () => {
        console.log(this.state.n);
        console.log(this.state.m);
        if (this.state.n == "abc" && this.state.m == "xyz") {
            // alert("Valid User");
            this.setState({ st: true });
        }
        else {
            alert("Not Valid User");
        }
    };
    update1 = () => {
        this.setState({ si: true });
    }
    update = (e) => {
        this.setState({ ...this.state, [e.target.name]: e.target.value });
    }
    render() {
        return (<div>
            {this.state.st ? (<User_dash />) : (
                this.state.si ? (<Signup />) : (
                    <div className="full1">
                        <div className="d1"><h1 className="head_login">SIGN IN</h1></div> <br/>
                        <div className="d2"><TextField id="outlined-basic" label="EmailAddress*" variant="outlined" className="user_name1" name="n" value={this.state.n} onChange={this.update} placeholder=" EmailAddress" /> </div> <br />
                        {/* <div className="d2"><input type="text" className="user_name1" name="n" value={this.state.n} onChange={this.update} placeholder=" EmailAddress*"></input></div> */}
                        <div className="d3"><TextField type="password"  id="outlined-basic" label="Password*" variant="outlined" className="user_name1" name="m" value={this.state.m} onChange={this.update} placeholder=" Password" /> </div><br /><br />
                        {/* <div className="d3"><input type="password" name="m" value={this.state.m} onChange={this.update} placeholder=" Password*"></input></div> */}
                        {/* <div className="hw"><button className="hh" type="submit" onClick={this.checklogin}>LogIn</button></div> */}
                        <div className="hw"><Button  className="hh" type="submit" onClick={this.checklogin} variant="contained" color="secondary">
                        Login
                        </Button></div> 
                        <div className="d5"><a href="Forget.js">Forget Password?</a></div>
                        <div className="d4"><a href="#" onClick={this.update1} >Don't have an account? SignUp</a></div>

                    </div>
                ))}
        </div>
        );
    }
}
export default Login;