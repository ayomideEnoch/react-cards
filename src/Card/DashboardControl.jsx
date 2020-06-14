import React from 'react';
import YearSelector from './YearSelector';

function DashboardControl() {
  return (
    <div className='DashboardControl'>
      <span className='DashboardTitle'>
        Dashboard</span>
      <span className='DashboardShow'>
        Show by
      </span>
      <span className='DashboardYear'>
        This Year
        <i className='fa fa-caret-down'></i>
      <YearSelector /> 
      </span>
    </div>
  );
}

export default DashboardControl;