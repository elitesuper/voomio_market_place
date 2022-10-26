import React, {useState} from 'react';
import Button from '@mui/material/Button';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import Collapse from '@mui/material/Collapse';
import ChatList from './ChatList';
import OnlineUserList from './OnlineUserList';
import Thread from './Thread';
import {chatdata, onlineusers, threads} from '../../../assets/fake-data/data-chattrending';

function ChatTrending(){
  const [chatvisible, chatVisibleset] = useState(true);
  const [trendvisible, trendVisibleset] = useState(false);

  const chatviewclick = () => () => {
      chatVisibleset(!chatvisible)
  };

  const trendviewclick = () => () => {
      trendVisibleset(!trendvisible)
  };
  return(
    <div className="mt-5 mb-5">
      <div className="aggregator-container mx-auto">
        <div className="chattrending-body w-100">
          <div className="row">
            <div className="col-sm-12 col-md-9">
              <div className="col-md-12 text-center">
                  <Button className="chattending-accordion" onClick={chatviewclick()} variant="outlined" endIcon={(chatvisible)?(<RemoveOutlinedIcon/>):(<AddOutlinedIcon/>)}>Collection Chat</Button>
              </div>
              <div className="col-md-12 text-center flex voomio-just-center">
                  <Collapse className="chat-detail-view" in={chatvisible} timeout="auto" unmountOnExit>
                      <ChatList data={chatdata}/>
                  </Collapse>
              </div>
              <div className="col-md-12 text-center mt-3">
                  <Button className="chattending-accordion" onClick={trendviewclick()}  variant="outlined" endIcon={(trendvisible)?(<RemoveOutlinedIcon/>):(<AddOutlinedIcon/>)}>Collection Threads</Button>
              </div>
              <div className="col-md-12 text-center flex voomio-just-center">
                  <Collapse className="chat-detail-view" in={trendvisible} timeout="auto" unmountOnExit>
                    <Thread threads={threads}/>
                  </Collapse>
              </div>
            </div>
            <div className="col-sm-12 col-md-3">
                  <OnlineUserList users={onlineusers}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatTrending
