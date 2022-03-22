import React, { useState } from "react";
import "./todo.css"

const Todo = () => {
    const [todoInput, setTodoInput] = useState("")
    const [todoList, setTodoList] = useState([
        {   count:null,
            text: "",
            date: "",
            time: ""
        }
    ])
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [count,setCount]=useState(1)

    const handleClick = () => {
        setCount(count+1)
     if(!date || !time){
         alert("Enter date and time")
         return
     }
        if (!todoInput ) {
            alert("Enter something")
            return
        } else {

            setTodoList([...todoList, {
                text: todoInput,
                date,
                time,
                count

            }])
            setTodoInput("")
        }
    }
    return (
        <>
            <div>
                <h1>TODO LIST</h1>
                <h3>Add Todo Here</h3>
                <input autoFocus placeholder="Enter Todo..." onChange={e => setTodoInput(e.target.value)} />
                <input type="date" onChange={e => setDate(e.target.value)} />
                <input type="time" onChange={e => setTime(e.target.value)} />
                <button onClick={handleClick}>Add </button>
            </div>

            <div>
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Date</th>
                            <th scope="col">Time</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            todoList.map((item) => (

                                <tr key={item.count}>
                                    <td >{item.count}</td>
                                    <td >{item.text}</td>
                                    <td>{item.date}</td>
                                    <td>{item.time}</td>
                                </tr>

                            ))
                        }


                    </tbody>
                </table>



            </div>
        </>
    )
}

export default Todo;