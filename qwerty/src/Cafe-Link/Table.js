import { Component } from "react";
import axios from "axios";
// import { response } from "express";

class Table extends Component{

    constructor(){

        super();
        this.state={
            kalu:[]
        }
    }

    componentDidMount(){
        axios.get("http://localhost/Offer_display.php").then(response=>{
            this.setState({kalu:response.data})
            }).catch(err=>{
                console.log("failed");
            })
    }
    


    render(){

        return(<div>

<div>
                <table border="1">
                    <thead>
                            <th>Offer_id</th>
                            <th>Cafe_id</th>
                            <th>Offer_description</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </thead>
                    {this.state.kalu.map((ag,key)=>
                    <tr key={key+(ag.Offer_name)}>
                            <td>
                                {ag.Offer_name}
                            </td>
                            <td>
                                {ag.Cafe_id}
                            </td>
                            <td>
                                {ag.Offer_description}
                            </td>
                            <td>
                                <button type="submit" name=""  >Update</button>
                            </td>
                            <td>
                                <button type="submit" name="" >Delete</button>
                            </td>
                        </tr>
                        
                    )
                }
                </table>
                
                    <button type="submit" name="">Insert</button>
            </div>
            
            
        </div>);
    }
}

export default Table;