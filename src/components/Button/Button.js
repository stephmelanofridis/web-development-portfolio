import React from 'react';
import { Button } from '@mui/material';
import { Typography } from '@mui/material';
import './Button.css';

const CustomButton = ({ text, endIcon, link }) => {
    return (
        <div>
            <Button className='btn' link={link} endIcon={endIcon}>
                {link ? (
                    <Typography className='timeline-item-text'>
                        <a href={link} target='_blank'>{text}</a>
                    </Typography>) : (
                    <Typography>{text}</Typography>
                )}
            </Button>
        </div>
    )
}

export default CustomButton;