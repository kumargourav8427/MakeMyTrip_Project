import React from 'react'



function DateRangePickNew() {
  return (
    <div>
        <input type='date' placeholder='SelectDate' 
        className='border-0 outline-0'
        newDate = {new Date()}
        />
    </div>
  )
}

export default DateRangePickNew
