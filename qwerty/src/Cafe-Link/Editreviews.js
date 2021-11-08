import React, { Component } from 'react';
import './Editreviews.css';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

import axios from 'axios';
class Editreviews extends Component {

    constructor() {
        super();
        this.state = {
            cafe_id: "",
            user_id: "",
            review: "",
            message: ""
        };
    }

    fun(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    sendData(ev) {
        const cafe_id = this.state.cafe_id;
        const user_id = this.state.user_id;
        const review = this.state.review;


        const data = {
            cafe_id, user_id, review
        }
        axios.get('http://localhost/Editreview_update.php', { params: data }).then(Kalu => {
            console.log(Kalu);
            this.setState({
                message: Kalu.data.response
            })
        }).catch(err => {
            console.log("failed");
        })

    }
    render() {
        return (<div>
            <h2><b>Edit Reviews</b></h2> <br />
            {/* <input type="text" className = "id1" name="cafe_id" placeholder ="Cafe id" value = {this.state.Cafe_id} onChange= {this.fun.bind(this)}></input> <br/> <br/> */}
            <Box textAlign='center'>
                <TextField id="outlined-basic" label="Cafe ID" variant="outlined" type="text" className="id1" name="cafe_id" placeholder="Cafe id" value={this.state.Cafe_id} onChange={this.fun.bind(this)}></TextField> </Box><br />
            {/* <input type="text" className = "id1" name="user_id" placeholder ="Customer id" value = {this.state.Cafe_id} onChange= {this.fun.bind(this)}></input> <br/> <br/> */}
            <Box textAlign='center'>
                <TextField id="outlined-basic" label="Customer ID" variant="outlined" type="text" className="id1" name="user_id" placeholder="Customer id" value={this.state.Cafe_id} onChange={this.fun.bind(this)}></TextField></Box><br />
            {/* <input type="text" className = "id2" name="review" placeholder ="Review Text" value = {this.state.Cafe_id} onChange= {this.fun.bind(this)}></input> <br/> <br/> */}
            <Box textAlign='center'>
                <TextareaAutosize type="text" className="id2" name="review" placeholder="Review Text" value={this.state.Cafe_id} onChange={this.fun.bind(this)} aria-label="minimum height" rowsMin={3} maxRows={3} placeholder="Enter Your Review" /></Box> <br/>
            {/* <TextField type="text" className = "id2" name="review" placeholder ="Review Text" value = {this.state.Cafe_id} onChange= {this.fun.bind(this)}></TextField></Box><br/> <br/> */} 
            {/* <button className = "Button" onClick={this.sendData.bind(this)}>Update</button> */}
            <Box textAlign='center'>
                <Button variant="contained" color="secondary" className="Button" size = "large" onClick={this.sendData.bind(this)}>
                    Update</Button></Box>
            {this.state.message}
        </div>
        );
    }
}
export default Editreviews;



