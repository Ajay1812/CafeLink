import React, { Component } from 'react';
// import Math from '.Cafe-Link/Math.js';
import './Cafeowner.css'
import Button from '@material-ui/core/Button';
import Update_offer from './Update_offer';

class Cafeowner extends Component {

    constructor()
    {
        super();
        this.state={
            st: false,
            io: false,
            ca: "",
            qw: "",
            er: "",
            message: "",
            kalu: [],
            
            
    };
}




    render(){

    
    return  ( <div>
        {this.state.st ? (
            <Update_offer />
        ) : this.state.io ? (
            <Add_offer_admin />
        ) :(
        <div>
        
        <div className = "header">
        <img src = "Icon/CafeLink.png" alt = "image" width="102"></img>
        <img src = "Icon/Cafeowner.png" alt = "image" width="60" className = "Cafe2"></img>
        <label className = "Cafe3"><b>IN & OUT</b></label>
        <img src = "Icon/bellicon.jpg" alt = "image" width="60" className = "Cafe4"></img>
        <h2 className = "Cafe1"><b>CafeLink</b></h2></div>
        
        <div>
            <img src = "Icon/restaurantmenu.png" alt = "image" width="120"className = "Cafe5" ></img>
            <img src = "Icon/AddEvent.jpg" alt = "image" width="125"className = "Cafe6" ></img>
            <div className="U1">
            <Button className="U1" variant="contained" color="secondary">
            Add Event
            </Button> 
{/*             
            <a href = "#" className = "Menu3">Menu</a>
            <a href ="#" className = "Menu4">Add</a> */}
            </div><br/>
            <div className= "U2">
            <Button  className="U2"  variant="contained" color="secondary">
            Update Menu
            </Button> <br/>
            {/* <a href ="#" className = "Event4">Update</a> 
            <a href = "#" className = "Event3">Event</a> */}
            
            </div>
        </div>
        <div >
            <img src = "Icon/discount.png" alt = "image" width="120"className = "Cafe5" ></img>
            <img src = "Icon/Review.png" alt = "image" width="130"className = "Cafe6" ></img>
            <div>
            <Button  className="U3"  variant="contained" color="secondary">
            Add Offers
            </Button>  <br/>
            <div className="U4">
            <Button  className="U4"  variant="contained" color="secondary">
            Read Reviews
            </Button><br/>
            {/* <a href = "#" className = "Event2">Read</a> <br/>
            <a href = "#" className = "Menu2">Reviews</a> */}
            {/* <button type = "submit" >Read <br/> Reviews</button> */}
            </div>
            
            {/* <a href ="#" className = "Event1">Add</a> <br/> */}
            {/* <a href ="#" className = "Menu1">Offers</a>  */}
            </div>
            
        </div>
        
    </div>
    )}
    </div>   
    );
}
}

export default Cafeowner;
