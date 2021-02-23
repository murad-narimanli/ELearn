import React from 'react';
import Typography from '@material-ui/core/Typography';
import {connect} from "react-redux";

function Heading(props) {
    return (
        <div>
            <Typography variant="h4" component="h4">
              Hi {props.firstName}
            </Typography>
            <div className="headingText font-weight-bold">
                What will you learn today?
            </div>
        </div>
    );
}
const mapStateToProps = ({user}) => {
    return {
        firstName: user.data.firstName,
    };
};

export default connect(mapStateToProps)(Heading);
