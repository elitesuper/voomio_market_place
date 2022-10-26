import React, {useState} from 'react';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import Typography from '@mui/material/Typography';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';


function Widget2(){
    
    const [open, setOpen] = useState(true);

    const handleClick = () => () => {
        setOpen(!open)
    };

    return(<>
    <div className='w-100 mg-t-20'>
        <div className='chart-header flex mg-bt-10' onClick={handleClick()}>
            <ArticleOutlinedIcon className="detail-meta-icon" style={{fontSize:'20px'}}></ArticleOutlinedIcon>
            <h5>Details</h5>
            {open ? <ExpandLess className="detail-meta-icon" style={{fontSize:'20px'}}/> : <ExpandMore className="detail-meta-icon" style={{fontSize:'20px'}}/>}
        </div>
        <Collapse className="w-100" in={open} timeout="auto" unmountOnExit>
        <div className='chart-panel row detail-about-card'>
            <div className='flex w-100  about-verified voomio-just-between'>
                <Typography className="text-center about-detail-name" variant="h5" component="div" gutterBottom>
                    Contract Address:
                </Typography>
                <Typography className="text-center spec-color-1 about-detail-name" variant="h5" component="div" gutterBottom>
                    0x8a90...992e
                </Typography>
            </div>
            <div className='flex w-100 about-verified voomio-just-between'>
                <Typography className="text-center about-detail-name" variant="h5" component="div" gutterBottom>
                    Token ID:
                </Typography>
                <Typography className="text-center spec-color-1 about-detail-name" variant="h5" component="div" gutterBottom>
                    7731
                </Typography>
            </div>
            <div className='flex w-100 about-verified voomio-just-between'>
                <Typography className="text-center about-detail-name" variant="h5" component="div" gutterBottom>
                    Token Standard:
                </Typography>
                <Typography className="text-center about-detail-name" variant="h5" component="div" gutterBottom>
                    ERC-721
                </Typography>
            </div>
            <div className='flex w-100 about-verified voomio-just-between'>
                <Typography className="text-center about-detail-name" variant="h5" component="div" gutterBottom>
                    BlockChain:
                </Typography>
                <Typography className="text-center about-detail-name" variant="h5" component="div" gutterBottom>
                    Etherium
                </Typography>
            </div>
            <div className='flex w-100 about-verified voomio-just-between'>
                <Typography className="text-center about-detail-name" variant="h5" component="div" gutterBottom>
                    Creator Earnings:
                </Typography>
                <Typography className="text-center about-detail-name" variant="h5" component="div" gutterBottom>
                    5%
                </Typography>
            </div>

        </div>
        </Collapse>
    </div>
    </>)
}

export default Widget2