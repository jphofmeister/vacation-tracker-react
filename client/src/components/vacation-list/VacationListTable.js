import React from 'react';
import { format } from 'date-fns';
import { StyledVacationListTable } from '../styles/StyledVacationListTable';
import { StyledIconButton } from '../styles/StyledIconButton';
import getUTCDate from '../../utils/getUTCDate';

import { useDispatch } from 'react-redux';
import { deleteDay } from '../../actions/dayActions';

const VacationListTable = ({ days }) => {
  const dispatch = useDispatch();

  let daysList = days.map(day =>
    <tr key={day._id}>
      <td>{format(getUTCDate(day.date), 'MMMM d, yyyy')}</td>
      <td>
        <StyledIconButton onClick={() => dispatch(deleteDay(day._id))}>
          <i className="fas fa-times"></i>
        </StyledIconButton>
      </td>
    </tr>
  );

  return (
    <StyledVacationListTable>
      <thead>
        <tr>
          <th>Date</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {daysList}
      </tbody>
    </StyledVacationListTable>
  )
};

export default VacationListTable;