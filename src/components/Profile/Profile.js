import { Typography } from '@mui/material';
// eslint-disable-next-line
import CustomTimeline, { CustomTimelineSeparator } from '../Timeline/Timeline';
// eslint-disable-next-line
import TimelineItem from '@mui/lab/TimelineItem';
// eslint-disable-next-line
import TimelineContent from '@mui/lab/TimelineContent';
import portfolioData from '../../utils/portfolioData';
import './Profile.css';

{/*const CustomTimelineItem = ({ title, text, link }) => (
    <TimelineItem>
        <CustomTimelineSeparator />
        <TimelineContent>
            {link ? (
                <Typography>
                    <span>{title}:</span>
                    <a href={link} target='_blank'>{text}</a>
                </Typography>) : (
                <Typography><span>{title}:</span>{text}</Typography>
            )}
        </TimelineContent>
    </TimelineItem> 
)*/}

const Profile = () => {
    return (
        <div className='profile container-shadow'>

            <div className='profile-name'>
                <Typography className='name'>{portfolioData.name}</Typography>
                <Typography className='title'>{portfolioData.title}</Typography>
            </div>

            <figure className='profile-image'>
                <img src={portfolioData.profileImage} alt='Myself outside in nature' />
            </figure>

            <div className='profile-info'>
                <CustomTimeline>

                </CustomTimeline>

                <button>Button</button>
            </div>
        </div>
    )
}

export default Profile