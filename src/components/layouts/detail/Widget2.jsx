import React from 'react';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import Typography from '@mui/material/Typography';


function Widget2(){
    
    return(<>
    <div className='w-100 mg-t-20'>
        <div className='chart-header flex mg-bt-10'>
            <ArticleOutlinedIcon className="detail-meta-icon" style={{fontSize:'20px'}}></ArticleOutlinedIcon>
            <h5>Details</h5>
        </div>
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
    </div>
    </>)
}

export default Widget2