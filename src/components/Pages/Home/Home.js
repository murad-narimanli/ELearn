import React from 'react';
import Heading from "../../Elements/Heading";
import SliderComponent from "../../Elements/SliderComponent";
import LearningPath from "../../Elements/LearningPath";
import Grid from "@material-ui/core/Grid";
import SearchComponent from "../../Elements/SearchComponent";
import NotificationComponent from "../../Elements/NotificationComponent";
import Chart from "../../Elements/Chart";
import CourseList from "../../Elements/CourseList";

function Home(props) {
    const {web} = props
    return (
        <div className={'animated fadeIn'}>
            <Grid container>
                <Grid  item lg={6} xs={12}>
                    <div className="content">
                        <Heading/>
                        <SliderComponent/>
                        <LearningPath/>
                    </div>
                </Grid>
                <Grid item  lg={6} xs={12}>
                    <div className="content animated fadeInRight blue">
                        {web &&
                        <div className="d-flex animated align-items-center zoomIn w-100 justify-content-between">
                            <SearchComponent/>
                            <NotificationComponent/>
                        </div>
                        }
                        <CourseList/>
                        <Chart/>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default Home;
