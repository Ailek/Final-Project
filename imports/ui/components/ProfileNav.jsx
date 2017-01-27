import {Component} from 'react';
import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import { IndexLink, Link, browserHistory } from 'react-router';
import style from '../../../client/styles.js';

const createIcon = <FontIcon className="material-icons">queue</FontIcon>;
const logIcon = <FontIcon className="material-icons">directions_run</FontIcon>;
const dashboardIcon = <FontIcon className="material-icons">insert_chart</FontIcon>;

var ProfileNav = React.createClass ({

  _goToCreateWorkout: function() {
    browserHistory.push('/workout/create');
  },

  _goToLogWorkout: function() {
    browserHistory.push('/workout/select');
  },

  _goToDashboard: function() {
    browserHistory.push('/dashboard');
  },
  
  render: function() {
    return (

      <BottomNavigation style={style.profileNavStyle}>
        <BottomNavigationItem
          label="Create Routine"
          icon={createIcon}
          onTouchTap={this._goToCreateWorkout}
        />
        <BottomNavigationItem
          label="Log Workout"
          icon={logIcon}
          onTouchTap={this._goToLogWorkout}
        />
        <BottomNavigationItem
          label="Dashboard"
          icon={dashboardIcon}
          onTouchTap={this._goToDashboard}
        />
      </BottomNavigation>

    );
  }
});

export default ProfileNav;