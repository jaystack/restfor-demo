import React from 'react';
import Chip from 'material-ui/Chip';

export default ({ record, invoke }) => {
  return record.deadline && Date.parse(record.deadline) < Date.now() ? (
    <Chip label="Expired" style={{ backgroundColor: '#F44336', color: 'white' }} />
  ) : null;
};
