import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import IconButton from "@material-ui/core/IconButton";
import NotificationsIcon from "@material-ui/icons/Notifications";

const useStyles = makeStyles((theme) => ({
    shape: {
        backgroundColor: '#fff',
        width: 40,
        height: 40,
    },
    shapeCircle: {
        borderRadius: '50%',
    },
}));

export default function NotificationComponent() {
    const classes = useStyles();
    const circle = <div className={clsx(classes.shape, classes.shapeCircle)} >  <NotificationsIcon /></div>;
    return (
       <div className="notification">
           <div className={classes.root}>
               <IconButton color="inerhit" overlap="circle">
                   <Badge badgeContent={11} color="secondary">
                       {circle}
                   </Badge>
               </IconButton>
           </div>
       </div>
    );
}

