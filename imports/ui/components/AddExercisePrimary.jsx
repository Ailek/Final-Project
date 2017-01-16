// Import React
import React from 'react';
import { Component } from 'react';

// Import React Grid System
import { Container, Row, Col, Visible, Hidden } from 'react-grid-system';

// Import Material-ui
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentRemove from 'material-ui/svg-icons/content/remove';

// Import Components
import UnitsDropDownMenu from '../components/UnitsDropDownMenu';
import AddRepPrimary from '../components/AddRepPrimary';
import AddRepSecondary from '../components/AddRepSecondary';


// Create Component
class AddExercisePrimary extends Component {

  constructor(props) {
    super(props);
    this.state = {value: ""};
  }

  _handleChange(event, index, value){
    this.setState({value: event.target.value});
    console.log(event.target.value)
  }

  _handleClick(){
    // Add another Excerise to the selected Workout 
    this.props._addAnotherExcerise(this.props._iOfWorkout);
  }

  render(){
    return(
      <Card>
        <CardHeader
          actAsExpander={false}
          showExpandableButton={true}
          avatar={<FloatingActionButton onClick={this._handleClick.bind(this)} secondary={false} mini={true}><ContentAdd/></FloatingActionButton>}
          title={
            <Container>
              <TextField
                value={this.state.value}
                onChange={this._handleChange.bind(this)}
                floatingLabelText="Excercise Name"
                hintText="Bench Press"
                fullWidth={true}
              />
              <UnitsDropDownMenu />
            </Container>
          }
        />
        <CardText expandable={true}>
          <Container>

            {/* First Rep */}
            <AddRepPrimary />

            {/* MAPPING NEEDED HERE -> Additional Reps */}
              <AddRepSecondary />
              <AddRepSecondary />

          </Container>
        </CardText>
      </Card>
    )
  }
}


export default AddExercisePrimary;                          