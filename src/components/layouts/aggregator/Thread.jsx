import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';

function Thread(props){

  const threads = props.threads

  return(<>
      <List sx={{ width: '100%', maxWidth: '520px', bgcolor: 'background.paper' }}>
      {threads.map((data, index)=>(
        <ListItem key={index} alignItems="flex-start" disablePadding>
          <div>
          <Typography className="mb-5" variant="h4" gutterBottom>
            {data.messages.length}
          </Typography>
          </div>
          <div>
          <Typography className="mb-5" variant="h5" gutterBottom>
            {data.username} <span></span>
          </Typography>
          {data.messages[0].message}
          {data.messages[0].time}
          </div>
        </ListItem>
      ))}
      </List>
    </>)
}
export default Thread;
