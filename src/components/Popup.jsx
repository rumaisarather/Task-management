import axios from 'axios';
import React, { useState } from 'react'
import { RxCross1 } from 'react-icons/rx';
import { baseURL } from '../ultlis/constant';

const Popup =({setShowPopup, popupContent,setUpdateUI})=>{
    const [input,setInput]=useState(popupContent.text);

    const updateToDo = ()=>{
        axios.put(`${baseURL}/update/${popupContent.id}`,{toDo: input}).then((res)=>{
            console.log(res.data);
            setUpdateUI((prevState)=> !prevState);
            setShowPopup(false)
        });
    };

    return(
<div className='backdrop'>
    <div className='popup'>
    <RxCross1 className='cross' onClick={() => setShowPopup(false)} />
    <h1>update ToDo</h1>
    <div className='popup_input_holder'>
    <input value={input}  onChange={(e)=> setInput(e.target.value)} type="text" placeholder='Update a ToDo..'/>
    <button onClick={updateToDo}>update</button>
    </div>
    </div>
</div>
    )
}
export default Popup;