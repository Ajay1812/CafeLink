import { Component } from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
//import DeleteIcon from '@material-ui/icons/Delete';
//import img1 from './image/cafe.png';
import Box from '@material-ui/core/Box';
import "./Cafedel.css";
import axios from 'axios';
class Cafedel extends Component {
    constructor() {
        super();
        this.state = {
            n: "",
            st: false,
        };
    }
    // update1=()=>{
    // alert("Are you sure to delete this detials!");
    // }
    update = (e) => {
        this.setState({ ...this.state, [e.target.name]: e.target.value });
    }

    sendData(ev) {

        const n = this.state.n;
        // const cafe_id=this.state.cafe_id;
        // const user_review=this.state.user_review;
        // console.log(user_id);
        // console.log(user_review);
        // console.log(cafe_id);
        const data = {
            n,
        }

        axios.get(' http://localhost/cfdl.php', { params: data }).then(edit => {

            console.log(edit);

            this.setState({
                message: edit.data.response
            })
        }).catch(err => {
            console.log("failed");
        })


    }
    render() {
        return (
            <div>
                <div className="back">
                    <div className="del">
                        <h3 textAlign='center'>Delete Cafe Details</h3>
                    </div>
                    {/* <div className="log"> */}
                    {/* <img src={img1} name="cafe" alt="cafe" height="100px" width="100px" className="img"></img> */}
                    {/* </div> */}
                    <div className="got">
                        <TextField
                            onChange={this.update}
                            id="outlined-multiline-flexible"
                            label="Cafe-ID"
                            multiline
                            className="text"
                            name="n"
                            value={this.state.n}
                            // rowsMax={20}
                            // value={value}
                            onChange={this.update.bind(this)}
                            variant="outlined"
                        /><br/>
                    </div>
                    <div className="button">

                        <Button variant="contained" color="secondary" size="large" onClick={this.sendData.bind(this)}>
                            Delete
                        </Button>
                    </div>

                </div>

            </div>

        );
    }
}
export default Cafedel;