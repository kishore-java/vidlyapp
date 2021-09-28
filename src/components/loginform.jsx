import React, { Component } from 'react';
 
import Joi from 'joi-browser';
import Form from './common/fom';

class LoginForm extends Form {
    state = {
        data : {username:"",password:""},
        errors:{}
    }
    Schema = {
        username : Joi.string().required().label("Username"),
        password : Joi.string().required().label("Password")
    };
    
    username =React.createRef();
    // componentDidMount(){
    //     this.username.current.focus();
    // }
    
    doSubmit=()=>{
//call seerever
console.log("submitted");
// const username = this.username.current.value;

    }
    
    render() { 
        
        return <div>
            <h1>LoginFORM</h1>
             <form onSubmit={this.handleSubmit}>
                 {this.renderInput('username','Username')}
                 {this.renderInput('password','Password','password')}
                  
                  
                  
                     {this.renderButton('login')}
             </form>
        </div>
    }
}
 
export default LoginForm;