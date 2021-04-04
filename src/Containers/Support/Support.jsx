import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import styles from './Support.module.css';

import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    support_button: {
        fontSize: "24px",
        fontWeight: "bold",
        textTransform: "none",
        fontFamily: "'Inter', sans-serif",
        color: "white",
        backgroundColor: "#DB0202",
        borderRadius: "10px",
        position: "relative",
        margin: 0,
        left: "50%",
        msTransform: "translateX(-50%)",
        transform: "translateX(-50%)"
    }
}));

const Support = () => {
    const classes = useStyles();
    
    return (
        <div id={styles.container}>
            <div id={styles.content}>
                <h2 id={styles.header}>
                Become a supporting donor and start helping students on Aluminus.
                </h2>
                <Button variant="contained" color="secondary" size="large" className={classes.support_button}>
                    Support a student
                </Button>
            </div>
        </div>
    );
}

export default Support;