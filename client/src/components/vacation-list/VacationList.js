import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDays } from '../../actions/dayActions';
import { StyledVacationList } from '../styles/StyledVacationList';

import VacationListTable from './VacationListTable';

import Spinner from '../common/Spinner';

const VacationList = () => {
  const { days, loading } = useSelector(state => ({
    days: state.day.days,
    loading: state.day.loading
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDays());
  }, []);

  let vacationListContent;

  if (days === null || loading) {
    vacationListContent = <Spinner />
  } else {
    vacationListContent = <VacationListTable days={days} />
  }

  return (
    <StyledVacationList>
      <h3>VacationList</h3>
      {vacationListContent}
    </StyledVacationList>
  );
};

export default VacationList;