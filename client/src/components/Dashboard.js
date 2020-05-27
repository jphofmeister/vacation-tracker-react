import React from 'react';
import { StyledDashboard } from './styles/StyledDashboard';

import VacationList from './vacation-list/VacationList';

const Dashboard = () => (
  <StyledDashboard>
    <h2>Dashboard</h2>
    {/* user info */}
    {/* vacation list */}
    <VacationList />
  </StyledDashboard>
);

export default Dashboard;