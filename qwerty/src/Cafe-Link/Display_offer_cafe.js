import { Component } from "react";
import axios from "axios";
import Update_offer from "./Update_offer";
import Add_offer_admin from "./Add_offer_admin.js";
import './Display_offer_cafe.css';
import Button from '@material-ui/core/Button';


class Display extends Component {
    constructor() {
        super();
        this.state = {
            st: false,
            io: false,
            ca: "",
            qw: "",
            er: "",
            message: "",
            kalu: [],
        };
    }

    

    componentDidMount() {
        axios
            .get("http://localhost/Offer_display.php")
            .then((response) => {
                this.setState({ kalu: response.data });
                console.log(response.data);
            })
            .catch((err) => {
                console.log("failed");
            });
    }

    update = (e, g, f) => {
        this.setState({ st: true });
        console.log(e);
        console.log(g);
        this.setState({ ca: e });
        this.setState({ qw: g });
        this.setState({ er: f });
    };

    Del = (e, g) => {
        console.log(e + " Delete");
        console.log(g + " Delete");
        const Cafe_id = e;
        const offer_name = g;
        const data = { Cafe_id, offer_name };
        
        axios.get("http://localhost/Offer_delete.php", { params: data })
            .then((qwerty) => {
                this.setState({ message: qwerty.data.response });
            })
            .catch((err) => {
                console.log("failed");
            });
    };
    

    Insert = () => {
        this.setState({ io: true });
        
    };

    render() {
        return (
            <div>
                {this.state.st ? (
                    <Update_offer t1={this.state.ca} t2={this.state.qw} />
                ) : this.state.io ? (
                    <Add_offer_admin />
                ) : (<div>
                    <h1 className = "head"><b>Table: Display Offers</b></h1> <br/><br/>

                    <div className = "dis" >
                        
                        <table className="cafeOwner_offer" border="1" cellpadding="0" cellspacing="0" width="200px">
                            <thead >
                                <th className = "head2">Cafe id</th>
                                <th className = "head1">Cafe_Name</th>
                                <th className = "head1">Offer Name</th>
                                <th className = "head1">Offer Description</th>
                                
                                <th className = "head1">Update</th> <th className = "head1">Delete</th>
                                
                                
                            </thead>
                            
                            {this.state.kalu.map((ag, key) => (
                                <tr key={key + ag.Offer_name}>
                                    <td className = "col2">{ag.Cafe_id}</td>
                                    <td  className = "col1"> {ag.Cafe_Name}</td>
                                    <td className = "col1">{ag.Offer_name}</td>
                                    <td className = "col1">{ag.Offer_description}</td>
                                    
                                    <td className = "col1">
                                        {/* <button
                                            type="submit"
                                            onClick={() => this.update(ag.Cafe_id, ag.Offer_name)}
                                        >
                                            Update
                                        </button> */}
                                        <Button type="submit"
                                            onClick={() => this.update(ag.Cafe_id, ag.Offer_name)} variant="contained" color="secondary">
                                        Update
                                        </Button>
                                    </td>
                                    <td className = "col1">
                                        {/* <button
                                            type="submit"
                                            onClick={() => this.Del(ag.Cafe_id, ag.Offer_name)}
                                        >
                                            Delete
                                        </button> */}
                                        <Button type="submit"
                                                
                                            onClick={() => this.Del(ag.Cafe_id, ag.Offer_name)} variant="contained" color="primary">
                                        Delete
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </table> <br/>
                        <div className = "btn">
                            {/* <button  type="submit" onClick={this.Insert}>
                                Insert
                            </button> */}
                            <Button size="large" classname = "cen1" type="submit" onClick={this.Insert} variant="contained" color="primary">
                            Insert
                            </Button>
                        </div>
                    </div>
                    </div>
                )}
            </div>
        );
    }
}

export default Display;
