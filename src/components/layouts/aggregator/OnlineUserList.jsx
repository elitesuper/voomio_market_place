import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';

export default function CheckboxListSecondary(props) {
  const data = props.users;
  return (
    <>
      <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {data.map((item) => {
          return (
            <ListItem
              key={item.userid}
              disablePadding
            >
              <ListItemButton>
                <ListItemAvatar>
                  <Avatar
                    alt={item.userid}
                    src={item.useravatar}
                  />
                </ListItemAvatar>
                <ListItemText id={item.userid} primary={item.username} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </>
  );
}
