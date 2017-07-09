import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const iconStyles = {
  marginRight: 24,
};

const FontIconExampleSimple = () => (
<MuiThemeProvider>
  <div>
    <FontIcon
      className="muidocs-icon-action-home"
      style={iconStyles}
    />

    <FontIcon
      className="muidocs-icon-action-home"
      style={iconStyles}
      color={blue500}
    />

    <FontIcon
      className="muidocs-icon-action-home"
      style={iconStyles}
      color={red500}
      hoverColor={greenA200}
    />
  </div>
</MuiThemeProvider>
);

export default FontIconExampleSimple;