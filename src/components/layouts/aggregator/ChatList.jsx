import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import GifBoxOutlinedIcon from '@mui/icons-material/GifBoxOutlined';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';


export default function ChatList(props) {
  const data = props.data
  return (
    <List sx={{ width: '100%', maxWidth: '520px', bgcolor: 'background.paper' }}>
      {data.map((item, index) => (
        <>
        {(item.belong != null)&&(
          <div className="ml-5 chattrending-header w-100 text-left">
            <div className="ml-5 belong-border flex">
              <Avatar className="mr-2" sx={{width:'3rem',height:'3rem'}} alt="Remy Sharp" src={item.belong.avatar} />
              <h6 className="belong-id" >{item.belong.name}</h6>
              <span className="voomio-mta">{item.belong.usermessage}</span>
            </div>
          </div>
        )}
        <ListItem alignItems="flex-start" key={index}>
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src={item.useravatar} />
          </ListItemAvatar>
          <ListItemText
            primary={
              <div className="flex">
                <div className="spec-color-1">{item.username}</div>
                <div className="spec-color-3 ml-2">{item.time}</div>
              </div>
            }
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                <div>
                  <p className="chat-message">{item.usermessage}</p>
                  <p>{(item.specnum != null)&&(<span className="chat-specnum">{item.specnum}</span>)}</p>
                  {(item.imgs != null)&&(<img src={item.imgs} alt={item.username}></img>)}
                </div>
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
        </>
      ))}
      <div className="flex">
        <div className="input-group chat-input w-100 mx-auto flex">
          <input type="text" className="form-control" placeholder="Messages..." aria-label="max" aria-describedby="basic-addon1"/>
          <GifBoxOutlinedIcon sx={{fontSize:'30px', color:'#D9D9D9'}} className="chat-spec-btn left-chat"/>
          <SentimentSatisfiedOutlinedIcon sx={{fontSize:'30px', color:'#D9D9D9'}} className="chat-spec-btn"/>
        </div>
        <IconButton className="chat-send-btn" aria-label="add an alarm">
          <ArrowUpwardIcon sx={{fontSize:'25px', color:'white'}} />
        </IconButton>
      </div>
    </List>

  );
}
