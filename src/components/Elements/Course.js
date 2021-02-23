import React from 'react';
import Images from "../../assets/img/Images/Images";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
function Course(props) {
    return (
        <div className="cardList card animated slideInRight">
            <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex">
                        <div className="avatar p-2 bg-primary mr-3 d-flex  align-items-center">
                            <img className={'m-1'} src={Images.icon} alt=""/>
                        </div>
                        <div className="text">
                            <p className="mb-0 font-weight-bold">
                                {props.desc}
                            </p>
                            <span className="type text-secondary">
                            {props.name}
                        </span>
                        </div>
                    </div>
                    <div className="icon"><ChevronRightIcon/></div>
                </div>
            </div>
        </div>
    );
}

export default Course;
