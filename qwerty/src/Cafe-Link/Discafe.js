import { Component } from "react";
import axios from "axios";
import Cafeupd from "./Cafeupd.js";
import Cafereg from "./Cafereg.js";
import './Discafe.css';

import Button from '@material-ui/core/Button';
// import Box from '@material-ui/core/Box';
// import Add_offer_cafeOwner from "./Add_offer_cafeOwner";
// import { PanoramaRounded } from "@material-ui/icons";
// import { response } from "express";

class Discafe extends Component{

    constructor(){

        super();
        this.state={
            st: false,
            io: false,
            ca: "",
            qw:"",
            er:"",
            message:"",
            kalu:[]
        }
    }

    componentDidMount(){
        axios.get("http://localhost/Cafe_reg_select.php").then(response=>{
            this.setState({kalu:response.data})
            console.log(response.data)
            }).catch(err=>{
                console.log("failed");
            })
    }

    update = (e,g,f) => {
        this.setState({ st: true })
        console.log(e)
        console.log(g)
        this.setState({ca: e})
        this.setState({qw: g})
        this.setState({er: f})
        

    };

    Delete = (e) => {
        console.log(e+" Delete");
        const cafe_id =  e;
        const data = {cafe_id}
            axios.get("http://localhost/cafe_reg_delete.php",{params:data}).then(qwerty=>{
                    this.setState({message:qwerty.data.response})
                }).catch(err=>{
                    console.log("failed");
                })
        
    };
    Insert = () => {
        this.setState({ io: true });
        
    };

    render(){

        return(<div> 
            { this.state.st ? (<Cafeupd t1 = {this.state.ca} t2 ={this.state.qw}/>) : 
                this.state.io ? (<Cafereg/>) : (
                    <div>
                    <h1 className = "head">Table: Display Cafe's List</h1> <br/>
                    <div className = "dis" >
            <table className="Cafereg_table" border="1" cellpadding="0" cellspacing="0" width="200px" >
        <thead><th  className = "head2">Cafe_id</th>
        <th className = "head1">Cafe_Name</th> 
        <th className = "head1">Cafe_images</th>

        <th className = "head1"> Cafe_Location</th> 
        <th className = "head1">Cafe_Email</th>
        <th className = "head1">Enter_Area</th>
        <th className = "head1">Enter_pincode</th>
        <th className = "head1">Address</th>
        <th className = "head1">Adhaar_card</th>
        <th className = "head1">Cafe_validation_certificate</th>
        <th className = "head1">Cafe_menu</th>



        <th className = "head1">Delete</th></thead>
                {
                    this.state.kalu.map((ag,key)=>
                    <tr key={key+(ag.Cafe_id)}>
                        
                        <td  className = "col2">
                            {ag.Cafe_id}
                        </td>
                        <td className = "col1">
                            {ag.Cafe_Name}
                        </td>

                        <td className = "col1">
                        <img src={"http://localhost/"+ag.Cafe_images} height={100} width={100} alt="image not found"></img>

                        </td>
                        <td className = "col1">
                            {ag.Cafe_Location}
                        </td>
                        <td className = "col1">
                            {ag.Cafe_Email}
                        </td>
                        
                        <td className = "col1">
                            {ag.Enter_Area}
                            
                        </td>
                        <td className = "col1">
                            {ag.Enter_pincode}
                            
                        </td>
                        <td className = "col1">
                            {ag.Address}
                            
                        </td>
                        <td className="bt1">
                            <Button  type = "submit" onClick = {()=>this.Delete(ag.Cafe_id)} variant="contained" color="Secondary" size = "large" >DELETE</Button>
                        </td>
                    </tr>
                
            
            )}
            </table><br/>
            <div className = "btn">
                            <Button size="large" classname = "cen1" type="submit" onClick={this.Insert} variant="contained" color="primary" size = "large">
                                Insert
                            </Button>
                        </div>
                    </div>
                    </div>
            )
        }  
            
        </div>);
    }
}

export default Discafe;