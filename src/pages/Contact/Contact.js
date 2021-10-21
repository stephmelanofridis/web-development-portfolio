import React from 'react';
import { Typography, Grid, TextField } from '@mui/material';
import CustomButton from '../../components/Button/Button';
import SendIcon from '@mui/icons-material/Send';
import portfolioData from '../../utils/portfolioData';
import './Contact.css';

const Contact = () => {
    return (
        <Grid container className='section'>
            <Grid item xs={12} lg={7}>
                <Grid container className='container'>
                    <Grid item className='section-title'>
                        <span></span>
                        <h2 className='section-title-text'>Contact</h2>
                    </Grid>

                    <Grid item xs={12}>
                        <Grid container className='contact-container' spacing={2}>
                            <Grid item >
                                <Typography>
                                    <p className='contact-text'>If you would like to get in touch send me a message! </p>
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={5}>
                                <TextField fullWidth name='name' label='Name' />
                            </Grid>
                            <Grid item xs={12} sm={7}>
                                <TextField fullWidth name='email' label='Email' />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField fullWidth name='message' label='Message' multiline rows={3} />
                            </Grid>
                            <Grid item xs={6}>
                                <CustomButton text='Submit' endIcon={<SendIcon />} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>


            <Grid item xs={12} lg={5}>
                <Grid container className='container'>
                    <Grid item className='section-title'>
                        <span></span>
                        <h2 className='section-title-text'>My Details</h2>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container>
                            <Grid item className='top-item'>
                                <Typography xs={12} className='contact-info-item'>
                                    <span>Location:</span> {portfolioData.location}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography xs={12} className='contact-info-item'>
                                    <span>Ph:</span> {portfolioData.phone}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography xs={12} className='contact-info-item'>
                                    <span>Email:</span> {portfolioData.email}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Contact