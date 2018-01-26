import React from 'react';
import TextField from 'material-ui/TextField';
import Person from 'material-ui-icons/Person';
import MyCustomIsExpired from './MyCustomIsExpired';

export default register => {
  //register.grid.property('task', 'deadline', ({ value }) => new Date(value).toLocaleTimeString());

  register.grid.property('task', 'isExpired', MyCustomIsExpired);

  register.details.property('task', 'isExpired', MyCustomIsExpired);

  register.editor.property('task', 'UserId', ({ propertyName, value, onChange }) => (
    <div>
      <Person />{' '}
      <TextField name={propertyName} type="number" value={value} onChange={evt => onChange(Number(evt.target.value))} />
    </div>
  ));
};
