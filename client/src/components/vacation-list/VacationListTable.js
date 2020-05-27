import React from 'react';
import { format } from 'date-fns';
import { StyledVacationListTable } from '../styles/StyledVacationListTable';
import { StyledIconButton } from '../styles/StyledIconButton';
import getUTCDate from '../../utils/getUTCDate';

const VacationListTable = ({ days }) => {

  let daysList = days.map(day =>
    <tr key={day._id}>
      <td>{format(getUTCDate(day.date), 'MMMM d, yyyy')}</td>
      <td><StyledIconButton><i className="fas fa-times"></i></StyledIconButton></td>
    </tr>
  );

  return (
    <StyledVacationListTable>
      <tr>
        <th>Date</th>
        <th></th>
      </tr>
      {daysList}
    </StyledVacationListTable>
  )
};

export default VacationListTable;