import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import imgMain2 from '../assets/images/main/imgMain2.png';

const useStyles = makeStyles({
    main: {
        backgroundColor: '#E2E3E5',
        height: '100%',
        position: 'relative',
    },
    images: {
        height: '100%',
    },
    baseline1: {
        fontSize: '50px',
        zIndex: 10,
        color: '#333333',
        position: 'absolute',
        top: '50%',
        left: '50%',
        display: 'none'
    },
    baseline2: {
        fontSize: '50px',
        zIndex: 10,
        color: '#efefef',
        position: 'absolute',
        top: '50%',
        left: '50%',
    },
    donationBtn: {
        zIndex: 10,
        backgroundColor: '#0cc722',
        color: '#FFFFFF',
        fontWeight: 'bold',
        position: 'absolute',
        bottom: '20%',
        right: '10%',
    },
    newsletterBtn: {
        zIndex: 10,
        backgroundColor: '#FFFFFF',
        color: '#4973b9',
        borderRadius: '25px',
        textTransform: 'none',
        fontSize: '14px',
        position: 'absolute',
        top: '15%',
        right: '10%',
    },
    newsletterIcon: {
        marginRight: 10,
        width: 20,
    },
    dot: {
        height: 10,
        width: 10,
        backgroundColor: '#0cc722',
        borderRadius: '50%',
        display: 'inline-block',
    },
});

export default function Main() {
    const classes = useStyles();
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        customPaging: () => (
            <div><span className={classes.dot}></span></div>
        ),
    };

    return (
        <>
            <div className={classes.main}>
                <Button className={classes.newsletterBtn} variant="contained">
                    <EmailOutlinedIcon className={classes.newsletterIcon}/>Newsletter
                </Button>
                <Typography variant="h1" className={classes.baseline2}>Ensemble,<br></br>nous pouvons tant<br></br>accomplir</Typography>
                <span className={classes.baseline1}>Éducation,<br></br> parchemin de la vie</span>
                {/* <span className={classes.baseline2}>Ensemble,<br></br>nous pouvons tant<br></br>accomplir</span> */}
                <Button className={classes.donationBtn} variant="contained">faire un don</Button>
                <Slider {...settings}>
                    <img className={classes.images} src={imgMain2} width="100%" alt="img 2" />
                    <img className={classes.images} src={imgMain2} width="100%" alt="img 2" />
                </Slider>
            </div>
        </>
    )
}