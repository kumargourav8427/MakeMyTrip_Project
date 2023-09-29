import React from 'react'
import './Others.css'
import { TbChevronDown } from 'react-icons/tb'

function RoomCard(isvisible) {

    if(!isvisible) return null;
    return (
        <>
        <div className='modal_wrapper'> </div>
        <div className='modal_container'>
            <h2>My Model</h2>
            <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
            <button>Accept</button>
        </div>
        </>
    )
}

export default RoomCard
