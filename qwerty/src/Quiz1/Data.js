import React, { Component } from 'react';
import Axios from 'axios';
class cafe_link extends Component {

    constructor()
    {
        super();
        this.state={
        t1:"",
        t2:"",
        t3:"",
        message:""    
            
    };
}
    fun(e){
        this.state({
            [e.target.name]:e.target.value
        })
    }

    sendData(ev){
        const t1=this.state.t1;
        const t2=this.state.t2;
        const t3=this.state.t3;
        const t4=this.state.t4;

        const data = {
            t1,t2,t3,t4
        }
        Axios.get('http://localhost/Cafe_reg_select.php',{params:data}).then(kalu=>){
            console.log(kalu);
        }
    }

    render(){

    
    return ( <div>
        
        
        
        
    </div>
        
    );
}
}

export default Contact;
