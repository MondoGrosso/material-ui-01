import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


const TabsExampleIconText = () => (
<MuiThemeProvider>
  <Tabs>
    <Tab
      icon={<FontIcon className="material-icons">phone</FontIcon>}
      label="RECENTS"
    />
    <Tab
      icon={<FontIcon className="material-icons">favorite</FontIcon>}
      label="FAVORITES"
    />
    <Tab
      icon={<MapsPersonPin />}
      label="NEARBY"
    />
  </Tabs>
</MuiThemeProvider>
);

export default TabsExampleIconText;