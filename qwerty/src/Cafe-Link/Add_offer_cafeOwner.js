import { Component } from "react";
import './Add_offer_cafeOwner.css';
import axios from "axios";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

class Add_offer_cafeOwner extends Component{

    constructor()
    {
        super();
        this.state={
            offer_name:"",
            offer_description:"",
            message:"",
        }
    }

    fun(e){
        this.setState({[e.target.name]:this.target.value})
    }

    sendData(){

        const offer_name = this.state.offer_name
        const offer_description = this.state.offer_description

        const data={
            offer_name,offer_description,
        }

        axios.get("http://localhost/Offer_insert.php",{params:data}).then(insert1=>{
            console.log(insert1);

            this.setState({message:insert1.data.response})

        }).catch(err=>{
            console.log("failed");
        })
    }

    render(){
        return(<div>
            <div className="cafeOwner_offer_table">
                <table className="cafeOwner_offer" cellSpacing="15px" >
                    <tr>
                        <td>
                            <h1 className="offer_cafe_head">Add Offer</h1>
                        </td>
                    </tr>
                    <tr>
                        <td><TextField  type="text" name="offer_name" onChange={this.fun.bind(this)} className="offer_cafe_id" placeholder="Offer Name" value={this.setState.offer_name} id="outlined-basic" label="Offer_Name" variant="outlined" />
                            {/* <input type="text" name="offer_name" onChange={this.fun.bind(this)} className="offer_cafe_id" placeholder="Offer Name" value={this.setState.offer_name}></input> */}
                        </td>
                    </tr><br/>
                    <tr>
                        <td>
                        <TextareaAutosize className="Offer_description_cafe" name="offer_description" value={this.setState.offer_description} onChange={this.fun.bind(this)} placeholder="Offer Description" aria-label="minimum height" rowsMin={4} maxRows={4} placeholder="Offer Description" />
                            {/* <textarea className="Offer_description_cafe" name="offer_description" value={this.setState.offer_description} onChange={this.fun.bind(this)} placeholder="Offer Description" row="4" cols="50"></textarea> */}
                        </td>
                    </tr>
                    <tr>
                        <td className="button_cafe_offer">
                        <Button className="cafe_offer_button" onClick={this.sendData.bind(this)} type="submit" variant="contained" color="secondary">
                        Add
                        </Button>
                            {/* <button className="cafe_offer_button" onClick={this.sendData.bind(this)} type="submit" >Add Offer</button> */}
                        </td>
                    </tr>
                </table>
            </div>
            {this.state.message}
        </div>)
    }
}
export default Add_offer_cafeOwner;