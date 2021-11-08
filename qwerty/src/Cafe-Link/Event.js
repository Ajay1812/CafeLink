import React, { Component } from "react";
import image2 from "./image/event2.jpeg";
import image3 from "./image/event3.jpeg";
import image4 from "./image/event4.jpeg";
import image5 from "./image/event5.jpeg";
import "./cvnts.css";
class Event extends Component {
  render() {
    return (
      <div className="cvnts" align="center">
        <div className="title_event">
          <h1 className="title_event_head"> CAFE EVENTS </h1>
        </div>

        <img className="djnight" alt="No image found" src={image2}></img>
        <br />

        <button className="b1" type="submit">
          dj night
        </button>
        <br />
        <br />

        <img className="nightpool" alt="image 3" src={image3}></img>
        <br />

        <button className="b2">night pool</button>
        <br />
        <br></br>
        <br></br>

        <img className="video games" alt="No Image Found" src={image4}></img>
        <br />

        <button className="b3">Video Games</button>
        <br />
        <br></br>
        <br></br>

        <img
          className="image_secretgames"
          alt="No Image Found"
          src={image5}
        ></img>
        <br />

        <button className="b4">secret games</button>
        <br />
      </div>
    );
  }
}
export default Event;
