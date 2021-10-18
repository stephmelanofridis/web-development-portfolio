import React from 'react'
import Timeline from '@mui/lab/Timeline'
import '../Timeline/Timeline.css'

const CustomTimeline = ({ children }) => {

    return (
        <Timeline className={'timeline'}>
            {children}
        </Timeline>
    )
}

export default CustomTimeline;
