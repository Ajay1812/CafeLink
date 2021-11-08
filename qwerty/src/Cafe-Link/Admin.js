import { Component } from "react";
import "./Admin.css";
import img1 from './image/qu.png';
import img2 from './image/quiz.png';
import img3 from './image/rr.png';
import img4 from './image/cafe.png';
import img5 from './image/exam.png';
import img6 from './image/dis.png';
import img7 from './image/feed.png';
import img8 from './image/exam1.png';
import Cafedel from './Cafedel';
import Addexam from './Addexam';
import Cafereg from './Cafereg';
import Editreviews from './Editreviews';
import Add_offer_admin from './Add_offer_admin';
import Addcategories from './Addcategories';
import Button from '@material-ui/core/Button';
import Result from './Result';

class Admin extends Component
{
    constructor()
    {
        super();
        this.state={
            n:"",
            m:"",
            cc:false,
            st:false,
            si:false,
            cr:false,
            er:false,
            ao:false,
            bb:false,
        };
    }
    update=(e)=>{
        this.setState({...this.state,[e.target.name]:e.target.value});
    }

    update7=(e)=>{
        this.setState({cc:true});
    }

    update1=(e)=>{
        this.setState({st:true});
    }
    update2=(e)=>{
        this.setState({si:true});
    }
    update3=(e)=>{
        this.setState({cr:true});
    }
    update4=(e)=>{
        this.setState({er:true});
    }
    update5=(e)=>{
        this.setState({ao:true});
    }
    update6=(e)=>{
        this.setState({bb:true});
    } 
    render()
    {
        return(<div>
            {this.state.cc ? (<Result/>) :(
                this.state.st ? (<Cafedel/>) :(
                    this.state.si ? (<Addexam/>) :(
                        this.state.cr ? (<Cafereg/>) :(
                            this.state.er ? (<Editreviews/>) :(
                                this.state.ao ? (<Add_offer_admin/>) :(
                                    this.state.bb ? (<Addcategories/>) :(
            <div className="contain">
                <div className="top">
                    <h1 className="he1">
                        Admin Dashboard
                    </h1>
                </div>
                <div className = "col">
                <table className="tb1" cellPadding="100%">
                    <tr className="tr1">
                        <td className="tb3">
                            <div><img src={img1} alt="question" height="150px" width="150px"></img></div><br/>
                            <Button className="hh" type="submit" variant="contained" color="secondary">
                            Add Question
                            </Button>
                            {/* <button className="hh" type="submit">Add Question</button> */}
                        </td> 
                        <td className="tb4">
                            <div><img src={img2} alt="update" height="150px" width="150px"></img></div><br/>
                            <Button className="hh" type="submit" variant="contained" onClick={this.update6} color="secondary">
                            Add Quiz Categories
                            </Button>
                            {/* <button className="hhq" type="submit" onClick={this.update6}>Add Quiz Categories</button> */}
                        </td>
                        <td className="tb5">
                            <div><img src={img3} alt="cafe-regis" height="150px" width="150px"></img></div><br/>
                            <Button className="hh" type="submit" variant="contained" onClick={this.update3} color="secondary">
                            Cafe Registration
                            </Button> 
                            {/* <button className="hh" type="submit" onClick={this.update3}>Cafe Registration</button> */}
                        </td>
                        <td className="tb6">
                            <div><img src={img4} alt="ans" height="150px" width="150px"></img></div><br/>
                            <Button className="hh" type="submit" variant="contained" onClick={this.update1} color="secondary">
                            Cafe Deletion
                            </Button>
                            {/* <button className="hh" type="submit" onClick={this.update1}>Cafe Deletion</button> */}
                        </td>
                    </tr>
                    <tr className="tr2">
                        <td className="tb7">
                            <div><img src={img5} alt="result" height="150px" width="150px"></img></div><br/>
                            <Button className="hhqq" type="submit" variant="contained" onClick={this.update7} color="secondary">
                            Result
                            </Button>
                            {/* <button className="hhqq" type="submit">Result</button> */}
                        </td>
                        <td className="tb8">
                            <div><img src={img6} alt="offers" height="150px" width="150px"></img></div><br/>
                            <Button className="hh" type="submit" onClick={this.update5} variant="contained" color="secondary">
                            Add Offers
                            </Button>
                            {/* <button className="hh" type="submit" onClick={this.update5}>Add Offers</button> */}
                        </td>
                        <td className="tb9">
                            <div><img src={img7} alt="feed" height="150px" width="150px"></img></div><br/>
                            <Button className="hh" type="submit" onClick={this.update4} variant="contained" color="secondary">
                            Edit Reviews
                            </Button>
                            {/* <button className="hh" type="submit" onClick={this.update4}>Edit Reviews</button> */}
                        </td>
                        <td className="tb10">
                            <div><img src={img8} alt="exam" height="150px" width="150px"></img></div><br/>
                            <Button className="hh" type="submit" onClick={this.update2} variant="contained" color="secondary">
                            Add Exam
                            </Button>
                            {/* <button className="hh" type="submit" onClick={this.update2}>Add Exam</button> */}
                        </td>
                    </tr>
                </table>
                </div>
            </div>
            )))))))}
        </div>
        );
    }
}
export default Admin;


