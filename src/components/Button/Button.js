import React from 'react';
import { Button, Typography } from '@mui/material';
import Resume from '../../assets/pdf/CV_Steph_Melanofridis.pdf';
import './Button.css';

const CustomButton = ({ text, endIcon, link }) => {
    return (
        <div>
            <Button className='btn' link={link} endIcon={endIcon}>
                {link ? (
                    <Typography className='timeline-item-text'>
                        <a href={link} target='_blank'>{text}</a>
                    </Typography>) : (
                    <Typography><a href={Resume} download className='download'>{text}</a></Typography>
                )}
            </Button>
        </div>
    )
}

export default CustomButton;