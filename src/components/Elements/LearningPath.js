import React from 'react';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import PathCompanent from "./PathCompanent";
function LearningPath(props) {
    const path = [
        {name:'Sketch from A to Z', desc:'12 hours of video tutorials', students:'324',},
        {name:'Become a Manager', desc:'24 hours of video tutorials', students:'123',},
        {name:'Intro to React', desc:'8 hours of video tutorials', students:'212',},
        {name:'Intro to React', desc:'8 hours of video tutorials', students:'212',},
        {name:'Intro to React', desc:'8 hours of video tutorials', students:'212',},
        {name:'Intro to React', desc:'8 hours of video tutorials', students:'212',},
    ]
    return (
        <div className={'animated fadeInUp'}>
            <Typography variant="h5" className={'font-weight-bold mt-3 mb-4'} component="h2">
                Your learning path
            </Typography>
            <Grid container spacing={3}>
                {path.map((p, i)=>(
                    <Grid key={i} item md={4} xs={12}>
                        <PathCompanent
                            name={p.name}
                            desc={p.desc}
                            students={p.students}
                        />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}


export default LearningPath;
