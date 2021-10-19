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

    about: 'Passion for coding and in particular CSS, has led me to a career change into Front End Web Development. I am currently completing Certificate IV in Web-Based Technologies from TAFE NSW and a Certificate in Full Stack Development from the University of Sydney. \n \n I am developing skills in multiple programming languages, web-design principles, web API’s, business requirements, project management and collaboration with teams on real projects. My previous experience in Property Management brings excellent communication with clients, organisational skills, problem solving, attention to detail and ability to manage a fast-paced work environment efficiently.',
    workingHistory: [
        {
            title: "O'Meara Property Holiday Booking Consultant - Nelson Bay",
            date: 'Sept 2014 - Sept 2019',
            description: 'Responsibilities included taking enquiries from holiday guests and property owners, taking holiday bookings and payments, organising property maintenance, conducting property inspections, complaints handling, training new staff, advertising and social media, editing company website and 24-hour emergency phones.',
        },
        {
            title: "Vues on the Bay - D'Albora Marina Nelson Bay",
            date: 'Oct 2012 - Sept 2014',
            description: 'Responsibilities included food and alcohol service, cleaning, opening shop unsupervised, maintaining stock and handling money.',
        },
        {
            title: 'Donut King – Salamander Bay Shopping Centre',
            date: 'Sept 2009 – Oct 2013',
            description: 'Responsibilities included serving customers, preparing food, upselling product, cleaning, handling money, training new staff and closing shop unsupervised.',
        },
        {
            title: 'The Grapevine – Salamander Bay Shopping Centre',
            date: 'Oct 2007 – Sept 2009',
            description: 'Responsibilities included Handling money, serving customers and packing fruit.',
        },
    ],
    education: [
        {
            title: 'TAFE NSW',
            date: 'Nov 2019 - Present',
            description: 'Certificate IV in Web-Based Technologies',
        },
        {
            title: 'University of Sydney / Trilogy Education Services',
            date: 'May 2021 - Nov 2021',
            description: 'Certificate in Full Stack Development',
        },
        {
            title: 'Tomaree High School',
            date: '2007 - 2011',
            description: 'Higher School Certificate - Year 12 Subjects: Advanced English, Legal Studies, Mathematics, Drama, Modern History',
        },
    ],
};