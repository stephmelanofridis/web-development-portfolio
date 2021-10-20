
import React, { useState } from 'react';
import { Typography, Grid, Card, CardActionArea, CardMedia, CardContent, Grow, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import './Project.css';

const ProjectCard = ({ title, caption, description, image, project, links }) => {

    {/* const [projectDialog, setProjectDialog] = useState(false) */ }

    return (
        <Grid item xs={6}>
            <Grow in timeout={1000}>
                <Card className='custom-card' /*onClick={() => setProjectDialog(project)}*/ >
                    <CardActionArea>
                        <CardMedia className='custom-card-image' image={image} title={title}>
                            <CardContent>
                                <img src={image} alt='Screenshot of project'></img>
                                <Typography className='custom-card-title'>{title}</Typography>
                                <Typography variant='body2' className='custom-class-description'>{description}</Typography>
                            </CardContent>
                        </CardMedia>
                    </CardActionArea>
                </Card>
            </Grow>
            {/*
            <Dialog open={projectDialog} onClose={() => setProjectDialog(false)}>
                <DialogTitle onClose={() => setProjectDialog(false)}>{title}</DialogTitle>
                <img src='' alt='' />
                <DialogContent>{description}</DialogContent>
                <DialogActions>{links?.map((link => (
                    <a href={link} target='_blank'>{link.icon}</a>
                )))}</DialogActions>
            </Dialog>
            */}

        </Grid>
    )
}

export default ProjectCard
