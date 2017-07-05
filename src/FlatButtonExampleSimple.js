import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const FlatButtonExampleSimple = () => (
  <MuiThemeProvider>
    <div>
        <FlatButton label="Default" />
        <FlatButton label="Primary" primary={true} />
        <FlatButton label="Secondary" secondary={true} />
        <FlatButton label="Disabled" disabled={true} />
        <br />
        <br />
        <FlatButton label="Full width" fullWidth={true} />
    </div>
  </MuiThemeProvider>
);

export default FlatButtonExampleSimple;