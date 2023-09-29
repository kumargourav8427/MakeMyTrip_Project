import React from 'react'
import { Button } from 'react-bootstrap'

function Selector(props) {
    if (!props.isVisible) return null;

    const handleClose=(m)=>{
        if(m.target.id ==='main') 
        props.onClose();
    }

    return (
        <div className='' id='main'> 
            <select className='select_price'>
                <option>₹0-₹1500</option>
                <option>₹1500-₹2500</option>
                <option>₹2500-₹5000</option>
                <option>₹5000+</option>
            </select>
            <Button onClick={handleClose}>Apply</Button>
        </div>
    )
}

export default Selector
