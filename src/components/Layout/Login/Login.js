import React  , {useState, useEffect}  from 'react';
import { connect } from "react-redux";
import {logInUser} from "../../../redux/actions";
import alertify from 'alertifyjs'
import {withRouter } from 'react-router-dom'
import styles from "../../../assets/styles/styles";
import withStyles from "@material-ui/core/styles/withStyles";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';

function Login(props) {
  useEffect(() => {
    if (props.message.trim().length !== 0) {
      alertify.error(props.message)
    }
  }, [props.message, props.notify]);

  const {classes} = props
  const [passs , setPass] = useState('cityslicka');
  const [mails,  setMail ] = useState('janet.weaver@reqres.in')

  const logUserIn = async (e) => {
    e.preventDefault();
    await props.logInUser(mails, passs);
  };

  return (
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form className={classes.form} onSubmit={logUserIn} >
              <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  value={mails}
                  onChange={e => setMail(e.target.value)}
              />
              <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={passs} onChange={e=> setPass(e.target.value)}
              />
              <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
              >
                Sign In
              </Button>
            </form>
          </div>
        </Grid>
      </Grid>
  );
}

const mapStateToProps = ({ user, loader, notification }) => {
  return {
    isLoggedIn: user.isLoggedIn,
    message: user.message,
    isLoading: loader,
    notify:user.notify
  };
};

const  exp =  withRouter(withStyles(styles)(Login));

export default connect(mapStateToProps, { logInUser })(exp);
