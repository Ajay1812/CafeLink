import { Component } from "react";
import image2 from "./image/hideout.png";
import image3 from "./image/saltcafe.jpg";
import image4 from "./image/lightout.jpg";
import image5 from "./image/hickee.jpg";
import './Cafe_List.css';
import En_area from "./Enter_location";


class Cafe_list extends Component {

    constructor() {
        super();
        this.state = {
            ea: false,
        };
    }
    update = () => { this.setState({ ea: true }) }

    render() {
        return (<div className="cafe_components">
            {this.state.ea ? (<En_area />) : (
                <div>
                    <div className="title123">
                        <h1 className="title_head"> Cafe List </h1>
                        <div className="title_head2">
                            <input type="image" onClick={this.update} src="Icon/location.png" alt="image" width="50" className="log"></input>
                            <br />
                            <p onClick={this.update} className="pra"><b>Enter area</b></p>
                        </div>
                        <div className="title_head1">
                            <input type="text" className="text450" placeholder="Search.." name="search"></input>
                        </div>

                    </div>
                    <table className="cafe_table" cellSpacing="20px">
                        <tr className="cafe_hide">
                            <td className="hide">
                                <img className="image_hide" alt="No image found" src={image2}></img>
                                <br />
                                <br />
                                <button className="button_hide" type="submit" >Hide Out</button>
                            </td>
                        </tr>
                        <tr>
                            <td className="salt">
                                <img className="image_salt" alt="No Image Found" src={image3}></img>
                                <br />
                                <br />
                                <button className="button_salt" >Salt Cafe</button>
                            </td>
                        </tr>
                        <tr>
                            <td className="hickee">
                                <img className="image_hickee" alt="No Image Found" src={image5}></img>
                                <br />
                                <br />
                                <button className="button_hickee" >Hickee</button>
                            </td>
                        </tr>
                        <tr>
                            <td className="light">
                                <img className="image_light" alt="No Image Found" src={image4}></img>
                                <br />
                                <br />
                                <button className="button_light" >Light's Out</button>
                            </td>
                        </tr>
                    </table>
                </div>
            )}
        </div>);
    }
}
export default Cafe_list;