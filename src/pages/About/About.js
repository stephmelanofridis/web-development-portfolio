import React from 'react';
import { Typography, Grid } from '@mui/material';
import portfolioData from '../../utils/portfolioData';
import './About.css';

const About = () => {
    return (
        <>
            {/* About me section */}
            <Grid container className='section'>
                <Grid item className='section-title'>
                    <span></span>
                    <h2 className='section-title-text' >About Me</h2>
                </Grid>
                <Grid item xs={12}>
                    <Typography className='section-text about-me-text'>{portfolioData.about}</Typography>
                </Grid>
            </Grid>

            {/* Skills section */}
            <Grid container className='section'>
                <Grid item className='section-title'>
                    <span></span>
                    <Typography className='section-title-text' variant='h2'>Skills</Typography>
                </Grid>
            </Grid>

        </>
    )
}

export default About