import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

export default {
    name: 'Steph Melanofridis',
    title: 'Web Developer',
    profileImage: require('../assets/images/profile-picture.jpg').default,
    bio: 'Motivated web developer currently studying and looking for full time work.',
    birthday: '30th October 1993',
    email: 'stephmelanofridis@bigpond.com',
    address: '76 Tindale Street, MUSWELLBROOK, NSW 2333',
    phone: '0432 954 263',
    links: {
        LinkedIn: {
            link: 'https://www.linkedin.com/in/steph-melanofridis-0204181a3/',
            text: 'Linked In',
            icon: <LinkedInIcon />,
        },
        GitHub: {
            link: 'https://github.com/stephmelanofridis',
            text: 'GitHub',
            icon: <GitHubIcon />,
        },
        DownloadCV: {
            link: '',
            text: 'Download CV',
            icon: <FileDownloadIcon />,
        },
    },
};