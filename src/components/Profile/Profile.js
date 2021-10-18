import { Typography } from '@mui/material';
import CustomTimeline from '../Timeline/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineConnector from '@mui/lab/TimelineConnector';
import portfolioData from '../../utils/portfolioData';
import './Profile.css';



const CustomTimelineItem = ({ text, link, icon }) => (

    <TimelineItem>
        <TimelineSeparator className={'separator-padding'}>
            <TimelineDot className={'timeline-dot'}></TimelineDot>
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
                    <CustomTimelineItem title='name' text={portfolioData.bio} />
                    {/*} Timeline under bio
                    <CustomTimelineItem title='name' text={portfolioData.name} />
                    <CustomTimelineItem title='name' text={portfolioData.title} />
                    <CustomTimelineItem title='name' text={portfolioData.email} />
                    */}
                    {Object.keys(portfolioData.links).map(key => (
                        <CustomTimelineItem icon={portfolioData.links[key].icon} title={key} text={portfolioData.links[key].text} link={portfolioData.links[key].link} />
                    ))}
                </CustomTimeline>
            </div>

        </div>
    )
}

export default Profile