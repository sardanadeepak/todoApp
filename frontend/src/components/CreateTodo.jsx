import React, { useState } from 'react'

const CreateTodo = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const createTodo = () => {
        fetch("http://localhost:3000/todo", {
            method: "POST",
            body: JSON.stringify({
                title: title,
                description: description
            }),
            headers: {
                "Content-Type": "application/json"
            }
        }).
            then(async (res) => {
                const json = await res.json()
                setTitle('')
                setDescription('')
            })
    }
    return (
        <div style={{}}>
            <input type='text' value={title} placeholder='Title' onChange={(e) => setTitle(e.target.value)}
                style={{ padding: 10, margin: 10 }}></input>
            <input type='text' value={description} placeholder='description' onChange={(e) => setDescription(e.target.value)}
                style={{ padding: 10, margin: 10 }}></input>
            <button style={{ padding: 4, margin: 6 }} onClick={createTodo}>Add a Todo</button>
        </div>
    )
}

export default CreateTodo