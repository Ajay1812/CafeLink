import React, { Component } from 'react';
import './Contact.css'
import CafeLink from './image/CafeLink.png';
import facebook from './image/facebook.png';
import instagram from './image/instagram.png';
import pinterest from './image/pinterest.png'
class Contact extends Component {

    constructor()
    {
        super();
        this.state={
            
            
    };
}

    render(){

    
    return ( <div className = "Contact" >
        <h2 className=""> Contact Us</h2> <br/>
        <div className="label">
        <label>Email : CafeLink657@gmail.com</label> <br/>
        <label>Phone No. : 6397XXXXXX</label>
        </div>
        <div className = "Social"><b>Social Media</b></div> <br/>
        <div><table className = "Share"><td>
            <a href = "#"><img  src = {facebook}alt = "image" width="40" className = "face"></img></a>
            <a href = "#"><img  src = {instagram} alt = "image" width="40"className = "insta"></img></a>
            <a href = "#"><img  src = {pinterest} alt = "image" width="40"className = "pint"></img></a>
        </td>
            </table></div>
        <table className = "logo">
            <td><img src = {CafeLink} alt = "image" width="80"></img></td>
            <td className = "copy">Copyright © 2020-2021 CafeLink Company S.L. All rights reserved.</td>
        </table>
        
        
        
        
        
    </div>
        
    );
}
}

export default Contact;
