import React from "react";
import Loader from "./Elements/Loader";
import { connect } from "react-redux";
import {MuiThemeProvider , createMuiTheme} from '@material-ui/core/styles'
import {CssBaseline } from '@material-ui/core';
import { getUserData } from "./../redux/actions";
import Login from '../components/Layout/Login/Login'
import MainLayout from "./Layout/MainLayout/MainLayout";
const theme =  createMuiTheme()

class App extends React.Component {
    state = {
        web: true,
    };

    componentDidMount() {
        this.props.getUserData();
        window.addEventListener("resize", () => {
            this.setState({
                web: window.innerWidth > 1200,
            });
        });
        if(window.innerWidth > 1200){
            this.setState({
                web: true,
            });
        }
        else {
            this.setState({
                web: false,
            });
        }
    }

    render() {
        return (
            <>
                {this.props.isLoading ? <Loader/> : null}
                <MuiThemeProvider theme={theme}>
                    <CssBaseline/>
                    {this.props.isLoggedIn ?
                        <MainLayout web={this.state.web}/>
                        :
                        <Login/>
                    }
                </MuiThemeProvider>
            </>
        );
    }
}

const mapStateToProps = ({ user, loader }) => {
  return {
    isLoggedIn: user.isLoggedIn,
    isLoading: loader,
  };
};

export default connect(mapStateToProps, { getUserData })(App);
