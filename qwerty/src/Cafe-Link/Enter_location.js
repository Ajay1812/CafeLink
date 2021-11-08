import { Component } from "react";
import "./Enter-location.css";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class Enter_location extends Component{
    render()
    {
        return(<div className="all">
            <div className="box_loaction">
            
            <table className="area" cellSpacing="10px" cellPadding="10px">
                <tr>
                    <h1 className="area_head">
                        Enter Location
                    </h1>
                </tr>
                <tr>
                    <td>
                    <TextField type="text" className="city_id" value="" placeholder="Enter City" id="outlined-basic" label="Enter_City" variant="outlined" />
                        {/* <input type="text" className="city_id" value="" placeholder="Enter City"></input> */}
                    </td>
                </tr><br/>
                <tr>
                    <td> 
                    <TextField type="text" className="area_id" value="" placeholder="Enter Area" id="outlined-basic" label="Enter_Area" variant="outlined" />
                     {/* <input type="text" className="area_id" value="" placeholder="Enter Area"></input> */}
                    </td>
                </tr><br/>
                <tr>
                    <td>
                    <TextField type="text" className="area_id" value="" placeholder="Pincode" id="outlined-basic" label="Pincode" variant="outlined" />
                    </td>
                </tr>    


                <tr>
                    <td className="button_setting1">
                    <Button type="submit" className="add_area" variant="contained" color="secondary" placeholder="Enter Area">
                    Search 
                    </Button>
                        {/* <button type="submit" className="add_area" >Search Area</button> */}
                    </td>
                </tr>
            </table>
            </div>
        </div>)
    }
}
export default Enter_location;
