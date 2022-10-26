import React, {useState} from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import ReportProblemOutlinedIcon from '@mui/icons-material/ReportProblemOutlined';
import Button from '@mui/material/Button';
import ChatModal from '../ChatModal';


function Thread(props){

  const threads = props.threads;
  const [modalShow, setModalShow] = useState(false);

  return(<>
      <List className="my-3" sx={{ width: '100%', maxWidth: '520px', bgcolor: 'background.paper' }}>
      {threads.map((data, index)=>(
        <ListItem className="mb-3" key={index} alignItems="flex-start" disablePadding>
          <div>
          <Typography className="mb-5 spec-color-1" variant="h4" gutterBottom>
            <ArrowDropUpIcon sx={{fontSize:'3rem'}}/>
            <h4 className="text-center">{data.messages.length}</h4>
            <ArrowDropDownIcon sx={{fontSize:'3rem'}}/>
          </Typography>
          </div>
          <div>
          <Typography className="mb-2 spec-color-1" variant="h5" gutterBottom>
            {data.username} <span className="spec-color-3">{data.messages[0].time}</span>
          </Typography>
          <Typography variant="h4" gutterBottom>
            {data.messages[0].message}
          </Typography>
          <Typography className="flex" variant="h6" gutterBottom>
            <div className="flex spec-color-1"><ForumOutlinedIcon className="voomio-mta"/><span className="voomio-mta">{data.comments}</span></div>
            <div className="ml-2 flex spec-color-3"><ReportProblemOutlinedIcon className="voomio-mta"/><span className="voomio-mta">Report</span></div>
          </Typography>
          <Button onClick={() => setModalShow(true)} className="buttonpattern-1" variant="contained">Comment</Button>
          </div>
        </ListItem>
      ))}
      </List>
      <ChatModal show={modalShow} onHide={() => setModalShow(false)}/>
    </>)
}
export default Thread;
