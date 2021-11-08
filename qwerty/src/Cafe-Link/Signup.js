import { Component } from "react";
import "./Signup.css";
import Login from "./Login";
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// import FormHelperText from '@material-ui/core/FormHelperText';
// import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import Button from '@material-ui/core/Button';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import axios from "axios";
// import FormLabel from '@material-ui/core/FormLabel';

class Signup extends Component {
    constructor() {
        super();
        this.state = {
            n: "",
            m: "",
            o: "",
            p: "",
            i: "",
            j: "",
            k: "",
            st: false,
        };
    }
    update = (e) => {
        this.setState({ ...this.state, [e.target.name]: e.target.value });
    }
    update1 = () => { this.setState({ st: true }); }

    sendData(ev) {

        const n = this.state.n;
        const m = this.state.m;
        const o = this.state.o;
        const p = this.state.p;
        // const cafe_id=this.state.cafe_id;
        // const user_review=this.state.user_review;
        // console.log(user_id);
        // console.log(user_review);
        // console.log(cafe_id);
        const data = {
            n,m,o,p
        }

        axios.get(' http://localhost/User_details.php', { params: data }).then(edit => {

            console.log(edit);

            this.setState({
                message: edit.data.response
            })
        }).catch(err => {
            console.log("failed");
        })


    }


    render() {
        return (<div>
            {this.state.st ? (<Login />) : (
                <div className="full">
                    <div className="d1"><h2>Create an Account</h2></div>
                    <div className="d0">
                        <TextField id="filled-basic" label="Name" variant="outlined" className="user_name2" name="n" value={this.state.n} onChange={this.update.bind(this)} placeholder=" Name*" />
                        {/* <input type="text" className="user_name2" name="n" value={this.state.n} onChange={this.update} placeholder=" Name*"></input> */}
                    </div> <br />
                    <div className="d2">
                        <TextField id="outlined-basic" label="Email" variant="outlined" className="user_name2" name="m" value={this.state.m} onChange={this.update.bind(this)} placeholder=" Email*" />
                        {/* <input type="text" className="user_name2" name="m" value={this.state.m} onChange={this.update} placeholder=" EmailAddress*"></input> */}
                    </div> <br />
                    <div className="d3">
                        <TextField type = "Password" id="outlined-basic" label="Password" variant="outlined" className="user_name2" name="o" value={this.state.o} onChange={this.update.bind(this)} placeholder=" Password*" />
                        {/* <input type="password" name="o" value={this.state.o} onChange={this.update} placeholder=" Password*"></input> */}
                    </div> <br />
                    <div className="d5">
                        <TextField id="outlined-basic" label="PhoneNo" variant="outlined" className="user_name2" name="p" value={this.state.p} onChange={this.update.bind(this)} placeholder=" Phone No.*" />
                        {/* <input type="text" name="p" value={this.state.p} onChange={this.update} placeholder=" Phone No.*"></input> */}
                    </div> <br />
                    <div className="d7">
                        {/* <label className="d7">Admin</label><input type="radio" name="i" value={this.state.i} onChange={this.update}></input> */}
                        <FormControl component="fieldset">
                            <RadioGroup aria-label="gender" name="gender1">
                                <FormControlLabel className = "radio1" value="Admin" control={<Radio />} label="Admin" />
                                <FormControlLabel className = "radio1" value="User" control={<Radio />} label="User" />
                                <FormControlLabel className = "radio1" value="CafeOwner" control={<Radio />} label="CafeOwner" />
                                </RadioGroup>
                        </FormControl>
                    </div>
                    <div className="ff">
                        <div className="fg">
                            <FormControl>
                                <InputLabel htmlFor="age-native-helper">Security Question</InputLabel>
                                <NativeSelect

                                    inputProps={{
                                        name: 'age',
                                        id: 'age-native-helper',
                                    }}
                                >
                                    <option aria-label="None" value="" />
                                    <option value={10}>what is your fav. food?</option>
                                    <option value={20}>what is your fav. food?</option>
                                    <option value={30}>what is your pet name?</option>
                                    <option value={40}>What is your fav. historical building?</option>
                                </NativeSelect>

                            </FormControl>

                            {/* <select>
                                <option value="">--Security Question--</option>
                                <option value="">what is your fav. food?</option>
                                <option value="">what is your fav. food?</option>
                                <option value="">what is your pet name?</option>
                                <option value="">What is your fav. historical building?</option>
                            </select> */}
                        </div>
                        <TextField id="outlined-basic" label="Answer" variant="filled" name="j" value={this.state.j} onChange={this.update} placeholder=" Security Answer*" />
                        {/* <input type="text" name="j" value={this.state.j} onChange={this.update} placeholder=" Security Answer*"></input> */}
                    </div>
                    <div className="hw">
                        <Button variant="contained" color="secondary" className="hh" type="submit" onClick = {this.sendData.bind(this)}>
                            SignUp
                        </Button>
                        {/* <button className="hh" type="submit">SignUp</button> */}
                    </div>
                    <div className="d4"><a href="#" onClick={this.update1} >Already have an account? SignIn</a></div>
                </div>
            )}
        </div>
        );
    }
}
export default Signup;