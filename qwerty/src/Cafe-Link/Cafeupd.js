import { Component } from "react";
import './Cafeupd.css';
import axios from "axios";
import { TextField } from "@material-ui/core";
import Button from '@material-ui/core/Button';

class Cafeupd extends Component{

    constructor(props)
    {
        super(props);
        this.state={
            
            clocation:"",
            cname:"",
            message:"",
        }
    }

    update = (e) => {
        this.setState({ ...this.state, [e.target.name]: e.target.value });
    }

    sendData(){

        
        const clocation = this.state.clocation
        const cname = this.state.cname
        const cid = this.props.t1
        const cemail = this.props.t2
        const data={
            cemail,clocation,cname,cid
        }

        axios.get("http://localhost/cafe_reg_update.php",{params:data}).then(cup=>{
            console.log(cup);

            this.setState({message:cup.data.response})

        }).catch(err=>{
            console.log("failed");
        })
    }

    render(){
        return(<div>
            <div className="cafeupd_table">
                <table className="cafeupdd" cellSpacing="20px" >
                    <tr>
                        <td>
                            <h1 className="Headingss">Update Cafe Details</h1>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <TextField id="outlined-basic" label="Cafe_Location" variant="outlined" className="clocation" name="clocation" value={this.setState.clocation} onChange={this.update.bind(this)} placeholder="Cafe Location"></TextField>
                        </td>
                    </tr><br/>
                    <tr>
                        <td>
                            <TextField id="outlined-basic" label="Cafe_Name" variant="outlined" className="cname" name="cname" value={this.setState.cname} onChange={this.update.bind(this)} placeholder="Cafe Name"></TextField>
                        </td>
                    </tr><br/>
                    <tr>
                        <td className="cafeupdate_bttn">
                            <Button size = "large" className="Cafeupdate" onClick={this.sendData.bind(this)} type="submit" variant="contained" color="secondary" >Update</Button>
                        </td>
                    </tr>
                </table>
            </div>
            {this.state.message}
        </div>)
    }
}
export default Cafeupd;