import React from 'react';
import { Typography, Grid, Card, CardActionArea, CardMedia, CardContent, Grow } from '@mui/material';
import ProjectCard from '../../components/Project/Project';
import portfolioData from '../../utils/portfolioData';
import './Portfolio.css';

const Portfolio = () => {
    return (
        <Grid container className='section container'>

            <Grid item className='section-title'>
                <span></span>
                <h2 className='section-title-text'>Portfolio</h2>
            </Grid>

            <Grid item xs={12}>
                <Grid container spacing={2}>
                    {Object.keys(portfolioData.projects).map(key => (
                        <ProjectCard title={portfolioData.projects[key].title} caption={portfolioData.projects[key].caption} description={portfolioData.projects[key].description} image={portfolioData.projects[key].image} links={portfolioData.projects[key].links} />
                    ))}
                    {/*
                        <Grid item xs={6}>
                            <Grow in timeout={1000}>
                                <Card>
                                    <CardActionArea>
                                        <CardMedia>
                                            <CardContent>
                                                <Typography>{projects.title}</Typography>
                                                <Typography>{projects.description}</Typography>
                                            </CardContent>
                                        </CardMedia>
                                    </CardActionArea>
                                </Card>
                            </Grow>
                        </Grid>
                        */}
                </Grid>
            </Grid>

        </Grid>
    )
}

export default Portfolio