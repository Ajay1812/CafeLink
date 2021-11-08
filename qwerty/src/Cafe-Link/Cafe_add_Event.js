import { Component } from "react";
import './Cafe_add_Event.css'

class CafeEvent extends Component{
    render()
    {
        return(<div>
             <div className="box_event">
            
            <table className="event_table" cellSpacing="10px" cellPadding="10px">
                <tr>
                    <h1 className="event_head">
                        Add Event
                    </h1>
                </tr>
                <tr>
                    <td>
                        <input type="text" className="event_title" value="" placeholder="Event Title"></input>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="text" className="event_id" value="" placeholder="Event Id"></input>
                    </td>
                </tr>
                <tr>
                    <td>
                        <textarea  className="event_description" placeholder="Event Description"  rows="4" cols="50"/> 
                    </td>
                </tr>
                <tr>
                    <td className="event_button_setting">
                        <button type="submit" className="add_event" >Add Event</button>
                    </td>
                </tr>
            </table>
            </div>
        </div>);
    }
}

export default CafeEvent;
