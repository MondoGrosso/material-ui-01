import React, { Component } from 'react';
import NavBar from './NavBar';
import AutoCompleteExampleSimple from './AutoCompleteExampleSimple';
import AvatarExampleSimple from './AvatarExampleSimple';
import BadgeExampleSimple from './BadgeExampleSimple';
import BottomNavigationExampleSimple from './BottomNavigationExampleSimple';
import FlatButtonExampleSimple from './FlatButtonExampleSimple';
import RaisedButtonExampleSimple from './RaisedButtonExampleSimple'
import ChipExampleArray from './ChipExampleArray';
import DatePickerExampleInternational from './DatePickerExampleInternational';
import DialogExampleScrollable from './DialogExampleScrollable';
import DividerExampleForm from './DividerExampleForm';
import DrawerUndockedExample from './DrawerUndockedExample'


class App extends Component {
  constructor() {
    super()
    this.state = {
      open: false
    }
  }
  handleToggle() {
    this.setState({
      open: !this.state.open
    })
  }
  render() {
    return (
      <div>
        <NavBar
          onToggle={() => this.handleToggle()}
          open={this.state.open}
        />
        <AutoCompleteExampleSimple />
        <AvatarExampleSimple />
        <BadgeExampleSimple />
        <BottomNavigationExampleSimple />
        <FlatButtonExampleSimple/>
        <RaisedButtonExampleSimple/>
        <ChipExampleArray/>
        <DatePickerExampleInternational/>
        <DialogExampleScrollable />
        <DividerExampleForm />
        <DrawerUndockedExample />
      </div>
    );
  }
}

export default App;