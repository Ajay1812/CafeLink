import React, { Component } from 'react';
import Math from './Math';
import Gk from './Gk'
import Movies from './Movies'
import Sports from './Sports'
import './Quizpage.css'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { positions } from '@material-ui/system/positions';
import Box from '@material-ui/core/Box';



class Quizpage extends Component {

    constructor() {
        super();
        this.state = {
            st: false,
            n: false,
            m: false,
            o: false



        };
    }

    update = () => {
        this.setState({ st: true })
        this.setState({ n: true })
        this.setState({ m: true })
        this.setState({ o: true })

    }
    render() {


        return (<div>{this.state.o ? (<Sports />) : (this.state.m ? (<Movies />) : (this.state.n ? (<Gk />) : (this.state.st ? (<Math />) : (
            <div className="unsplash">
            <div className="center"><br />
                    <img  src="Icon/unnamed.png" alt="image" width="200"></img>
                </div>
                <div className ="Q1">
                    <h2 className="cate" >Categories : </h2>
                    <Box textAlign='center'>
                    <Button  className="Button" variant="contained" color="primary" size="large" onClick={this.update} >
                    Maths
                    </Button></Box><br />
                    <Box textAlign='center'>
                    <Button  className="Button" variant="contained" color="primary" size="large" onClick={this.update} >
                    GK
                    </Button></Box><br />
                    <Box textAlign='center'>
                    <Button  className="Button" variant="contained" color="primary" size="large" onClick={this.update} >
                    Movies
                    </Button></Box><br />
                    <Box textAlign='center'>
                    <Button  className="Button" variant="contained" color="primary" size="large" onClick={this.update} >
                    Sports
                    </Button></Box><br />
                    {/* <Button className="Button" color="secondary" onClick={this.update}>Maths</Button> <br /> */}
                    {/* <button className="Button" onClick={this.update} >Maths</button> <br />
                    <button className="Button" onClick={this.update} >Gk</button><br />
                    <button className="Button" onClick={this.update} >Movies</button> <br />
                    <button className="Button" onClick={this.update} >Sports</button> <br /> */}
                    {/* <Button variant="outlined">Default</Button> */}
                </div>
            </div>
        ))))}</div>

        );
    }
}

export default Quizpage;




