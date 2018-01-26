import React from 'react';
import TextField from 'material-ui/TextField';
import Person from 'material-ui-icons/Person';
import MyCustomIsExpired from './MyCustomIsExpired';
import types from 'restfor/types';

export default register => {
  register.grid.action(
    'user',
    'Add task',
    async ({ params, invoke, state, selection }) => {
      await invoke('POST', 'task', '/actions/addTaskForUsers', { body: selection });
    },
    {
      condition: ({ selection }) => selection.length > 0,
      params: {
        sendEmail: types.bool(),
        title: types.string(),
        deadline: types.date(),
        taskType: types.enum('primary', 'secondary'),
        noSense: ({ value, onChange }) => <TextField value={value} onChange={evt => onChange(evt.target.value)} />
      }
    }
  );

  register.grid.action('task', 'Action without params', ({ selection }) => {
    setTimeout(() => alert(`Selection: ${selection.join(', ')}`), 500);
  });

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
