import React, { Component } from 'react';

const Input = ({name,label,error, ...rest}) => {
    return (<div className="form-group">
    <label htmlFor={name}>{label}</label>
    <input
    name={name}
     {...rest}
    autoFocus
    id={name}
      className="form-group" />
    {error && <div className="alert alert-danger"> {error}</div>}
     </div>  );
}
 
export default Input;