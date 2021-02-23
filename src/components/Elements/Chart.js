import React from 'react';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import ChartComponent from "./ChartComponent";
function Chart(props) {
    return (
        <div className={'animated mb-4 pb-4 slideInUp'}>
            <Typography variant="h5" className={'font-weight-bold mt-3 mb-4'} component="h2">
                Your learning progress
            </Typography>
            <Grid container spacing={3}>
               <Grid item xs={12}>
                    <div>
                        <ChartComponent/>
                    </div>
               </Grid>
            </Grid>
        </div>
    );
}



export default Chart;
