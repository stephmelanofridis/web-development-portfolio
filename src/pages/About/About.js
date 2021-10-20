import React from 'react';
import { Typography, Grid, Paper } from '@mui/material';
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
                    {/* <Typography className='section-title-text' variant='h2'>Skills<span></span></Typography> */}

                    {/* {portfolioData.skills.map(skill => (
                        <Grid item xs={12} md={3} sm={6}>
                            <Paper elevation={3} className='skill'>
                                <div className='skill-container'>
                                    <Typography className='skill-title'>{skill.title}</Typography>
                                    {skill.description.map(element => (
                                        <Typography variant='body2' className='skill-description'>
                                            <TimelineDot variant={'outlined'} className='timeline-dot' />
                                            {element}
                                        </Typography>
                                    ))}
                                </div>
                            </Paper>
                        </Grid>
                    ))}
                                    */}
                </Grid>
            </Grid>

        </>
    )
}

export default About