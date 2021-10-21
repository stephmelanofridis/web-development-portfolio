import { Typography } from '@mui/material';
import portfolioData from '../../utils/portfolioData';
import CustomButton from '../Button/Button';
import './Profile.css';

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
                <div className='divider'></div>
                <div className='center'>
                    {Object.keys(portfolioData.links).map(key => (
                        <CustomButton endIcon={portfolioData.links[key].icon} text={portfolioData.links[key].text} link={portfolioData.links[key].link} CV={portfolioData.DownloadCV[key]} className='btn' />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Profile