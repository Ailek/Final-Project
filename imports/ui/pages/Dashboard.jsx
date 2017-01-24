// Import React
import React from 'react';
import { Component } from 'react';
import {render} from 'react-dom';
import {Chart} from 'react-google-charts';

// Import Components
import ProgressGraph from '../components/ProgressionGraph';
import DashboardNav from '../components/DashboardNav';

// Page Component
class Dashboard extends Component {
  render() {
    return (
    <div>
      <ProgressGraph />
      <DashboardNav />
    </div>
    );
  }
};

export default Dashboard;