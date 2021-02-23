import React from 'react';
import {Route, Switch} from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Sidebar from "../Sidebar/Sidebar";
import ApppBar from "../../Elements/AppBar";
import MyCourses from "../../Pages/MyCourses/MyCourses";
import Favorites from "../../Pages/Favorites/Favorites";
function MainLayout(props) {
    return (
        <main>
            <Sidebar web={props.web}/>
            {!props.web &&
            <ApppBar/>
            }
            <div className={'routes'}>
                <Switch>
                    <Route  exact path={'/'}>
                        <Home web={props.web}/>
                    </Route>
                    <Route  exact path={'/courses'}>
                        <MyCourses web={props.web}/>
                    </Route>
                    <Route  exact path={'/favorite'}>
                        <Favorites web={props.web}/>
                    </Route>
                    <Route path="/">
                        <div className='d-flex content animated zoomIn justify-content-center align-items-center'>
                            <div className={'text-danger h2 font-weight-bold'}>Not found</div>
                        </div>
                    </Route>
                </Switch>
            </div>
        </main>
    );
}


export default MainLayout
