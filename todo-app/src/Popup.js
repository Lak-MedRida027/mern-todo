import React, { useState ,useEffect} from 'react'
import axios from "axios";
import { IoMdClose } from "react-icons/io";

const Popup = (props) => {
    const [ input , setInput] = useState();
    axios.defaults.withCredentials = true;

    useEffect(() => {
        axios
        .get("http://localhost:5050/api/getOne/" + props.id)
        .then((res) => setInput(res.data))
        .catch((err) => console.log(err));
    }, [props.id]);

    const handelEdit = (id , task) =>{
        axios
        .put("http://localhost:5050/api/edit/" + id , {task : input})
        .then((res) => {
            window.location.reload();
            props.setPopup(false)
        })
        .catch((err) => console.log(err));
    }

    return (
        <div className='all-popup'>
            <input className='update-input-text' type='text' value={input} placeholder='Update Todo' onChange={(e) => setInput(e.target.value)}/>
            <button className='button-update' type='button' onClick={() => handelEdit(props.id , input)}>Update</button>
            <IoMdClose onClick={() => props.setPopup(false)}/>
        </div>
    )
}

export default Popup
