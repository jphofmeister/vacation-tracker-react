import React from 'react';
import { StyledDashboard } from './styles/StyledDashboard';

import VacationList from './vacation-list/VacationList';
import AddVacationDayForm from './add-vacation-day/AddVacationDayForm';

const Dashboard = () => (
  <StyledDashboard>
    <h2>Dashboard</h2>
    <VacationList />
    <AddVacationDayForm />
  </StyledDashboard>
);

export default Dashboard;