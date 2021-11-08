import React, { Component } from 'react';
import './Rslt.css';
// import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
// import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
// import wner from './wner.jpg';
import Button from '@material-ui/core/Button';

class Result extends Component {

    

    render() {
        return (<div className="v1">
            <Container>

                {/* <div ClassName="n2"> */}
                <div >
                    <h1 className = "H1">WINNERS</h1>
                    <br></br>
                    <br></br>
                    <TextField id="filled-basic" variant="filled" label="1st place" />
                    <br></br>
                    <br></br>
                    <TextField id="filled-basic" variant="filled" label="2nd place" />
                    <br></br>
                    <br></br>
                    <TextField id="filled-basic"  variant="filled"label="3rd place" />
                    <br></br>
                    <br></br>
                    <Button variant="contained" color="secondary">
                    Display
                    </Button>
                </div>
                {/* </div> */}
            </Container>







        </div>);
    }



}
export default Result;
