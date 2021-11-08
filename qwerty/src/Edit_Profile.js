import { Component } from "react";
import './Edit_Profile.css'
import axios from "axios";



class Edit_Profile extends Component{

    constructor()
    {
        super();
        this.state={

            phone_no:"",
            password:"",
            message:"",

        }
    }

    fun(e){
        this.setState({[e.target.name]:e.target.value})
    }

    sendData(ev){

        const offer_id=this.state.phone_no;
        const cafe_id=this.state.password;
        

        const data={
            phone_no, password,
        }

        axios.get('http://localhost/insert.php',{params:data}).then(insert=>{
            console.log(insert);

            this.setState({
                message:KeyboardArrowLeftOutlined.data.response
            })
        }).catch(err=>{
            console.log("failed");
        })


    }

    render(){

        return(<div>
            <h1 className="head">Edit Profile</h1>
            <table className="user_details" cellPadding="5px"  >
                <tr>
                    <td>
                        <input type="text" className="full_name" value="" placeholder="Full Name" ></input>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="text" className="phone_no" value="" placeholder="Phone No." ></input>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="text" className="email" value="" placeholder="Email" ></input>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="text" className="city" value="" placeholder="City" ></input>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="text" className="old_password" value="" placeholder="Old Password" ></input>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="text" className="new_password" value="" placeholder="New Password" ></input>
                    </td>
                </tr>
                <tr>
                    <td>
                        <button className="profile_update" type="submit">Update</button>
                    </td>
                </tr>
            </table>
        </div>);
    };
}

export default Edit_Profile;