import React, {useState} from 'react';
import Button from '@mui/material/Button';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import Collapse from '@mui/material/Collapse';
import ChatList from './ChatList';
import OnlineUserList from './OnlineUserList';
import {chatdata, onlineusers} from '../../../assets/fake-data/data-chattrending';

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
    <div className="mt-3 mb-3">
      <div className="themesflat-container ">
        <div className="ml-5 chattrending-header w-100">
            <h4 className="ml-5 belong-border">Hey guys!</h4>
        </div>
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
              <div className="col-md-12 text-center">
                  <Collapse className="w-100" in={trendvisible} timeout="auto" unmountOnExit>

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
