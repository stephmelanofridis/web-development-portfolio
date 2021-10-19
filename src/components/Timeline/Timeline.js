import React from 'react'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Typography } from '@mui/material';
import '../Timeline/Timeline.css'

const CustomTimeline = ({ title, children, icon }) => {
    return (
        <Timeline className={'timeline'}>

            <TimelineItem className={'timeline-first-item'}>
                <TimelineSeparator>
                    <TimelineDot className={'timeline-dot-header'}>{icon}</TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent><Typography variant='h6' className={'timeline-header'}>{title}</Typography></TimelineContent>
            </TimelineItem>

            {children}

        </Timeline>
    )
}

export const CustomTimelineSeparator = () => (
    <TimelineSeparator className={'separator-padding'}>
        <TimelineDot variant='outlined' className={'timeline-dot'} />
        <TimelineConnector />
    </TimelineSeparator>
)

export const CustomTimelineItem = ({ text, link, icon }) => (

    <TimelineItem>
        <TimelineSeparator className={'separator-padding'}>
            <TimelineDot className={'timeline-dot'}>{icon}</TimelineDot>
            <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className='timeline-content'>
            {link ? (
                <Typography className='timeline-item-text'>
                    <a href={link} target='_blank'>{text}</a>
                </Typography>) : (
                <Typography>{text}</Typography>
            )}
        </TimelineContent>
    </TimelineItem>
)

export default CustomTimeline;
