import React, { Component } from 'react';
import './Addcategories.css'
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';

class Addcategories extends Component {

    constructor() {
        super();
        this.state = {
            Add_categories:"",
            message:""
        };
    }

    fun(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    sendData(ev) {
        const Add_categories = this.state.Add_categories;
        
        const data = {
            Add_categories
        }

        axios.get('http://localhost/Add_Quiz_categories.php', { params: data }).then(kalu =>{
            console.log(kalu); this.setState({ message: kalu.data.response }) })
            .catch(err => { console.log("failed"); })
    }

    render() {
        return (<div className="body">
            <h2 className="cafe_head"><b>Add Categories</b></h2> <br/>
            <Box textAlign='center'>
                <TextField id="outlined-basic" name="Add_categories" label="New_categories" variant="outlined" value = {this.state.Cafe_id} onChange= {this.fun.bind(this)} /></Box><br /><br />
            
            <Box textAlign='center'>
                <Button className="Button1" variant="contained" color="secondary" size="large" placeholder="Cafe Password" onClick={this.sendData.bind(this)}>
                    Add </Button> </Box>
                {/* <Button className="Button" type="reset" variant="contained" color="primary" size="large" placeholder="Cafe Password" onClick={this.sendData.bind(this)}>
                    Reset</Button>        */}
        </div>
        );
    }
}

export default Addcategories;



