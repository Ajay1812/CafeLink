import { Component } from "react";
import './Add_offer_cafeOwner.css';
import axios from "axios";
import Button from '@material-ui/core/Button';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import TextField from '@material-ui/core/TextField';

class Update_offer extends Component{

    constructor(props)
    {
        super(props);
        this.state={
            
            offer_description:"",
            message:"",
        }
    }

    update = (e) => {
        this.setState({ ...this.state, [e.target.name]: e.target.value });
    }

    sendData(){

        
        const offer_description = this.state.offer_description
        const Cafe_id = this.props.t1
        const offer_name = this.props.t2
        const data={
            offer_name,offer_description,Cafe_id
        }

        axios.get("http://localhost/Offer_update.php",{params:data}).then(insert1=>{
            console.log(insert1);

            this.setState({message:insert1.data.response})

        }).catch(err=>{
            console.log("failed");
        })
    }

    render(){
        return(<div>
            <div className="cafeOwner_offer_table">
                <table className="cafeOwner_offer" cellSpacing="20px" >
                    <tr>
                        <td>
                            <h1 className="offer_cafe_head">Update Offer</h1>
                        </td>
                    </tr>
                    <tr>
                        <td>
                        
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <TextareaAutosize className="Offer_description_cafe" name="offer_description" value={this.setState.offer_description} onChange={this.update.bind(this)} placeholder="Offer Description" aria-label="minimum height" rowsMin={4} maxRows={4}  placeholder="Offer Description" />
                            {/* <textarea className="Offer_description_cafe" name="offer_description" value={this.setState.offer_description} onChange={this.update.bind(this)} placeholder="Offer Description" row="4" cols="50"></textarea> */}
                        </td>
                    </tr>
                    <tr>
                        <td className="button_cafe_offer">
                        <Button className="cafe_offer_button" onClick={this.sendData.bind(this)} type="submit" variant="contained" color="secondary">
                        Update
                        </Button>
                            {/* <button className="cafe_offer_button" onClick={this.sendData.bind(this)} type="submit" >Update</button> */}
                        </td>
                    </tr>
                </table>
            </div>
            {this.state.message}
        </div>)
    }
}
export default Update_offer;