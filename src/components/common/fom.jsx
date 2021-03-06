import React, { Component } from 'react';
import  Joi  from 'joi-browser';
import Input from './input';
import Select from './select';


class Form extends React.Component {
    state = {
        data : {},
        errors:{}
    };
    validate=()=>{
        const options = {abortEarly : false};
        const {error} = Joi.validate(this.state.data,this.schema,options);

        if(!error) return null;
        const errors = {};
        for (let item of error.details)
        errors[item.path[0]] = item.message;
         return errors;
        // console.log(result)
        // const errors ={};
        // const {data} = this.state;
        // if(data.username.trim()==='')
        //     errors.username ="username is required";
        // if(data.password.trim()==='')
        //     errors.password="Password is requird";

        // return Object.keys(errors).length===0? null : errors; 
    }
    validateProperty=({name,value}) =>{
        const obj = {[name] : value};
        const schema = {[name]: this.schema[name]};
        const {error} = Joi.validate(obj,schema);

        return error?error.details[0].message:null;
        // if(name==='username'){
        // if(value.trim()==='')
        //     return "username is required";
        // }
        // if(name==='password'){
        //     if(value.trim()==='')
        //         return "password is required";
        //     }

    }
    handleSubmit=e=>{
        e.preventDefault();

        const errors = this.validate();
        console.log(errors);
        this.setState({errors : errors || {}});
        if(errors) return;

        this.doSubmit();
        
    };
    handleChange=({currentTarget:input})=>{

        const errors = {...this.state.errors}
       const errorMessage= this.validateProperty(input)
       if(errorMessage) errors[input.name] = errorMessage;
       else delete errors[input.name];
        //cloning the state object
        const data ={...this.state.data};
        data[input.name] = input.value;

        this.setState({data,errors});
    };
    renderButton(label){
       return <button disabled={this.validate()}className="btn btn-primary">
            {label}
            </button>
    }
    renderInput(name,label,type='text'){
        const {data,errors} = this.state;
        return(
            <Input name={name}
            type={type}
             label={label} 
            value={data[name]} 
            onChange={this.handleChange}
             error={errors[name]}/>
        )
    }
    renderSelect(name,label,options){
        const {data,errors,value} = this.state;
        return(
            <Select
            name={name}
            value={data[value]}
            label={label}
            options={options}
            onChange={this.handleChange}
            error={errors[name]}
            />



            
        )
    }
}
 
export default Form;