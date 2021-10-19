import React from 'react';
import { Typography, Grid } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import CustomTimeline, { CustomTimelineSeparator, CustomTimelineItem } from '../../components/Timeline/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineContent from '@mui/lab/TimelineContent';
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
                <Grid container className='resume-timeline'>
                    {/* Working History */}
                    <Grid item sm={12} md={6}>
                        <CustomTimeline title='Working History' icon={<WorkIcon />}>
                            {portfolioData.workingHistory.map((workingHistory) => (
                                <TimelineItem>
                                    <CustomTimelineSeparator className='separator' />
                                    <TimelineContent className='timeline-content'>
                                        <Typography className='timeline-title'>{workingHistory.title}</Typography>
                                        <Typography className='timeline-date'>{workingHistory.date}</Typography>
                                        <Typography className='timeline-description'>{workingHistory.description}</Typography>
                                    </TimelineContent>
                                </TimelineItem>
                            ))}
                        </CustomTimeline>
                    </Grid>
                    {/* Education */}
                    <Grid item sm={12} md={6}>
                        <CustomTimeline title='Education' icon={<SchoolIcon />}>
                            {portfolioData.education.map((education) => (
                                <TimelineItem>
                                    <CustomTimelineSeparator className='separator' />
                                    <TimelineContent className='timeline-content'>
                                        <Typography className='timeline-title'>{education.title}</Typography>
                                        <Typography className='timeline-date'>{education.date}</Typography>
                                        <Typography className='timeline-description'>{education.description}</Typography>
                                    </TimelineContent>
                                </TimelineItem>
                            ))}
                        </CustomTimeline>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Resume