import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const style = {
  margin: 12,
};

const RaisedButtonExampleSimple = () => (
  <MuiThemeProvider>
    <div>
        <RaisedButton label="日本語" style={style}  disableTouchRipple={false}/>
        <RaisedButton label="OK" primary={true} style={style} />
        <RaisedButton label="Cancel" secondary={true} style={style} />
        <RaisedButton label="Disabled" disabled={true} style={style} />
        <br />
        <br />
        <RaisedButton label="Full width" fullWidth={true} />
    </div>
  </MuiThemeProvider>
);

export default RaisedButtonExampleSimple;