import React from 'react';
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import {withRouter} from "react-router-dom";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "../../assets/styles/styles";

function SearchComponent(props) {
    const {classes} = props
    return (
        <div className={`ml-0 ${classes.search }`}>
            <div className={classes.searchIcon}>
                <SearchIcon />
            </div>
            <InputBase
                placeholder="Search…"
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
            />
        </div>
    );
}

export default withRouter(withStyles(styles)(SearchComponent));

