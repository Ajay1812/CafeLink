import React,{ Component } from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import img1 from './image/cafe.png';
import "./Addexam.css";
import Box from '@material-ui/core/Box';
class Addexam extends Component
{
    constructor()
    {
        super();
        this.state={
            n:"",
            st:false,
        };
    }
    update=(e)=>{
        this.setState({...this.state,[e.target.name]:e.target.value});
    }
    render()
    {
        return(
        <div>
            <div className="backco">
                <div className="ex">
                <h2>Add Exam</h2>
                </div>
                <div className="date">
                
                <form>
                    <TextField
                        id="date"
                        label="Exam.Date"
                        type="date"
                        defaultValue="2017-05-24"
                        InputLabelProps={{
                        shrink: true,
                        }}
                    />
                    </form>
                </div>
                <div className="time">
                <form>
                    <TextField
                        id="time"
                        label="Exam.Time"
                        type="time"
                        defaultValue="07:30"
                        className="gg"
                        InputLabelProps={{
                        shrink: true,
                        }}
                        inputProps={{
                        step: 300, // 5 min
                    
                        }}
                    />
                    </form>
                </div>
                <div className="cat">
                                <TextField
                                onChange={this.update}
                        id="outlined-multiline-flexible"
                        label="Category-ID"
                        multiline
                        className="text"
                        name="n" 
                        value={this.state.n}
                        rowsMax={20}
                        // value={value}
                        // onChange={handleChange}
                        variant="outlined"
                        />
                </div>
                <div className="butto">
                                <Button variant="contained"  color="secondary" size="large" onClick={this.update1} size="medium">
                                Add
                                </Button>
                </div>

            </div>

        </div>

        );
    }
}
export default Addexam;