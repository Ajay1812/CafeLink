import { Component } from "react";
import axios from "axios";
// import cafe1 from './image/hideout.png'
class Dis_img extends Component{

    constructor(){

        super();
        this.state={
            kalu:[],
        }
    }

    componentDidMount(){
        axios.get("http://localhost/image_dis.php").then(response=>{
            this.setState({kalu:response.data})
            }).catch(err=>{
                console.log("failed");
            })
    }

    render(){
        return(<div>
            {
                    this.state.kalu.map((ag,key)=>
                    <div key={key+(ag.pic)}>
                        
                        
                        <img src={"http://localhost/"+ag.pic} height={200} width={200} alt="image not found"></img>
                    </div>)
                }
        
        </div>);
    }
}

export default Dis_img;