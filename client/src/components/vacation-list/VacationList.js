import React, { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { getDays } from '../../actions/dayActions';
import { StyledVacationList } from '../styles/StyledVacationList';

import VacationListTable from './VacationListTable';
import Spinner from '../common/Spinner';

const VacationList = () => {
  const days = useSelector(state => state.day.days);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDays());
  }, []);

  const onDeleteClick = () => {
    dispatch()
  }

  console.log();

  return (
    <StyledVacationList>
      <h3>VacationList</h3>
      {
        !days.length == 0 ? <VacationListTable days={days} /> : <Spinner />
      }
    </StyledVacationList>
  );
};

export default VacationList;