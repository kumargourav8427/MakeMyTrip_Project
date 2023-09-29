import React from 'react'
import { Link } from 'react-router-dom'
import {BiChevronRight} from 'react-icons/bi'

function Giftcard() {
  return (
    <>
    <div className='container'>
      <div className='row'>
        <span>
        <Link to="/">Home </Link>
        <span><BiChevronRight/>Gifts card</span>
        </span>
        <div className='col-sm-3'>
          <h2 className='text-bold'>Refine Search</h2>

        </div>
        <div className='col-sm-9'></div>
      </div>
    </div>
    </>
  )
}

export default Giftcard
