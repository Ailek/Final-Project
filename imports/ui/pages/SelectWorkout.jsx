// Import the Meteeeeeeooooor!
import { Meteor } from 'meteor/meteor';

// Import React
import React from 'react';
import { Component } from 'react';

// Import React Grid System
import { Container, Row, Col, Visible, Hidden } from 'react-grid-system';

// Import Material-ui 
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';

// Import Components
import SelectWorkoutButton from '../components/SelectWorkoutButton';


// Page Component
class SelectWorkout extends Component {

  constructor(props) {
    super(props);
    this.state = {workouts: []}
  }


  componentWillMount(){

    // Get Routine Id
    Meteor.call('getCurrentRoutine', function(err, res){
      // Get Workouts via Current Routine Id
      Meteor.call('getWorkoutOptions', res, function(err, res){
        // Collect all Workouts (Name + Id)
        this.setState({workouts: res});
      }.bind(this));

    }.bind(this));
    
  }


  _selectWorkout(workoutObj){
    console.log('Exit Page and Keep Changes')
    console.log(workoutObj)
  }


  _cancelSelection(){
    console.log('Exit Page and Don\'t select anything.')
  }


  render() {
    return (
      <Container>

        {/* Title with Date Picker */}
        <Row>
          <Card>
            <CardText>
              Select a Workout
            </CardText>
          </Card>
        </Row>

        <br/>

        {/* List of Excerises */}
        <Row>
          <Card>
            <center>
              {/* ++++++++++ ITERATE OVER WORKOUT SELECTIONS ++++++++++ */}
              {this.state.workouts.map(function(search, i) {
                return (
                  <SelectWorkoutButton
                    key={"workout-" + i}
                    _workoutName={search.workoutName}
                    _workoutObj={search}
                    _selectWorkout={this._selectWorkout.bind(this)}
                  />
                );
              }.bind(this))}
              {/* ++++++++++++++++++++++++++++++++++++++++++++ */}
              <br />
            </center>
          </Card>
        </Row>

        <br />
        {/* Submit or Cancel Form Submisson */}
        {/* This will need a way to collect all the data from the forms above and then hit an api on the backend */}
        {/* Maybe add a confirmation modal too... Create this workout? You will not be able to edit after this */}
        <Row>
          <center>
            <Row>
              <RaisedButton label="Cancel" onClick={this._cancelSelection.bind(this)} />
            </Row>
          </center>
        </Row>

      </Container>
    );
  }

};

export default SelectWorkout;
