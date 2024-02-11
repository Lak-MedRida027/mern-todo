import React, { useState } from 'react'
import axios from 'axios'

const Create = () => {
    const [ task , setTask] = useState()
    axios.defaults.withCredentials = true;

    const handelAdd = () => {
        axios.post('http://localhost:5050/api/creat' , {task : task})
        .then(res => {
          window.location.reload()
        })
        .catch(err => console.log(err))
    }
  return (
    <div className='inputs'>
        <input className='input-text' type='text' placeholder='Enter task' onChange={(e) => setTask(e.target.value)}/>
        <button className='button-add' type='button' onClick={handelAdd}>Add</button>
    </div>
  )
}

export default Create
