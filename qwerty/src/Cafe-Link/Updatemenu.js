import React,{Component} from 'react';
import TextField from '@material-ui/core/TextField';
import './Menu.css';




import Button from '@material-ui/core/Button';
class Editreview extends Component
{


  
  render()
  {

  



      return (<div className="tory">
               
                
               <div className="cu"> 
             <h2 className="head">Update Menu </h2>

            <TextField id="outlined-basic" label="Cafe-id" variant="outlined" />
            <br></br>
            <br></br>
            
            <TextField id="outlined-basic" label="New Menu" variant="outlined" />
            <br></br>
            <br></br>
            <Button variant="contained"  color="secondary" size="large" >SUBMIT</Button>

            </div>
    
      
    
    
    </div>);
  }
  
}
export default Editreview;