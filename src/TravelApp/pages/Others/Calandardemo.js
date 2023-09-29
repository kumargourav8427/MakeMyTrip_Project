import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"

export default function Calandardemo() {
    const[calstate,setcalState]=useState({
                                     startDate: new Date(),
                                     datePickerIsOpen: false,
                                    })
    function openDatePicker() {
        setcalState({
          datePickerIsOpen: !calstate.datePickerIsOpen,
        });
      };

    function handleChange(date) {
        setcalState({
          startDate: date
        });
      }
  return (
    <div>
        <button onClick={openDatePicker}>openDate</button>
        <DatePicker
          selected={calstate.startDate}
          onChange={handleChange}
          onClickOutside={openDatePicker}
          open={calstate.datePickerIsOpen}
        />
    </div>
  )
}
