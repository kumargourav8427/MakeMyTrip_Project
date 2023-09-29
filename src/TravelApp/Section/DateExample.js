import React, { useState } from "react";
import { DateRangePicker } from "react-dates";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import styled from "styled-components";
import './section.css'

function DateExample() {
  const [dateRange, setDateRange] = useState({
    startDate: null,
    endDate: null,
  });
  const [focusedInput, setFocusedInput] = useState();

  const handleDateChange = ({ startDate, endDate }) => {
    setDateRange({ startDate, endDate });
  };
  const Wrapper = styled.div`
  color: black;
  background-color: black;
 ;
  ` 

  return (
    <div>
      <Wrapper>
      <DateRangePicker
        startDate={dateRange.startDate}
        startDateId="startDate"
        endDate={dateRange.endDate}
        endDateId="endDate"
        onDatesChange={handleDateChange}
        focusedInput={focusedInput}
        onFocusChange={(focusedInput) => setFocusedInput(focusedInput)}
    
      ></DateRangePicker>
      </Wrapper>
    </div>
  );
}

export default DateExample;

