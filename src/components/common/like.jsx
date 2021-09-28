import React from 'react';

//input : liked : booleN
//output: onclick
const Like = (props) => {
      let classes="fa fa-heart";
    if(!props.liked) classes += "-o";
    return ( <i onClick={props.onClick}
        style={{cursor:"pointer"}}
         className ={classes}
          aria-hidden="true"></i> );
    }

 


// class Like extends Component {
    
//     render() { 
       
//     }
// }
 
export default Like;