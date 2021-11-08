import { Component } from "react";
import './Read_Review.css';
import axios from 'axios';

class Read_Review extends Component {
    constructor() {
        super();
        this.state = {
            cafe_id: "",
            user_id: "",
            review: "",
            message: ""
        };
    }

    fun(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    sendData(ev) {
        const cafe_id = this.state.cafe_id;
        const user_id = this.state.user_id;
        const review  = this.state.review;

        const data = {
            cafe_id,
            user_id,
            review
        }

        axios.get('http://localhost/readreview_display.php', { params: data }).then(ReadR_display => {
            console.log(ReadR_display); this.setState({ message: ReadR_display.data.response })
        })
            .catch(err => { console.log("failed"); })
    }

    render() {
        return (<div>
           
            <div id="read_review-Box" >
                <div class="left-box">
                    <h1 className="head2">Read Review</h1>
                    <input type="text" onChange={this.fun.bind(this)} value={this.state.cafe_id} name="cafe_id" placeholder="Cafe_id" />
                    <input type="text" onChange={this.fun.bind(this)} value={this.state.user_id} name="user_id" placeholder="User_id" />
                    <input type="text" onChange={this.fun.bind(this)} value={this.state.review} name="review" placeholder="Review" />
                    <input type="submit" onClick={this.sendData.bind(this)} name="read-button" value="Read Review" />
                </div>
            </div>

            {this.state.message}
        </div>
        );
    }

}
export default Read_Review;