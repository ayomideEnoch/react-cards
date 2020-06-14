import React from 'react';
import DashboardControl from './DashboardControl';
import CardContainer from './CardContainer'; 

function Dashboard() {
  return (
    <div className='Dashboard'>
        <DashboardControl />
        <CardContainer />
    </div>
  );
}

export default Dashboard;