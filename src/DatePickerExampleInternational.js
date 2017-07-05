import React from 'react';
import DatePicker from 'material-ui/DatePicker';
import areIntlLocalesSupported from 'intl-locales-supported';
import persianUtils from 'material-ui-persian-date-picker-utils';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

let DateTimeFormat;

/**
 * Use the native Intl.DateTimeFormat if available, or a polyfill if not.
 */
if (areIntlLocalesSupported(['fr', 'fa-IR'])) {
  DateTimeFormat = global.Intl.DateTimeFormat;
} else {
  console.log('intl l10n');
  const IntlPolyfill = require('intl');
  DateTimeFormat = IntlPolyfill.DateTimeFormat;
  require('intl/locale-data/jsonp/ja-JP');
  require('intl/locale-data/jsonp/fr');
  require('intl/locale-data/jsonp/fa-IR');
}

/**
 *  `DatePicker` can be localised using the `locale` property. The first example is localised in French.
 *  Note that the buttons must be separately localised using the `cancelLabel` and `okLabel` properties.
 *
 *  The second example shows `firstDayOfWeek` set to `0`, (Sunday), and `locale` to `en-US` which matches the
 *  behavior of the Date Picker prior to 0.15.0. Note that the 'en-US' locale is built in, and so does not require
 *  `DateTimeFormat` to be supplied.
 *
 *  The final example displays the resulting date in a custom format using the `formatDate` property.
 */
const DatePickerExampleInternational = () => (
  <MuiThemeProvider>
  <div>
    <DatePicker
      hintText="日付（年月日）"
      DateTimeFormat={DateTimeFormat}
      okLabel="OK"
      cancelLabel="Cancel"
      firstDayOfWeek={0}
      locale="ja"
    />
    <DatePicker
      hintText="fr locale"
      DateTimeFormat={DateTimeFormat}
      okLabel="OK"
      cancelLabel="Annuler"
      locale="fr"
    />
    <DatePicker
      hintText="fa-IR locale"
      DateTimeFormat={DateTimeFormat}
      okLabel="تایید"
      cancelLabel="لغو"
      locale="fa-IR"
      firstDayOfWeek={6}
      utils={persianUtils}
    />
    <DatePicker
      hintText="en-US locale"
      locale="en-US"
      firstDayOfWeek={0}
    />
    {/*<DatePicker
      hintText="Custom date format"
      firstDayOfWeek={0}
      formatDate={new DateTimeFormat('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }).format}
    />*/}
    <DatePicker
      hintText="Custom date format"
      firstDayOfWeek={0}
      formatDate={new DateTimeFormat('en-US', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      }).format}
    />
  </div>
  </MuiThemeProvider>
);

export default DatePickerExampleInternational;