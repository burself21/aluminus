import React from 'react';

import styles from './Home.module.css';

import makeStyles from '@material-ui/core/styles/makeStyles';

import { Button, Container, Typography, List, ListItem, ListItemText, ListItemIcon, ListItemAvatar, Avatar } from '@material-ui/core';

import MyNav from '../../Components/Navbar/MyNav';
import HowItWorks from '../../Containers/HowItWorks/HowItWorks';
import Support from '../../Containers/Support/Support.jsx';
import Footer from '../../Components/Footer/Footer';

import students_img from './students_img.svg';

import check from './check.svg';
import check_green from './check_green.svg';

const useStyles = makeStyles(theme => ({
    button: {
        padding: '8px 16px',
        borderRadius: '10px',
        textTransform: 'none',
        fontWeight: '600',
        fontFamily: "'Inter', sans-serif",
        fontSize: '18px',

        '&:first-of-type': {
            marginRight: '40px',
            backgroundColor: '#DB0202',
            '&:hover': {
                backgroundColor: "#D7143C"
            }
        },
        
        '&:nth-of-type(2)': {
            border: "3px solid black"
        }
    },

    info_container: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        justifyContent: "center",
    
        marginTop: "65px"
    },

    info_subheader: {
        textTransform: "uppercase",
        fontFamily: "'Inter', sans-serif",
        fontWeight: "900",
        color: "#2D3436",
        fontSize: "12px",
        letterSpacing: "2.5px"
    },

    list: {
        marginTop: "35px",
        '& > li': {
            paddingLeft: 0,
            alignItems: "flex-start",
            '&:not(:last-of-type)': {
                marginBottom: "25px"
            }
        },
        
        '& > li > div': {
            paddingTop: '3px'
        }
    
    },

    list_icon: {
        alignSelf: "top"
    }

}));

export const Home = () => {

    const classes = useStyles();

    return (
        <React.Fragment>
            <MyNav page="home" />
            
            <div className={styles.container}>
                <div className={styles.page_1_container}> 
                    <div className={styles.page_1_content}> 
                    
                        
                        <div id={styles.student_img_container}>
                            <img src={students_img} alt="" />
                        </div>
                        <h2 className={styles.first_header}> Become an alum who <span style={{color: '#DB0202'}}>illuminates</span> a
                        student's college experience.
                        </h2>
                        <h3 className={styles.second_header}> You can make a difference at your alma mater by lending a helping hand directly to university students in need.
                        </h3>
                        <div className={styles.button_container}>
                            <Button variant="contained" color="secondary" className={classes.button}> 
                                Support a Student
                            </Button>
                            <Button variant="outlined" className={classes.button}> 
                                Learn More
                            </Button>
                        </div>
                        <div style={{clear: "both"}} />
                        
                    </div>
                    <div id={styles.ground} />
                </div>

                <div className={styles.page_2_container}>
                    <div className={styles.page_2_content}>
                        <div className={styles.page_2_header_container}>
                            <h2 className={styles.page_2_header}> Small support from many alumni has a big <span style={{color: '#DB0202'}}> impact </span>
                             on a student.
                            </h2>
                        </div>
                        <Container className={classes.info_container}>
                            <div className={styles.info}>
                                <h2 className={styles.info_header}>
                                    Your Alma Mater
                                </h2>
                                <Typography className={classes.info_subheader} noWrap>
                                    Students following your footsteps
                                </Typography>
                                <List className={classes.list}>
                                    <ListItem>
                                        <ListItemIcon className={classes.list_icon}>
                                            <img src={check} alt="" />
                                        </ListItemIcon>
                                        <h4 className={styles.list_text}> Nearly 70% of students take out student loan, graduating with an average debt of $29,900.</h4>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon className={classes.list_icon}>
                                            <img src={check} alt="" />
                                        </ListItemIcon>
                                        <h4 className={styles.list_text}> More than 700,000 students drop out due to their financial situations.</h4>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon className={classes.list_icon}>
                                            <img src={check} alt="" />
                                        </ListItemIcon>
                                        <h4 className={styles.list_text}> More than 60% students reported homlessness or housing and food insecurity.</h4>
                                    </ListItem>
                                </List>
                            </div>
                            <div className={styles.info}>
                                <h2 className={styles.info_header}>
                                    Your Contribution
                                </h2>
                                <Typography className={classes.info_subheader} noWrap>
                                    A personal way to give back
                                </Typography>
                                <List className={classes.list}> 
                                    <ListItem>
                                        <ListItemIcon className={classes.list_icon}>
                                            <img src={check_green} alt="" />
                                        </ListItemIcon>
                                        <h4 className={styles.list_text}> Your fund helps verified students of the university who demonstrate financial need.</h4>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon className={classes.list_icon}>
                                            <img src={check_green} alt="" />
                                        </ListItemIcon>
                                        <h4 className={styles.list_text}> Your fund is transferred directly to the student’s university account.</h4>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon className={classes.list_icon}>
                                            <img src={check_green} alt=""/>
                                        </ListItemIcon>
                                        <h4 className={styles.list_text}> Students receive a tangible benefit from your fund that exisiting resources fail to provide.</h4>
                                    </ListItem>
                                </List>
                            </div>
                        </Container>
                    </div>
                </div>

                <HowItWorks />
                <Support />
                <Footer />
            </div>
        </React.Fragment>
    );
}