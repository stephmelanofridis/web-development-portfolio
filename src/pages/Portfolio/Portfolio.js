import React from 'react';
import { Grid } from '@mui/material';
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
                <Grid container spacing={3} className='project-card-container'>
                    {Object.keys(portfolioData.projects).map(key => (
                        <ProjectCard title={portfolioData.projects[key].title} caption={portfolioData.projects[key].caption} description={portfolioData.projects[key].description} image={portfolioData.projects[key].image} links={portfolioData.projects[key].links} />
                    ))}
                </Grid>
            </Grid>

        </Grid>
    )
}

export default Portfolio