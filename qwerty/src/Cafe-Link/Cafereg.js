import React, { Component } from "react";
import "./Cafereg.css";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import axios from "axios";


class Cafereg extends Component {
    constructor() {
        super();
        this.state = {
            Cafe_id: "",
            Cafe_Location: "",
            Cafe_Password: "",
            Enter_Area:"",
            Enter_pincode:"",
            Address:"",
            Cafe_Name:"",
            Cafe_Email:"",
            message: ""
        };
    }

    fun(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    // fun(f) {
    //     this.setState({
    //         [f.target.name]: f.target.value
    //     })
    // }

    sendData(ev) {
        const Cafe_id = this.state.Cafe_id;
        const Cafe_Name = this.state.Cafe_Name;
        const Cafe_Location = this.state.Cafe_Location;
        const Cafe_Password = this.state.Cafe_Password;
        const Enter_Area = this.state.Enter_Area;
        const Enter_pincode = this.state.Enter_pincode;
        const Address= this.state.Address;
        const Cafe_Email = this.state.Cafe_Email;
        const data = {
            Cafe_id,
            Cafe_Name,
            Cafe_Location,
            Cafe_Password,
            Enter_Area,
            Cafe_Email,
            Enter_pincode,
            Address

        };

        axios
            .get("http://localhost/Cafe_reg_insert.php", { params: data })
            .then((kalu) => {
                console.log(kalu);
                this.setState({ message: kalu.data.response });
            })
            .catch((err) => {
                console.log("failed");
            });
    }

    render() {
        return (
            <div className="body">
                <h2 className = "m1">
                    <b>Cafe Registraion</b>
                </h2> 
                {/* <input type="text" className = "id" placeholder ="Cafe id"></input> <br/> <br/> */}
                <Box textAlign="center">
                    <TextField
                        className = "width"

                        // id="outlined-basic"
                        name="Cafe_id"
                        label="Cafe_id"
                        variant="outlined"
                        placeholder="Cafe_id"
                        value={this.state.Cafe_id}
                        onChange={this.fun.bind(this)}
                    />
                </Box>
                <br />
                <Box textAlign="center">
                    <TextField
                        className = "width"

                        // id="outlined-basic"
                        name="Cafe_Name"
                        label="Cafe_Name"
                        variant="outlined"
                        placeholder="Cafe_Name"
                        value={this.state.Cafe_Name}
                        onChange={this.fun.bind(this)}
                    />
                </Box>
                <br />
                {/* <input type="text" className = "id" placeholder ="Cafe Name"></input><br/><br/> */}
                <Box textAlign="center">
                    <TextField
                        className = "width"
                        // id="outlined-basic"
                        name="Cafe_Location"
                        label="Cafe_Loaction"
                        variant="outlined"
                        placeholder="Cafe_Location"
                        value={this.state.Cafe_Location}
                        onChange={this.fun.bind(this)}
                    />
                </Box>
                <br />
                
                <Box textAlign="center">
                    <TextField
                        // id="outlined-basic"
                        className = "width"
                        name="Enter_Area"
                        label="Enter_Area"
                        variant="outlined"
                        placeholder="Enter_Area"
                        value={this.state.Enter_Area}
                        onChange={this.fun.bind(this)}
                    />
                </Box>
                <br/>
                
                <Box textAlign="center">
                    <TextField
                        // id="outlined-basic"
                        className = "width"
                        name="Enter_pincode"
                        label="Enter Pincode"
                        variant="outlined"
                        placeholder="Enter_Pincode"
                        value={this.state.Enter_pincode}
                        onChange={this.fun.bind(this)}
                    />
                </Box>
                <br/>
                
                {/* <input type="text" className = "id" placeholder ="Cafe Loaction"></input><br/><br/> */}
                <Box textAlign="center">
                    <TextField
                        id="outlined-basic"
                        className = "width"
                        name="Address"
                        label="Address"
                        variant="outlined"
                        placeholder="Address"
                        value={this.state.Address}
                        onChange={this.fun.bind(this)}
                    />
                </Box>
                <br />
                <Box textAlign="center">
                    <TextField
                        id="outlined-basic"
                        className = "width"
                        name="Cafe_Email"
                        label="Cafe_Email"
                        variant="outlined"
                        placeholder="Cafe_Email"
                        value={this.state.Cafe_Email}
                        onChange={this.fun.bind(this)}
                    />
                </Box>
                <br/>
                
                {/* <input type="Email" className = "id" ></input><br/><br/> */}
                <Box textAlign="center">
                    <TextField
                        type="password"
                        className = "width"
                        // id="outlined-basic"
                        name="Cafe_Password"
                        label="Cafe_Password"
                        variant="outlined"
                        placeholder="Cafe_password"
                        value={this.state.Cafe_Passwrord}
                        onChange={this.fun.bind(this)}
                    />
                </Box>
                <br />
                <label className = "Name1">Adhaar Card</label>
                <input className = "photo" type = "file"></input>
                
                <br/><br/>
                <label className = "Name1">Cafe Validation Certificate </label>
                <input className = "photo" type = "file"></input>
                <br/><br/>
                <label className = "Name1">Cafe Menu</label>
                <input className = "photo" type = "file"></input>
                <br/><br/>
                
                
                {/* <input type="Password" className = "id" placeholder ="Cafe Password"></input><br/> <br/> <br/> */}
                <Box textAlign="center">
                {/* <a href= "<Cafereg/>" > */}
                        <Button
                        className="Button1"
                        variant="contained"
                        color="secondary"
                        size="large"
                        placeholder="Cafe Password"
                        type="password"
                        onClick={this.sendData.bind(this)}
                    >
                        Register
                    </Button>
                </Box>
                

                <br />
            </div>
        );
    }
}

export default Cafereg;
