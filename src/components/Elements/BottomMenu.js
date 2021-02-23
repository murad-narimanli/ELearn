import React from 'react';
import { logOut} from "../../redux/actions";
import {connect} from "react-redux";
import history from "../../const/history";
import Avatar from '@material-ui/core/Avatar';
import styles from "../../assets/styles/styles";
import {withRouter} from "react-router-dom";
import withStyles from "@material-ui/core/styles/withStyles";
import ImportExportIcon from '@material-ui/icons/ImportExport';
import Button from '@material-ui/core/Button';
import {Popover , OverlayTrigger} from "react-bootstrap";

function BottomMenu(props) {
    const {classes} = props
    const logOut = () => {
        localStorage.removeItem("access_token");
        props.logOut();
        history.push("/");
    };

    const popover = (
        <Popover id="popover-basic">
            <Popover.Content>
                <Button  size="large" onClick={() => {
                    logOut()
                }}>Log Out
                </Button>
            </Popover.Content>
        </Popover>
    );

    return (
        <OverlayTrigger trigger="click" placement="right" overlay={popover}>
            <Button  size="small" className={classes.bottomMenu}>
                <Avatar className={classes.large} alt="Remy Sharp" src={props.avatar}  />
                <div className='mx-2 userdata'>
                    <p className='mb-0 text-dark font-weight-bold'>{props.firstName} {props.lastName}</p>
                    <span className={'text-secondary'}>{props.email}</span>
                </div>
                <ImportExportIcon/>
            </Button>
        </OverlayTrigger>
    );
}


const mapStateToProps = ({user}) => {
    return {
        firstName: user.data.firstName,
        lastName: user.data.lastName,
        avatar: user.data.avatar,
        email: user.data.email
    };
};

const  exp =  withRouter(withStyles(styles)(BottomMenu));

export default connect(mapStateToProps, { logOut })(exp);

