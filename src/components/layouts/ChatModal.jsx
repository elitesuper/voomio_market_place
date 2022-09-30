import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ChatList from './aggregator/ChatList';
import ChatHeader from './aggregator/ChatHeader';
import {chatdata, thread} from '../../assets/fake-data/data-chattrending';

export default function ChatModal(props) {

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (props.show) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [props]);

  return (
    <div>
      <Dialog
        className="chat-modal"
        open={props.show}
        onClose={props.onHide}
        scroll={'body'}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">
          <ChatHeader thread={thread}/>
        </DialogTitle>
        <DialogContent dividers={false}>
          <DialogContentText
            className="d-flex justify-content-center"
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            <ChatList data={chatdata}/>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.onHide}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
