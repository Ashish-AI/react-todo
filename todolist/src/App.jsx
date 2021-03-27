import React, { useState } from "react";
import ToDoList from "./ToDoList.jsx";

const App=()=>{
const [inputList,setInputList]=useState("");

const [Items,setItems] = useState([]);


//whatever is inputed in input is set ot setInputList
//which further displayes in inputLIST
const itemEvents=(event)=>{
    setInputList(event.target.value)
};



const listOfItem=()=>{
    setItems((oldItems)=>{
        return [...oldItems,inputList];
    });
    setInputList(""); //empties after adding to list
};


const deleteItem= (id)=>{
    // console.log("Deleted");
    setItems((oldItems) => {
        return oldItems.filter((arrayElements,index)=>{
            return index !==id;  //Return which is not matched out
        });
    });

};

    return <>

        <div className="main_div">
            <div className="center_div">
                <br/>
                <h1>ToDo List</h1>
                <br/> 
                <input type="text" placeholder="Add an item" onChange={itemEvents}   value={inputList}  />
                <button onClick={listOfItem}> + </button>
                
                <ol>
                    {Items.map((itemval,index)=>{
                        return <ToDoList key={index} id={index} text={itemval} onSelect={deleteItem}/>
                   })}
                </ol>

            </div>
        </div>

        </>

};

export default App;