import React from 'react';
import { Button, Typography } from '@mui/material';
import './Button.css';

const CustomButton = ({ text, endIcon, link, CV }) => {
    return (
        <div>
            <Button className='btn' link={link} endIcon={endIcon} CV={CV}>
                {link ? (
                    <Typography className='timeline-item-text'>
                        <a href={link} target='_blank'>{text}</a>
                    </Typography>) : (
                    <Typography><a href={CV}>{text}</a></Typography>
                )}
            </Button>
        </div>
    )
}

export default CustomButton;