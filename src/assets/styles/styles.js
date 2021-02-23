import {fade} from "@material-ui/core/styles";

const styles = theme => ({
     root: {
         height: '100vh',
     },
     image: {
         backgroundImage: 'url(https://source.unsplash.com/random)',
         backgroundRepeat: 'no-repeat',
         backgroundColor:
             theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
         backgroundSize: 'cover',
         backgroundPosition: 'center',
     },
     paper: {
         margin: theme.spacing(14, 4),
         display: 'flex',
         flexDirection: 'column',
         alignItems: 'center',
     },
     avatar: {
         margin: theme.spacing(1),
         backgroundColor: theme.palette.secondary.main,
     },
     form: {
         width: '100%', // Fix IE 11 issue.
         marginTop: theme.spacing(1),
     },
     submit: {
         margin: theme.spacing(3, 0, 2),
     },
     large: {
         width: theme.spacing(6),
         height: theme.spacing(6),
     },
     bottomMenu:{
        position:'fixed',
         alignItems: 'center',
         bottom:'0px',
         textAlign:'left',
         width:'100%',
         padding:theme.spacing(1),
         display:'flex',
     },
    grow: {
        flexGrow: 1,
    },
    app:{
        background:'#1720B3',
        position:'fixed'
    },
    menuButton: {
        marginRight: theme.spacing(2),
        color: fade(theme.palette.common.white, 0.9)
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '20ch',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    medium: {
        width: theme.spacing(4),
        height: theme.spacing(4),
    },
})

 export default styles
