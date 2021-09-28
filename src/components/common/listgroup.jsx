import React from 'react';

const ListGroup = ({items,textProperty,valueProperty,onItemSelect,selectedItem}) => {
    
    return <ul className="list-group">
                 {items.map(item =><list onClick={()=>onItemSelect(item)}
                                        key ={item[valueProperty]}
                                        className={item===selectedItem?"list-group-item active":"list-group-item"}>
            {item[textProperty]} 
            </list>)}
       
    </ul>;
}
 
ListGroup.defaultProps = {
    textProperty:"name",
    valueProperty:'_id'
}
export default ListGroup;