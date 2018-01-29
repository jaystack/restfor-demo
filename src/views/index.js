import React from 'react';
import TextField from 'material-ui/TextField';
import Person from 'material-ui-icons/Person';
import MyCustomIsExpired from './MyCustomIsExpired';
import types from 'restfor/types';

export default register => {
  register.grid.action(
    'user',
    'Add task for users',
    async ({ params, invoke, selection }) => {
      await invoke('POST', 'user', '/actions/addTaskForUsers', { body: { ...params, users: selection } });
    },
    {
      condition: ({ selection }) => selection.length > 0,
      params: {
        sendEmail: types.bool(),
        title: types.string(),
        deadline: types.date(),
        taskType: types.enum('primary', 'secondary'),
        noSense: props => {
          const { value, onChange, selection } = props;
          return <TextField value={value || selection.join(', ')} onChange={evt => onChange(evt.target.value)} />;
        }
      }
    }
  );

  register.grid.action('task', 'Action without params', ({ invoke, selection }) => {
    setTimeout(() => alert(`Selection: ${selection.join(', ')}`), 500);
  });

  register.details.action(
    'user',
    'Add task for user',
    async ({ params, invoke, record }) => {
      await invoke('POST', 'task', '/', { body: [{ ...params, UserId: record.id }] });
    },
    {
      params: {
        title: types.string(),
        deadline: types.date(),
        taskType: types.enum('primary', 'secondary')
      }
    }
  );

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
