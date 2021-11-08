import { Component } from "react";
import './Add_offer_admin.css';
import axios from "axios";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
// import { createMuiTheme } from '@material-ui/core/styles'
// import { ThemeProvider } from '@material-ui/styles';

class Add_offer_admin extends Component {

    constructor() {
        super();
        this.state = {

            offer_id: "",
            cafe_id: "",
            offer_description: "",
            message: "",

        }
    }


    fun(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    sendData(ev) {

        const offer_id = this.state.offer_id;
        const cafe_id = this.state.cafe_id;
        const offer_description = this.state.offer_description;

        // const theme = createMuiTheme({
        //     palette: {
        //     action: {
        //         disabledBackground: 'blue',
        //         disabled: 'set color of text here'
        //     }
        //     }
        // });


        const data = {
            offer_id, offer_description, cafe_id
        }

        axios.get('http://localhost/Offer_insert.php', { params: data }).then(insert => {
            console.log(insert);

            this.setState({
                message: insert.data.response
            })
        }).catch(err => {
            console.log("failed");
        })


    }

    render() {
        return (<div className="all">
            <div className="box_offer">

                <table className="offer_table" cellSpacing="10px" cellPadding="10px">
                    <tr>
                        <h1 className="offer_head">
                            Add Offer
                        </h1>
                    </tr>
                    <tr>
                        <td>
                            <TextField type="text" name="offer_id" className="offer_id" value={this.state.offer_id} onChange={this.fun.bind(this)} placeholder="Offer Name" id="outlined-basic" label="Offer_Name" variant="outlined" />
                            {/* <input type="text" name="offer_id" className="offer_id" value={this.state.offer_id} onChange={this.fun.bind(this)} placeholder="Offer Id"></input> */}
                        </td>
                    </tr><br />
                    <tr>
                        <td>
                            <TextField type="text" name="cafe_id" className="cafe_id" value={this.state.cafe_id} onChange={this.fun.bind(this)} placeholder="Cafe ID" id="outlined-basic" label="Cafe_id" variant="outlined" />
                            {/* <input type="text" name="cafe_id" className="cafe_id" value={this.state.cafe_id} onChange={this.fun.bind(this)} placeholder="Cafe Id"></input> */}
                        </td>
                    </tr><br />
                    <tr>
                        <td>
                            <TextareaAutosize name="offer_description" className="offer_description" value={this.state.offer_description} onChange={this.fun.bind(this)} placeholder="Offer Description" rows="4" cols="50" aria-label="minimum height" minRows={3} placeholder="Offer Description" />
                            {/* <textarea name="offer_description" className="offer_description" value={this.state.offer_description} onChange={this.fun.bind(this)} placeholder="Offer Description"  rows="4" cols="50"/>  */}
                            {/* <input type="text" className="offer_description" value="" placeholder="Offer Description"></input> */}
                        </td>
                    </tr> <br />
                    <tr>
                        <td className="button_setting">
                            {/* <button type="submit" onClick={this.sendData.bind(this)} className="add_offer" >Add Offer</button> */}
                            {/* <ThemeProvider className ="custom"> */}
                            <Button type="submit" onClick={this.sendData.bind(this)} className="add_offer" size = "large" variant="contained" color="secondary">
                                Add
                            </Button>
                            {/* </ThemeProvider> */}
                        </td>
                    </tr>
                </table>
            </div>
            {this.state.message}
        </div>)
    }


}
export default Add_offer_admin;