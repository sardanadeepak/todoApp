import React, { useEffect, useState } from 'react'

const Todos = () => {
    const [todos, setTodos] = useState([])
    useEffect(() => {
        fetch("http://localhost:3000/todos")
            .then((response) => response.json())
            .then((todos) => {
                setTodos(todos.todos)
            })

    }, [])
    return (
        <div>
            {
                todos.map(todo => {
                    return <div key={todo._id} style={{ display: 'flex', alignItems: 'center' }}>
                        <h2>{todo.title}</h2>
                        <p>{todo.description}</p>
                        <button style={{ padding: 4, margin: 6 }}>
                            {
                                todo.completed == true ? "Completed" : "Mark as completed"
                            }
                        </button>

                    </div>
                })
            }
        </div >
    )
}

export default Todos