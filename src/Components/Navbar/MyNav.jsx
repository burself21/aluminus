import React from 'react';

import { fade, useTheme, makeStyles } from '@material-ui/core/styles';
import styles from './MyNav.module.css';

import AppBar from '@material-ui/core/AppBar';
import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu'
import MenuIcon from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Link from '@material-ui/core/Link';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


//icons
import MoreIcon from '@material-ui/icons/MoreVert';
import MailIcon from '@material-ui/icons/Mail';

import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
    grow: {
        flexGrow: 1,
    },

    nav: {
        backgroundColor: 'white',
        margin: '0px!important'
    },

    toolbar: {
        padding: 0,

        ["@media (min-width:961px)"]: {
            width: "75vw",
            marginLeft: "3.2vw"
        },

        ["@media (min-width:1360px)"]: {
            width: "1165px",
            marginLeft: "calc(50.9vw - (1300px) / 2)"
        },

        ["@media (min-width:1400px)"]: {
            marginLeft: "calc(52.3vw - (1300px) / 2)"
        },

        ["@media (min-width:1483px)"]: {
            width: "1165px",
            marginLeft: "calc((100vw - 1160px) / 2)"
        }
    },

    nav_links: {
        marginRight: theme.spacing(2)
    },

    nav_button: {
        color: '#DB0202',
        fontWeight: "bold",
        fontSize: '16px',
        textTransform: "capitalize",
        '&:first-of-type': {
            marginRight: theme.spacing(0.5)
        }
    },

    headers: {
        lineHeight: '40px!important',
        marginRight: theme.spacing(4),
        '& > * + *': {
            marginLeft: theme.spacing(2)
        }
    },

    header: {
        color: '#DB0202'
    },

    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
            color: 'black',
            fontWeight: 'bold',
            fontSize: '24px',
            '&:hover': {
                textDecoration: 'none'
            }
              
        }
    },

    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex'
        }
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none'
        }
    }

}));


const MyNav = () => {

    const classes = useStyles();
    
    // state
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    
    // attributes
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    // handlers
    const handleMobileMenuOpen = (event => {
        setMobileMoreAnchorEl(event.currentTarget);
    })
    const handleMobileMenuClose = (event => {
        setMobileMoreAnchorEl(null);
    })

    // render components
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right'}}
            id='mobile-menu'
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right'}}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <Typography className={classes.mobileMenu}></Typography>
            </MenuItem>
        </Menu>

    )
    return (
        <div className={classes.grow}>
            <AppBar position="fixed" className={classes.nav}>
                <ToolBar className={classes.toolbar}>
                    <Link 
                        className={clsx(classes.title, styles.title)}
                        variant="h6"
                        href="#"
                        noWrap
                        
                    >
                        Aluminus
                    </Link>

                    <div className={classes.grow} />

                    <div className={classes.sectionDesktop}>
                        <Typography className={classes.headers}> 
                            <Link className={classes.header} href='#' onClick={event => event.preventDefault()} noWrap>
                                Who we are
                            </Link>
                            <Link className={classes.header} href='#' onClick={event => event.preventDefault()} noWrap>
                                How it works
                            </Link>
                            <Link className={classes.header} href='#' onClick={event => event.preventDefault()} noWrap>
                                Contact Us
                            </Link>

                        </Typography>
                        <Button className={classes.nav_button}>Login</Button>
                        <Button className={classes.nav_button}>Sign Up</Button>
                        {/*<IconButton aria-label="show 4 new mails" color="inherit">
                        <Badge badgeContent={4} color="secondary">
                            <MailIcon />
                        </Badge>
                        </IconButton>
                        <IconButton aria-label="show 17 new notifications" color="inherit">
                        <Badge badgeContent={17} color="secondary">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton> */}

                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                        aria-label="show more"
                        aria-controls='mobile-menu'
                        aria-haspopup="true"
                        onClick={handleMobileMenuOpen}
                        color="inherit"
                        >
                        <MoreIcon />
                        </IconButton>
                    </div>
                </ToolBar>
            </AppBar>
            {renderMobileMenu}
        </div>
    );
}

export default MyNav;