import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';
import VerifiedIcon from '@mui/icons-material/Verified';

export default function CheckboxListSecondary(props) {
  const data = props.users;
  return (
    <>
      <List dense sx={{ width: '80%', margin:'auto', maxWidth: 360, bgcolor: 'background.paper' }}>
        <Typography className="mb-5" variant="h4" gutterBottom>
          Users Online
        </Typography>
        {data.map((item) => {
          return (
            <ListItem
              key={item.userid}
              disablePadding
            >
              <ListItemButton className="pl-0">
                <ListItemAvatar>
                  <Avatar
                    alt={item.userid}
                    src={item.useravatar}
                  />
                </ListItemAvatar>
                <ListItemText className="spec-color-1" id={item.userid}>
                <div className="flex">
                <span className="mr-2">{item.username}</span>
                {item.verified&&(<VerifiedIcon className="voomio-mta"/>)}
                </div>
                </ListItemText>
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </>
  );
}
