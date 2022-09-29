import React, {useState} from 'react';
import Button from '@mui/material/Button';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';

function ChatTrending(){
  const [chatvisible, chatVisibleset] = useState(true);
  const [trendvisible, trendVisibleset] = useState(false);

  const chatviewclick = () => () => {
      chatVisibleset(!chatvisible)
  };

  const handleClick = () => () => {
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
            <div className="col-sm-12 col-md-8">
              <div className="col-md-12 text-center">
                  <Button className="chattending-accordion" onClick={chatviewclick()} variant="outlined" endIcon={(chatvisible)?(<RemoveOutlinedIcon/>):(<AddOutlinedIcon/>)}>Collection Chat</Button>
              </div>
              <div className="col-md-12 text-center mt-3">
                  <Button className="chattending-accordion" onClick={chatviewclick()}  variant="outlined" endIcon={(trendvisible)?(<RemoveOutlinedIcon/>):(<AddOutlinedIcon/>)}>Collection Threads</Button>
              </div>
            </div>
            <div className="col-sm-12 col-md-4">
              fffffffffffffffffffffffffffffdddddddddddd
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatTrending
