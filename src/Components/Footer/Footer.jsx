import React from 'react';

import styles from './Footer.module.css';

import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';

import { Facebook, LinkedIn, MailOutlineRounded, PersonOutlineRounded, Twitter } from '@material-ui/icons';
import message from './message.svg';


const useStyles = makeStyles(theme => ({


    form_control: {
        '&:first-of-type': {
            
        },
        '& > div': {
            borderRadius: "18px",
        },
        '& input': {
            
        },
        
    },

    submit_button: {
        fontFamily: "'Inter', sans-serif",
        fontSize: "19px",
        fontWeight: 600,
        letterSpacing: '0.25px',
        lineHeight: '36px',
        backgroundColor: "#DB0202",
        width: "100%",
        maxHeight: "75%",
        borderRadius: "20px",
        top: "12.5%"
    },

    message_label: {
        color: "#DB0202",
        fontWeight: "600"
    },
    
    message_input: {
        '& > textarea:first-of-type': {
            '&::placeholder': {
                color: "#c70000",
                opacity: 0.9,
                fontWeight: 600
            },
            '&:active::placeholder': {
                display: 'hidden'
            },

            '&:-ms-input-placeholder': {
                color: "red",
                opacity: 0.9,
                fontWeight: 600
            },

            '&::-ms-input-placeholder': {
                color: "red",
                opacity: 0.9,
                fontWeight: 600
            }
        }
    },

    message_adornment: {
        marginTop: "0px!important",
        padding: "0px!important",
        height: "24px",
        width: "24px",
        alignSelf: "start",
        '& > img': {
            alignSelf: "start"
        }
    }

}));

const Footer = () => {

    const classes = useStyles();

    // state
    const [values, setValues] = React.useState({
        name: '',
        email: '',
        message: ''
    });

    const [placeholder, setPlaceholder] = React.useState("Leave a message...");

    const handleChange = (field) => (event => {
        setValues({ ...values, [field]: event.target.value })
    });

    return (
        <div id={styles.container}>
            <footer id={styles.root}>
                <Grid container>
                    <Grid container item xs={12} spacing={2} className={styles.grid_row}>
                        <Grid item xs={6} className={styles.grid_section}> 
                            <p className={styles.section_header}>
                            Follow us
                            </p>

                            <IconButton size="small" className={styles.contact_icon}>
                                <Facebook color="primary" className={classes.contact_icon} />
                            </IconButton>
                            <IconButton size="small" className={styles.contact_icon}>
                                <LinkedIn color="primary" className={classes.contact_icon} />
                            </IconButton>
                            <IconButton size="small" className={styles.contact_icon}>
                                <Twitter color="primary" className={classes.contact_icon} />
                            </IconButton>
                        </Grid>

                        <Grid item xs={6} className={styles.grid_section}>
                            <p className={styles.section_header}>
                                Contact details
                            </p>
                            <a href="mailto:aluminus@gmail.com" id={styles.email}>aluminus@gmail.com</a>
                        </Grid>

                    </Grid>

                    <Grid item container xs={12} spacing={2} className={styles.grid_row}>
                        <Grid item xs={6} className={styles.grid_section}>
                            <p className={styles.section_header} id={styles.info_header}>
                                Information
                            </p>
                            <Grid container item spacing={3}>
                                <Grid container item xs={12} spacing={6}>
                                    <Grid item xs={4}>
                                        <a href="#" className={styles.info_item}>About Us</a>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <a href="#" className={styles.info_item}>Affiliations</a>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <a href="#" className={styles.info_item}>We are hiring!</a>
                                    </Grid>
                                </Grid>

                                <Grid container item xs={12} spacing={6}>
                                    <Grid item xs={4}>
                                        <a href="#" className={styles.info_item}>Get in Touch</a>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <a href="#" className={styles.info_item}>Privacy Policy</a>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <a href="#" className={styles.info_item}>Terms of Service</a>
                                    </Grid>
                                </Grid>

                            </Grid>
                            <div id={styles.copyright_section}> 
                                <p>Copyright © 2020 • Aluminus</p>
                                <p>All rights reserved.</p>
                            </div>
                        </Grid>
                        <Grid item xs={6} className={styles.grid_section}> 
                            <p className={styles.section_header} id={styles.keep_in_touch}>
                                Keep in touch
                            </p>

                            <form noValidate autoComplete="off" className={classes.form}>
                                <Grid item container spacing={3}> 
                                    <Grid item container xs={12} spacing={3}> 
                                        <Grid item xs={6}>
                                            <FormControl className={classes.form_control} size="small" variant="filled" fullWidth={true}>
                                                <InputLabel htmlFor="name-adornment">Your Name</InputLabel>
                                                <FilledInput
                                                    id="name-adornment"
                                                    type="text"
                                                    value={values.name}
                                                    onChange={handleChange('name')}
                                                    disableUnderline={true}
                                                    endAdornment = {
                                                        <InputAdornment position="end">
                                                            <PersonOutlineRounded color="disabled" />
                                                        </InputAdornment>
                                                    }
                                                />
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={6}> 
                                            <FormControl className={classes.form_control} size="small" variant="filled" fullWidth={true}>
                                                <InputLabel htmlFor="email-adornment">E-mail</InputLabel>
                                                <FilledInput
                                                    margin="dense"
                                                    color="primary"
                                                    id="email-adornment"
                                                    type="text"
                                                    value={values.email}
                                                    onChange={handleChange('email')}
                                                    disableUnderline={true}
                                                    endAdornment = {
                                                        <InputAdornment position="end">
                                                            <MailOutlineRounded color="disabled" />
                                                        </InputAdornment>
                                                    }
                                                />
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                
                                    <Grid item container xs={12} spacing={3}>

                                        <Grid item xs={9}> 
                                            <FormControl className={classes.form_control} variant="filled" size="small" fullWidth={true} >
                                                {/*<InputLabel className={classes.message_label} htmlFor="message-adornment">Leave a message...</InputLabel> */}
                                                <FilledInput
                                                    color="primary"
                                                    id="message-adornment"
                                                    placeholder={placeholder}
                                                    className={classes.message_input}
                                                    type="text"
                                                    value={values.message}
                                                    onChange={handleChange('message')}
                                                    onFocus={() => {setPlaceholder('')}}
                                                    onBlur={() => {setPlaceholder("Leave a message...")}}
                                                    disableUnderline={true}
                                                    multiline={true}
                                                    rows={3}
                                                    rowsMax={4}
                                                    
                                                    endAdornment = {
                                                        <InputAdornment position="end" className={classes.message_adornment}>
                                                            <img src={message} alt="" />
                                                        </InputAdornment>
                                                    }
                                                />
                                            </FormControl>
                                        </Grid>
                                        
                                        <Grid item xs={3}>
                                            <Button variant="contained" color="secondary" size="large" className={classes.submit_button}>
                                                SEND
                                            </Button>
                                        </Grid>

                                    </Grid>


                                </Grid>
                                
                            </form>
                        </Grid>
                    </Grid>

                </Grid>
            </footer>
        </div>
    );
}

export default Footer;