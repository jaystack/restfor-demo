import React from 'react';
import TextField from 'material-ui/TextField';
import Person from 'material-ui-icons/Person';
import MyCustomIsExpired from './MyCustomIsExpired';

export default register => {
  // selections
  /* register.grid.action('task', 'My Delete', { sendEmail: 'boolean', userid: MyCustomReactComp }, async ({ params, invoke, state, selections }) => {
    await invoke('GET', 'task', '/actions/count', { body: selections }, (state, error, result) => {
      alert(result.count);
      return state;
    });
  }); */

  register.grid.property('task', 'isExpired', MyCustomIsExpired);

  register.details.property('task', 'isExpired', MyCustomIsExpired);

  register.editor.property('task', 'UserId', ({ propertyName, value, onChange, invoke }) => {
    return (
      <div>
        <Person />{' '}
        <TextField
          name={propertyName}
          type="number"
          value={value}
          onChange={evt => onChange(Number(evt.target.value))}
        />
      </div>
    );
  });
};
