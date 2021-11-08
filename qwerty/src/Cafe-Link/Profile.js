import { Component } from "react";
import image1 from './image/spider.jpg';
import './Profie.css';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { TextField } from "@material-ui/core";

// import Edit_Profile from './Edit_Profile';

class Profile extends Component {
    constructor() {
        super();
        this.state = {
            st: false,
        };
    }
    update = () => {
        this.setState({ st: true });
    }

    render() {
        return (<div>
            {/* {this.state.st?(<Edit_Profile/>):( */}
            <div className="full">


                <table className="info">
                    <tr>
                        <td colSpan="3">
                            <h1 className="my">My Profile</h1>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="3">
                            <img className="user_photo" alt="No image found" src={image1} ></img>
                        </td>
                    </tr>
                    <tr>
                        <td>

                            {/* <button type="submit"><i class="fa fa-search"></i></button> */}
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="3">
                            <a className="dis" onClick={this.update} ><b>Edit Profile</b></a>
                        </td>
                    </tr>
                    <tr>
                        <td className="user_name" colSpan="3">
                            <input type="text" className="user" name="user_name" value="Peter Parker" readOnly="readOnly"></input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label className="number" for="user_name" ><b>PhoneNumber</b></label></td>
                        <td>:</td>
                        <td><input className="phone" type="text" name="user_number" value="98xxx123xx" readOnly="readOnly"></input></td>
                    </tr>
                    <tr>
                        <td>
                            <label className="user_city" for="city"><b>City</b></label></td>
                        <td>:</td>
                        <td><input className="city" name="city" type="text" value="Agra" readOnly="readOnly"></input></td>
                    </tr>
                </table>
                <div className="box">
                    <div className="user_menu">
                        <h3>
                            Offer Availed
                        </h3>
                        <FormControl>
                            <InputLabel id="demo-simple-select-helper-label">Offer_availed</InputLabel>
                            <Select
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                // value={age}
                                // onChange={handleChange}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                {/* <TextField label = "qwerty"/> */}
                                {/* <MenuItem value={10}>--View offer Availed--</MenuItem> */}
                                <MenuItem value={20}>20% off coupon</MenuItem>
                                <MenuItem value={30}>flat 100 rupees off voucher</MenuItem>
                                <MenuItem value={30}>30% off coupon</MenuItem>
                                

                            </Select>
                            <FormHelperText>-----View offer Availed-----</FormHelperText>
                        </FormControl>
                        {/* <select name="offer_availed">
                            <option value="">--View offer Availed--</option>
                            <option value="">20% off coupon</option>
                            <option value="">flat 100 rupees off voucher</option>
                            <option value="">30% off coupon</option>
                        </select> */}
                    </div>

                    <div className="user_menu">
                        <h3>
                            Offer Available
                        </h3>

                        <FormControl>
                            <InputLabel id="demo-simple-select-helper-label">Offer_available</InputLabel>
                            <Select
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                // value={age}
                                // onChange={handleChange}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                {/* <TextField label = "qwerty"/> */}
                                {/* <MenuItem value={10}>--View Offer Available--</MenuItem> */}
                                <MenuItem value={20}>20% off coupon</MenuItem>
                                <MenuItem value={30}>flat 150 rupees off voucher</MenuItem>
                                <MenuItem value={30}>30% off coupon</MenuItem>
                                

                            </Select>
                            <FormHelperText>---View Offer Available---</FormHelperText>
                        </FormControl>
                        {/* <select name="offer_available">
                            <option value="">--View Offer Available--</option>
                            <option value="">20% off coupon</option>
                            <option value="">flat 150 rupees off voucher</option>
                            <option value="">30% off coupon</option>
                        </select> */}
                    </div>
                    <div className="user_menu">
                        <h3>
                            Cafe Viewed
                        </h3>

                        <FormControl>
                            <InputLabel id="demo-simple-select-helper-label">Cafe Viewed</InputLabel>
                            <Select
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                // value={age}
                                // onChange={handleChange}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                {/* <TextField label = "qwerty"/> */}
                                {/* <MenuItem value={10}>--Cafe Viewed--</MenuItem> */}
                                <MenuItem value={20}>IN AND OUT</MenuItem>
                                <MenuItem value={30}>LIGHT'S OUT</MenuItem>
                                <MenuItem value={30}>3SALT CAFE</MenuItem>
                                <MenuItem value={30}>CAFE COFFEE DAY</MenuItem>
                                

                            </Select>
                            <FormHelperText>-------Cafe Viewed-------</FormHelperText>
                        </FormControl>
                        {/* <select name="cafe_viewed">
                            <option value="">--Cafe Viewed--</option>
                            <option value="">IN AND OUT</option>
                            <option value="">LIGHT'S OUT</option>
                            <option value="">SALT CAFE</option>
                            <option value="">CAFE COFFEE DAY</option>
                        </select> */}
                    </div>
                    <div className="user_menu">
                        <h3>
                            Winnings
                        </h3>

                        <FormControl>
                            <InputLabel id="demo-simple-select-helper-label">Winnings</InputLabel>
                            <Select
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                // value={age}
                                // onChange={handleChange}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                {/* <TextField label = "qwerty"/> */}
                                {/* <MenuItem value={10}>--Winnings--</MenuItem> */}
                                <MenuItem value={20}>20% off coupon</MenuItem>
                                <MenuItem value={30}>flat 200 rupees off voucher</MenuItem>
                                <MenuItem value={30}>30% off coupon</MenuItem>
                                
                            </Select>
                            <FormHelperText>-------Winnings-------</FormHelperText>
                        </FormControl>
                        {/* <select name="user_winning">
                            <option value="">--Winnings--</option>
                            <option value="">20% off coupon</option>
                            <option value="">flat 200 rupees off voucher</option>
                            <option value="">30% off coupon</option>
                        </select> */}
                    </div>
                </div>

            </div>
        </div>);

    }
}
export default Profile;









{/* <table className="profile_option" cellSpacing="50px">
                        <tr className="profile_heading" >
                            <th><h3>Offer Availed</h3></th>
                            <th><h3>Offer Available</h3></th>
                            <th><h3>Cafe Visited</h3></th>
                            <th><h3>Winnings</h3></th>
                        </tr>
                        <tr>
                            <td>
                            <select name="offer_availed" >
				            <option value="">View offer Availed</option>
                            <option value="">20% off coupon</option>
                            <option value="">flat 100 rupees of voucher</option>
                            <option value="">30% off coupon</option>
				            </select>
                            </td>
                        </tr>
                    </table> */}