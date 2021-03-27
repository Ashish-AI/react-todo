import React from "react";
const ToDOList=(props)=>{
    

    return (
        <>
        <div className="todo_style">
        {/* <i className="fas da-times" aria-hidden="true"/> */}
        <i className="fas fa-times"
         area-hidden="true" 
         onClick={()=>{
        props.onSelect(props.id);
        }}/>  
        
    <li>{props.text}</li>
    </div>

    </>
    )
}

export default ToDOList;