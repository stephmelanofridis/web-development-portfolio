
import React from 'react';
import { Typography, Grid, Card, CardActionArea, CardMedia, CardContent, Grow } from '@mui/material';
import './Project.css';

const ProjectCard = ({ title, caption, description, image, links }) => {
    return (
        <Grid item xs={6}>
            <Grow in timeout={1000}>
                <Card className='custom-card'>
                    <CardActionArea>
                        <CardMedia className='custom-card-image' image={image} title={title} links={links} />
                        <CardContent>
                            <Typography className='custom-card-title'>{title}</Typography>
                            <Typography variant='body2' className='custom-card-description'>{description}</Typography>
                            {links.map(link => (
                                <a href={link}>{link.text}{link.icon}</a>
                            ))}
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grow>
        </Grid>
    )
}

export default ProjectCard
