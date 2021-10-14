import React from 'react'
import Timeline from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import CodeIcon from '@mui/icons-material/Code';

import '../Timeline/Timeline.css'
import { Typography } from '@mui/material';
import portfolioData from '../../utils/portfolioData';

const CustomTimeline = ({ children }) => {

    return (
        <Timeline className={'timeline'}>
            <TimelineItem className={'timeline-first-item'}>
                <TimelineSeparator>
                    <TimelineDot variant={'outlined'} className={'timeline-dot-header'}>
                        {<CodeIcon />}
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent><Typography variant='h6' className={'timeline-header'}>{portfolioData.bio}</Typography></TimelineContent>
            </TimelineItem>
            {children}
        </Timeline>
    )
}

export const CustomTimelineSeparator = () => (
    <TimelineSeparator className={'separator-padding'}>
        <TimelineDot className={'timeline-dot'} />
        <TimelineConnector />
    </TimelineSeparator>
);
export default CustomTimeline;