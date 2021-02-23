import React from 'react';
import Avatar from "@material-ui/core/Avatar";

function PathCompanent(props) {
    return (
        <div className="card">
            <div className="card-body">
                <p className=" mb-1 font-weight-bold">
                    {props.name}
                </p>
                <div className={'text-secondary'}>
                    {props.desc}
                </div>
                <div className={'mt-4 text-secondary'}>
                    {props.students} students
                </div>
                <div className={'d-flex mt-3'}>
                    <Avatar className={'av'} alt="Remy Sharp" src="https://material-ui.com//static/images/avatar/1.jpg" />
                    <Avatar className={'av'} alt="Travis Howard" src="https://material-ui.com//static/images/avatar/2.jpg" />
                </div>
            </div>
        </div>
    );
}


export default PathCompanent;
