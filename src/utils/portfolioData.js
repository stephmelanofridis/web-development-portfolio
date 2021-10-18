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

    about: 'Passion for coding and in particular CSS, has led me to a career change into Front End Web Development. I am currently completing Certificate IV in Web-Based Technologies from TAFE NSW and a Certificate in Full Stack Development from the University of Sydney. \n \n I am developing skills in multiple programming languages, web-design principles, web API’s, business requirements, project management and collaboration with teams on real projects. My previous experience in Property Management brings excellent communication with clients, organisational skills, problem solving, attention to detail and ability to manage a fast-paced work environment efficiently.'
};