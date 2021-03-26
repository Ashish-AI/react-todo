import React, { useState } from "react";


const App=()=>{
const [inputList,setInputList]=useState("buyData");

const [Items,setItems] = useState([]);


//whatever is inputed in input is set ot setInputList
//which further displayes in inputLIST
const itemEvents=(event)=>{
    setInputList(event.target.value)
};



const listOfItem=()=>{
    setItems((oldItems)=>{
        return [...oldItems,inputList];
    })

};
    return <>

        <div className="main_div">
            <div className="center_div">
                <br/>
                <h1>ToDo List</h1>
                <br/> 
                <input type="text" placeholder="Add an item" onChange={itemEvents}/>
                <button onClick={listOfItem}> + </button>
                
                <ol>
                    {Items.map((itemval)=>{
                       return <li>{itemval}</li>
                   })}
                </ol>

            </div>
        </div>

        </>

};

export default App;