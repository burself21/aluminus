import React from 'react';

import styles from './Login.module.css';

import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import FormHelperText from '@material-ui/core/FormHelperText';

import Link from 'react-router-dom/Link';

const useStyles = makeStyles(theme => ({

    paper: {
        ["@media (min-width:320px)"]: {

        },

        ["@media (min-width:1450px)"]: {
            padding: "35px 110px 25px 95px"
        }
    },

    input: {
        ["@media (min-width:1450px)"]: {
            '&:first-of-type': {
                marginBottom: "20px"
            },
            
            '& label': {
                fontSize: "18px"
            },
            '& > p': {
                textAlign: "right",
                color: "#2484DC"
            }
        }
    },

    passwordHelperText: {
        color: "#2484DC",
        textDecoration: "none",
        fontFamily: "'Inter', sans-serif",
        fontWeight: 500,
        '&:hover': {
            textDecoration: "underline"
        },
        lineHeight: "32px"

    },

    passwordHelperDiv: {
        textAlign: "right",
        ["@media (min-width:1450px)"]: { 
            marginBottom: "110px"
        }
    },

    login_button_container: {
        display: "flex",
        justifyContent: "flex-end",
        marginBottom: "15px"
    },

    button: {

        ["@media (min-width:320px)"]: {
            padding: 'calc(5px + 0.20225vw) calc(10px + 0.4045vw)',
            fontSize: "calc(11.25px + 0.455vw)"
        },

        ["@media (min-width:1450px)"]: {
            padding: '6px 36px',
            fontSize: "18px"
        },

        borderRadius: '6px',
        textTransform: 'none',
        fontWeight: '600',
        fontFamily: "'Inter', sans-serif",


        backgroundColor: '#C91818',
        '&:hover': {
            backgroundColor: "#C52a52"
        },
        
    }

}));
const Login = () => {
    const classes = useStyles();

    return (
        <div id={styles.container}>
            <div id={styles.content}>
                <p id={styles.header}> Aluminus </p>
                <Paper elevation={3} square className={classes.paper}>
                    <p id={styles.form_header}>
                        Login
                    </p>
                    <form id={styles.form} autoComplete="off">
                        <TextField
                            id="email-input"
                            className={classes.input}
                            label="Email"
                            type="email"
                            autoComplete="current-email"
                            fullWidth
                        />
                        <TextField
                            id="password-input"
                            className={classes.input}
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            fullWidth
                        />
                        <div className={classes.passwordHelperDiv}>
                            <FormHelperText className={classes.passwordHelperText} component="a" href="#"> Forgot Password?</FormHelperText>
                        </div>
                        <div className={classes.login_button_container}>
                            <Button variant="contained" color="secondary" className={classes.button}> 
                                    Log In
                            </Button>
                        </div>

                        <p id={styles.sign_up}>New to Aluminus? <Link to="/signup" id={styles.join_link}>Join Now</Link></p>

                    </form>
                </Paper>
            </div>
        </div>
    )
}

export default Login;