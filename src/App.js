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
import SvgIconExampleSimple from'./SvgIconExampleSimple';
import SvgIconExampleIcons from "./SvgIconExampleIcons";
import FontIconExampleSimple from './FontIconExampleSimple';//表示されない。。。
import ListExampleSimple from './ListExampleSimple';
import ListExampleNested from './ListExampleNested';
import MenuExampleSecondary from './MenuExampleSecondary';//ChromeだとResearchの箇所が変。。。
import IconMenuExampleNested from './IconMenuExampleNested';
import PaperExampleRounded from './PaperExampleRounded';
import RefreshIndicatorExampleLoading from './RefreshIndicatorExampleLoading';
import LinearProgressExampleDeterminate from './LinearProgressExampleDeterminate';
import SelectFieldExampleSimple from './SelectFieldExampleSimple';
import SelectFieldExampleError from './SelectFieldExampleError';
import SelectFieldExampleMultiSelect from './SelectFieldExampleMultiSelect';
import SliderExampleCustomScale from './SliderExampleCustomScale';
import CheckboxExampleSimple from './CheckboxExampleSimple';
import RadioButtonExampleSimple from './RadioButtonExampleSimple';
import ToggleExampleSimple from './ToggleExampleSimple';
import HorizontalLinearStepper from './HorizontalLinearStepper';
import HorizontalNonLinearStepper from './HorizontalNonLinearStepper';
import VerticalLinearStepper from './VerticalLinearStepper';
import GranularControlStepper from './GranularControlStepper';
import HorizontalTransition from './HorizontalTransition';
import TableExampleControlled from './TableExampleControlled';
import TableExampleComplex from  './TableExampleComplex';
import TabsExampleSimple from './TabsExampleSimple';
import TabsExampleIconText from './TabsExampleIconText';
import TextFieldExampleSimple from './TextFieldExampleSimple';
import TextFieldExampleError from './TextFieldExampleError';
import TimePickerExampleSimple  from './TimePickerExampleSimple';
import ToolbarExamplesSimple from './ToolbarExamplesSimple';

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
        <SvgIconExampleSimple />
        <SvgIconExampleIcons />
        <FontIconExampleSimple />
        <ListExampleSimple />
        <ListExampleNested />
        <MenuExampleSecondary />
        <IconMenuExampleNested />
        <PaperExampleRounded />
        <RefreshIndicatorExampleLoading />
        <LinearProgressExampleDeterminate />
        <SelectFieldExampleSimple />
        <SelectFieldExampleError />
        <SelectFieldExampleMultiSelect />
        <SliderExampleCustomScale />
        <CheckboxExampleSimple />
        <RadioButtonExampleSimple />
        <ToggleExampleSimple />
        <HorizontalLinearStepper />
        <HorizontalNonLinearStepper />
        <VerticalLinearStepper />
        <GranularControlStepper />
        <HorizontalTransition />
        <TableExampleControlled />
        <TableExampleComplex />
        <TabsExampleSimple />
        <TabsExampleIconText />
        <TextFieldExampleSimple />
        <TextFieldExampleError />
        <TimePickerExampleSimple />
        <ToolbarExamplesSimple />
      </div>
    );
  }
}

export default App;