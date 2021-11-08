import { Component } from "react";
import axios from "axios";
// import { response } from "express";

class Mapfunction extends Component{

    constructor(){

        super();
        this.state={
            kalu:[]
        }
    }

    componentDidMount(){
        axios.get("http://localhost/Cafe_reg_select.php").then(response=>{
            this.setState({kalu:response.data})
            }).catch(err=>{
                console.log("failed");
            })
    }


    render(){

        return(<div>
            <div>
                {
                    this.state.kalu.map((ag,key)=>
                    <div key={key+(ag.Cafe_id)}>
                        {key}, {ag.Cafe_id}, {ag.Cafe_Location}, {ag.Cafe_Email},{ag.Cafe_Password}
                    </div>)
                }
            </div>
        </div>);
    }
}

export default Mapfunction;