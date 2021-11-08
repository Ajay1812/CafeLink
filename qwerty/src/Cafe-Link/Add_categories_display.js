import { Component } from "react";
import axios from "axios";
import './Add_categories_display.css';
import Button from '@material-ui/core/Button';
import Add_offer_admin from "./Add_offer_admin.js";
import Update_offer from "./Update_offer";
import Addcategories from "./Addcategories.js";



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
            .get("http://localhost/Add_Quiz_categories_display.php")
            .then((response) => {
                this.setState({ kalu: response.data });
                console.log(response.data);
            })
            .catch((err) => {
                console.log("failed");
            });
    }
    
    Del = (e) => {
        console.log(e + " Delete");
        const Add_Categories = e;
        const data = {Add_Categories};
        
        axios.get("http://localhost/Add_Quiz_Categories_delete.php", { params: data })
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
            <div classname = "color">
                {this.state.io ? (
                    <Addcategories />
                ) : (
                
                <div>
                    <h1 className = "head"><b>Table: Add Categories</b></h1> <br/><br/>
                    <div>
                        <table className="Add_Categories" border="1" cellpadding="0" cellspacing="0" width="100px">
                            <th className = "head5">Add Categories</th>
                            <th className = "head3">Delete</th>
                            {this.state.kalu.map((ag, key) => (
                            <tr key={key + ag.Add_Categories}>
                                    <td className="w1">
                                    {ag.Add_Categories}
                                    </td>
                                    <td className="w2">
                                    <Button type="submit"
                                                onClick={() => this.Del(ag.Add_Categories)}
                                                variant="contained" color="primary">
                                            Delete
                                            </Button>
                                    </td>
                                </tr>
                            ))}
                        </table> <br/>
                        <div className = "btn">
                            <Button size="large" type="submit" onClick={this.Insert} variant="contained" color="primary">
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
