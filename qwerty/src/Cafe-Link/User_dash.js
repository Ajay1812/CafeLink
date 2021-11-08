import { Component } from "react";
import './User_dash.css'

import cafe1 from './image/hideout.png'
import cafe2 from './image/cafe2.jpg'
import cafe3 from './image/cafe4.png'
import cafe4 from './image/cafe3.png'
import cafe5 from './image/lightout.jpg'


import event1 from './image/event1.jpg'
import event2 from './image/event2.jpeg'
import event3 from './image/event3.jpeg'
import event4 from './image/event4.jpeg'
import event5 from './image/event5.jpeg'

import offer1 from './image/offer1.jpg'
import offer2 from './image/offer2.jpg'
import offer3 from './image/offer3.jpg'
import offer4 from './image/offer4.jpg'
import offer5 from './image/offer5.jpg'

import quiz1 from './image/quiz1.png'
import quiz2 from './image/quiz2.jpg'
import quiz3 from './image/quiz3.jpg'
import quiz4 from './image/quiz4.jpg' 

import Cafe_list from './Cafe_List';
import Quizpage from "./Quizpage";
import Login from "./Login";
import Event from "./Event";
import Cfors from "./Cfors";
import Contact from "./Contact"





class User_dash extends Component{

    constructor() {
        super();
        this.state = {
            ca: false,
            ev:false,
            lo:false,
            qu:false,
            of:false,
            cs:false,
        };
    }
        update = () => {this.setState({ ca: true })}
        update1 = () => {this.setState({ ev: true })}
        update2 = () => {this.setState({ lo: true })}
        update3 = () => {this.setState({ qu: true })}
        update4 = () => {this.setState({ of: true })}
        update5 = () => {this.setState({ cs: true })}
    

    render(){
        
        return(<div>
            
            { this.state.ca ? (<Cafe_list/>) : ( 
                this.state.lo ? (<Login/>) : (  
                    this.state.qu ? (<Quizpage/>) : (
                        this.state.ev ? (<Event/>) : (
                            this.state.of ? (<Cfors/>) : (
                                this.state.of ? (<Contact/>) : ( 

                <div>
            <div className="header">
                <h1 >
                    Cafe-Link
                </h1>
                <div className="sub_head">
                <input type="image" onClick={this.update2} src = "Icon/man.png" alt = "image" width="60" className = "log"></input>
                <p className="log_text" onClick={this.update2}><b>Login/Signup</b></p>
                </div>
            </div>
            <nav className="navigation">
                <a onClick={this.update}>Cafe</a> 
                <a onClick={this.update1}>Events</a>
                <a onClick={this.update4}>Offer</a>
                <a onClick={this.update3}>Quiz</a>
            </nav>

            <div className="main">
                <div className="section">
                    <h2 className="section_head">
                        Cafe's
                    </h2>
                    <img alt="No Image Found" src={cafe1}></img>
                    <img alt="No Image Found" src={cafe2}></img>
                    <img alt="No Image Found" src={cafe3}></img>
                    <img alt="No Image Found" src={cafe4}></img>
                    <img alt="No Image Found" src={cafe5}></img>
                    <p>
                        Select a diffrent cafe
                    </p>
                    <button type="submit" onClick={this.update} className="next" >View More Cafe &gt;&gt;&gt;</button>
                </div>

                <div className="section">
                    <h2 className="section_head">
                        Events
                    </h2>
                    <img alt="No Image Found" src={event1}></img>
                    <img alt="No Image Found" src={event2}></img>
                    <img alt="No Image Found" src={event3}></img>
                    <img alt="No Image Found" src={event4}></img>
                    <img alt="No Image Found" src={event5}></img>
                    <p>
                        More Events
                    </p>
                    <button type="submit" onClick={this.update1} className="next" >View More Events &gt;&gt;&gt;</button>
                </div>
                <div className="section">
                    <h2 className="section_head">
                        Offer
                    </h2>
                    <img alt="No Image Found" src={offer1} ></img>
                    <img alt="No Image Found" src={offer2}></img>
                    <img alt="No Image Found" src={offer3}></img>
                    <img alt="No Image Found" src={offer4}></img>
                    <img alt="No Image Found" src={offer5}></img>
                    <p>
                        More Offers
                    </p>
                    <button type="submit" onClick={this.update3} className="next" >View More offer's &gt;&gt;&gt;</button>
                </div>
                <div className="section">
                    <h2 className="section_head">
                        Quiz
                    </h2>
                    <img alt="No Image Found" src={quiz1}></img>
                    <img alt="No Image Found" src={quiz2}></img>
                    <img alt="No Image Found" src={quiz3}></img>
                    <img alt="No Image Found" src={quiz4}></img>
                    <p>
                        More Quiz
                    </p>
                    <button type="submit" className="next" onClick={this.update3} >View More Quiz &gt;&gt;&gt;</button>
                </div>
            </div>
            <div  className="footer">
                <a href="#">About Us</a>
                <a href="#" onClick={this.update5}>Contact</a>
                <a href="#">Privacy Policy</a>
                <a href="#"> &copy; Cafe-Link</a>
            </div>
            </div>
         ))))))} 
       </div>);
    }
}
export default User_dash;