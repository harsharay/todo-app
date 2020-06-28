import React,{ useState,useEffect } from "react"
import { TextField,Button } from  "@material-ui/core";
// import uuid from "react-uuid";
import ListItem from "./ListItem";
import PetsOutlinedIcon from '@material-ui/icons/PetsOutlined';

const TodoPage = () => {

    let [state,setState] = useState({
        inputValue : "",
        todoItems: []
    })

    useEffect(() => {
        localStorage.setItem("todoList",state.todoItems)
    },[state.todoItems])

    const handleClick = () => {
        if(state.inputValue.length > 0){
            setState(prevVal => {
                return {
                    ...prevVal,
                    todoItems : [...state.todoItems , state.inputValue]
                }
                
            })
            setState(prevVal => {
                return {
                    ...prevVal,
                    inputValue : ""
                }
            })
        }
    }

    const handleChange = e => {
        let inputVal = e.target.value;
        setState(prevVal => {
            return {
                ...prevVal,
                inputValue: inputVal
            }
        })
    }

    const handleDelete = id => {
        const filteredItems = state.todoItems.filter((item,index) => index !==id )
        setState(prevValue => {
            return {
                ...prevValue,
                todoItems : filteredItems
            }
        })
    }

    return (
        <div className="container">
            <h1>TODO LIST</h1>
            <TextField label="Type Here..." onChange={handleChange} value={state.inputValue}/>
            <Button variant="contained" color="secondary" onClick={handleClick}>Add Todo</Button>
            <div  className='list-group'>
                {state.todoItems.length > 0 ? state.todoItems.map((item,index) => {
                    return (
                        <ListItem name={item} key={index} id={index} handleDelete={handleDelete}/>
                    )
                }) :  
                <div>
                    <PetsOutlinedIcon color="secondary"/>
                    <h5>Wow, such empty</h5>
                </div>
                }
            </div>
        </div>
    )
}

export default TodoPage;