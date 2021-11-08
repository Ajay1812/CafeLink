import React, { Component } from 'react';
import './Cafereg1.css'
import axios from "axios";
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';

class Cafereg1 extends Component {

    constructor() {
        super();
        this.state = {

            message: ""
        };
    }
    update = (e) => {
        this.setState({ ...this.state, [e.target.name]: e.target.value });
    }

    sendData() {


        const cid = this.state.cid
        const cname = this.state.cname
        const clocation = this.state.clocation
        const cemail = this.state.cemail
        const cpass = this.state.cpass
        const data = {
            cid, cname, clocation, cemail, cpass
        }

        axios.get("http://localhost/cin.php", { params: data }).then(cin => {
            console.log(cin);

            this.setState({ message: cin.data.response })

        }).catch(err => {
            console.log("failed");
        })
    }




    render() {
        return (<div className="body">
            <div className="ma"><h2 className="cafe_head"><b>Cafe Registraion</b></h2></div>
            <Box textAlign='center'>
                <TextField id="outlined-basic" label="Cafe id" variant="outlined" name="cid" value={this.setState.cid} onChange={this.update.bind(this)} /></Box><br /> <br />
            <Box textAlign='center'>
                <TextField id="outlined-basic" label="C_Name" variant="outlined" name="cname" value={this.setState.cname} onChange={this.update.bind(this)} /></Box><br /> <br />
            <Box textAlign='center'>
                <TextField id="outlined-basic" label="Cafe Loaction" variant="outlined" name="clocation" value={this.setState.clocation} onChange={this.update.bind(this)} /></Box><br /><br />
            <Box textAlign='center'>
                <TextField id="outlined-basic" label="Cafe Email" variant="outlined" name="cemail" value={this.setState.cemail} onChange={this.update.bind(this)} /></Box><br /><br />
            <Box textAlign='center'>
                <TextField id="outlined-basic" label="Cafe Password" variant="outlined" name="cpass" value={this.setState.cpass} onChange={this.update.bind(this)} /></Box><br /><br /><br />
            <Box textAlign='center'>
                <Button className="Button1" variant="contained" color="primary" size="large" onClick={this.sendData.bind(this)} >
                    Register</Button></Box><br />

            {this.state.message}
        </div>

        );
    }
}

export default Cafereg1;