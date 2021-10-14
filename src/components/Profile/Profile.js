import { Typography } from '@mui/material';
import CustomTimeline, { CustomTimelineSeparator } from '../Timeline/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineContent from '@mui/lab/TimelineContent';
import portfolioData from '../../utils/portfolioData';
import CustomButton from '../Button/Button';
import DownloadIcon from '@mui/icons-material/Download';
import './Profile.css';
import Resume from '../../pages/Resume/Resume';


const CustomTimelineItem = ({ title, text, link }) => (
    <TimelineItem>
        <CustomTimelineSeparator />
        <TimelineContent className='timeline-content'>
            {link ? (
                <Typography className='timeline-item-text'>
                    <span>{title}:</span>
                    <a href={link} target='_blank'>{text}</a>
                </Typography>) : (
                <Typography><span>{title}:</span>{text}</Typography>
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
                    {/*} Timeline under bio
                    <CustomTimelineItem title='name' text={portfolioData.name} />
                    <CustomTimelineItem title='name' text={portfolioData.title} />
                    <CustomTimelineItem title='name' text={portfolioData.email} />
                    */}
                    {Object.keys(portfolioData.socials).map(key => (
                        <CustomTimelineItem title={key} text={portfolioData.socials[key].text} link={portfolioData.socials[key].link} />
                    ))}
                </CustomTimeline>
                <div className='btn-container'>
                    <CustomButton className='btn' text={<span className='btn-text'>Download CV</span>} endIcon={<span className='btn-icon-container'><DownloadIcon /></span>} />
                </div>
            </div>

        </div>
    )
}

export default Profile