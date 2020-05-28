import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addDay } from '../../actions/dayActions';

import { StyledForm } from '../styles/StyledForm';

const AddVacationDayForm = () => {
  const [dayInput, setDayInput] = useState();
  const dispatch = useDispatch();

  const onChange = (e) => {
    setDayInput(e.target.value);
  }

  const onSubmitDay = (e) => {
    e.preventDefault();

    const dayData = {
      date: dayInput
    }

    dispatch(addDay(dayData));
  }

  return (
    <StyledForm id="date_form" onSubmit={onSubmitDay}>
      <label htmlFor="date">Add Vacation Date</label>
      <input
        type="date"
        name="date"
        id="date"
        onChange={onChange} />

      <input type="submit" value="Submit" />
    </StyledForm>
  )
}

export default AddVacationDayForm;