import React from 'react';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const TextFieldExampleError = () => (
<MuiThemeProvider>
  <div>
    <TextField
      hintText="Hint Text"
      errorText="This field is required"
    /><br />
    <TextField
      hintText="Hint Text"
      errorText="The error text can be as long as you want, it will wrap."
    /><br />
    <TextField
      hintText="Hint Text"
      errorText="This field is required"
      floatingLabelText="Floating Label Text"
    /><br />
    <TextField
      hintText="Message Field"
      errorText="This field is required."
      floatingLabelText="MultiLine and FloatingLabel"
      multiLine={true}
      rows={2}
    /><br />
  </div>
</MuiThemeProvider>
);

export default TextFieldExampleError;