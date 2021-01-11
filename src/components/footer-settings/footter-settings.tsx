import * as React from 'react';
import List from '@material-ui/core/List';
import { Box } from '@material-ui/core';

const SettingsFooter = () => {
  return (
      <div style={{ width: '100%' }}>
        <Box display="flex" flexDirection="column" p={1} m={1} bgcolor="inherit">
          <List>Item</List>
          <List>Item</List>
          <List>Item</List>
        </Box>
      </div>
  );
};
export default SettingsFooter;
