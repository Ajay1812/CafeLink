import React, { Component } from "react";
import img from "./image/offer1.jpg";
import img2 from "./image/offer2.jpg";
import "./cfrs.css"

class Cfors extends Component {
    render() {
        return (<div className="cfrs" align="center">
            <div className="title_offer">
                <h1 className="title_offer_head"> CAFE OFFERS </h1>
            </div>

            <img className="image_i1" alt="No image found" src={img}></img>
            <br />
            <br></br>

            <button className="b1" type="submit" >This offer is avilable for ROYAL CAFE</button>
            <br />
            <br />
            <br>
            </br>


            <img className="image_i2" alt="No Image Found" src={img2}></img>
            <br />
            <br></br>

            <button className="b2" >This offer is avialble for HIGH CAFE</button>
            <br />

        </div>);



    }
}
export default Cfors;