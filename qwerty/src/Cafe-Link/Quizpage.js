import { render } from '@testing-library/react';
import React, { Component } from 'react';
import Math from './Math';
import Gk from './Gk'
import Movies from './Movies'
import Sports from './Sports'
import './Quizpage.css'
import unnamed from './image/unnamed.png';
// import cafe5 from './quiz.png'

import Button from '@material-ui/core/Button';

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


        return (<div>
            {this.state.o ? (<Sports />) : (this.state.m ? (<Movies />) : (this.state.n ? (<Gk />) : (this.state.st ? (<Math />) : (
            <div className="unsplash">
            <div className="center"><br />
                    <img src={unnamed } alt="image" width="180"></img>
                </div>
                <div className ="Q1">
                    <h1 className="cate" >Categories : </h1> <br/> <br/> 
                    {/* <button className="Button" onClick={this.update} >Maths</button> <br /> */}
                    <Button className="Button" variant="contained" color="secondary" size="large" onClick={this.update}>
                    Maths
                    </Button><br /><br />
                    {/* <button className="Button" onClick={this.update} >Gk</button><br /> */}
                    <Button className="Button" variant="contained" color="secondary" size="large" onClick={this.update}>
                    GK
                    </Button><br /><br />
                    {/* <button className="Button" onClick={this.update} >Movies</button> <br /> */}
                    <Button className="Button" variant="contained" color="secondary" size="large" onClick={this.update}>
                    Movies
                    </Button><br /><br />
                    {/* <button className="Button" onClick={this.update} >Sports</button> <br /> */}
                    <Button className="Button" variant="contained" color="secondary" size="large" onClick={this.update}>
                    Sports
                    </Button><br /><br />
                </div>
            </div>
        ))))}</div>

        );
    }
}

export default Quizpage



