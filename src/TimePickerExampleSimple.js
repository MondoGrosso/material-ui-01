import React from 'react';
import TimePicker from 'material-ui/TimePicker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const TimePickerExampleSimple = () => (
<MuiThemeProvider>
  <div>
    <TimePicker
      hintText="12hr Format"
    />
    <TimePicker
      hintText="12hr Format with auto ok"
      autoOk={true}
    />
    <TimePicker
      format="24hr"
      hintText="24hr Format"
      minutesStep={5}
    />
    <TimePicker
      disabled={true}
      format="24hr"
      hintText="Disabled TimePicker"
    />
  </div>
</MuiThemeProvider>
);

export default TimePickerExampleSimple;