import React from 'react';
import { Typography, Grid } from '@mui/material';
import portfolioData from '../../utils/portfolioData';
import './Resume.css';
const Resume = () => {
    return (
        <Grid container className='section'>
            <Grid item className='section-title'>
                <span></span>
                <h2 className='section-title-text'>Resume</h2>
            </Grid>
            <Grid item xs={12}>
                <Grid container>
                    {/* Education */}
                    <Grid item sm={12} md={6}>

                    </Grid>
                    {/* Working History */}
                    <Grid item sm={12} md={6}></Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Resume