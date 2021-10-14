import React from 'react';
import { Button } from '@mui/material';
import './Button.css';

const CustomButton = ({ text, endIcon }) => {
    return (
        <Button className='btn' endIcon={endIcon}>
            {text}
        </Button>
    )
}

export default CustomButton;