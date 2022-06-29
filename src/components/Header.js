import { useState, useEffect } from 'react';
import { AppBar, Collapse, IconButton, makeStyles, withStyles, Typography, Toolbar, Box, Icon ,Button, Grid } from '@material-ui/core';
import TodayIcon from '@material-ui/icons/Today';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import React from 'react';
import './bounce.css';
const useStyles  = makeStyles(theme => ({
    root:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        height:"100%",
        textAlign:"center",
        fontFamily:'Nunito',
    },
    applogo:{
        width:"40.24px",
        height:"40px"
    },
    appbar:{
        marginTop:"2rem",
        background:"none",
    },
    dayone:{
        fontFamily: 'Inter',
        fontSize: '15px',
        fontStyle: 'normal',
        fontWeight:"bolder"
    },
    smalltext:{
        fontFamily: 'Inter',
        fontSize:'12px',
        letterSpacing: "-0.02em",
        textAlign:"left",
        fontWeight:"lighter",
    },
    appbarWrapper:{
        width: '80%', 
        margin: "0 auto",  
    },
    appbarTitle:{
        flexGrow:1,  
        textAlign:"left",
    },
    appbutton:{
        background:'rgba(0,0,0,0.5)',
        padding:"5px",
        borderRadius: "8px",
    },
    contentBox:{
    padding:"1em",
    },
    bulbContent:{
        borderRadius: "10px",
        textAlign:"center",
        background:'rgba(0,0,0,0.3)',
    },
    calendartext:{
        marginTop:"-1em",
    },
    icon:{
        color:"#fff",
        fontSize:"2rem",
        background: "#9B51E0",
        borderRadius: "5px",
    },
    bottomAnimation:{
        backgroundImage:`url(${process.env.PUBLIC_URL + '/assets/coin_pot.png'})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundPosition:'bottom',
        height:"444px",
        display:"flex",
        flexWrap: 'nowrap',
    },  
    coinAnimation:{
        backgroundImage:`url(${process.env.PUBLIC_URL + '/assets/coin_left.png'}),url(${process.env.PUBLIC_URL + '/assets/coin_right.png'})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '147px 155px, 114px 162px',
        backgroundPosition:'top left, right',
        animationName: 'bounce, bounce',
        animationDuration: '2s, 2s',
        animationTimingFunction: 'ease-in-out',
        animationIterationCount: 'infinite, infinite',
        animationFillMode: 'both',
        height:"444px",
        display:"flex",
        flexWrap: 'nowrap',
    },
    bulbIcon:{
        color:"#ECAB03",
        marginRight:"-2px",
        marginTop:"2px",
    },
    bulbtext:{
        textAlign:'left',
        marginLeft:"-2em"
    },
    colorText:{
        color:"#5AFF3D",
    },
    container:{
        margin: "0 auto",
        textAlign: "center",
        background:"none",
        lineHeight:"63.7px",
    },
    containerDiv:{
        marginTop:"10em",
        width:'60%',
        background:`url(${process.env.PUBLIC_URL + '/assets/top_stars.png'})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        position: "relative",
    },
    title1:{
        color:"#fff",
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '100',
        fontSize: '50px',
        letterSpacing: '-0.015em',
    },
    boldtitle:{
        fontFamily:"'Poppins', sans-serif",
        fontWeight:'800',
        fontStyle: 'bolder',
        fontSize: '60px',
        letterSpacing: '-0.015em',
    },
    title3:{
        fontFamily:"inter",
        fontWeight:'100',
        fontStyle: 'normal',
        fontSize: '29.413px',
        letterSpacing: '-0.06em',
        lineHeight: '111.5%',
        color:'#fff',
    },
    bold:{
       fontWeight:"500",
       fontStyle: 'bold',
       fontSize: '35px',
    },
    boxDesign:{
        lineHeight:"1.5",
        fontFamily:'inter',
        color:'#fff',
        margin: "0 auto",
        marginTop: "1em",
        width: '425px',
        borderRadius:'8px',
        background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.39) -213.5%, rgba(255, 255, 255, 0) 100%)',
        boxShadow: 'inset 0px -1px 11px rgba(255, 255, 255, 0.17), inset 0px 2px 0px rgba(255, 255, 255, 0.24)',
    }
}))
const ColorButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText('#ECA232'),
      backgroundColor:'#ECAB03',
      '&:hover': {
        backgroundColor: '#ECA232',
      },
    },
  }))(Button);
export default function Header() {
const classes = useStyles();
const [checked, setChecked] = useState(false)

useEffect(() => {
   setChecked(true)
}, [])

  return (
      <div className={classes.root}>
            <AppBar className={classes.appbar} elevation={0}>
                <Toolbar className={classes.appbarWrapper} position="fixed">
                    <div className={classes.appbarTitle}>
                        <Box
                            component="img"
                            sx={{
                            height: 40.24,
                            width: 40,
                            maxHeight: { xs: 40, md: 40 },
                            maxWidth: { xs: 40.24, md: 40.24 },
                            }}
                            alt="Moniepot"
                            src={process.env.PUBLIC_URL+'/assets/Logo.png'}
                            className={classes.applogo}
                        />
                    </div>
                    <div >
                        {/* <Box display="flex" style={{display:"inline"}} alignItems="flex-start" flexDirection="row-reverse" p={1} m={1} bgcolor="background.paper"> */}
                        <Grid container elevation={0} spacing={1} style={{textAlign:"left"}}>
                            <Grid elevation={2} item xs={6} sm={6} md={6} 
                                container
                                >
                                <Box p={1}>
                                    <IconButton className={classes.appbutton}>
                                        <TodayIcon  className={classes.icon}/>
                                    </IconButton>
                                </Box>
                            </Grid>
                            <Grid elevation={2}  item xs={6} sm={6} md={6} 
                                container>
                                <Box p={1} className={classes.calendartext}>
                                <p className={classes.dayone}>Day 1<br/><span className={classes.smalltext}>of 5</span></p>
                                </Box>
                            </Grid>
                        </Grid>
                    </div>
                    
                </Toolbar>              
            </AppBar>
            <Collapse 
                className={classes.containerDiv} 
                in={checked}
                {...(checked ? {timeout: 1000} : {})}
                collapsedSize={50}
            >
                <div className={classes.container}>
                    <Typography variant="h3" className={classes.title1}>Unlock to<br/>
                    <span className={classes.boldtitle}>Power your dreams!</span>
                    </Typography>
                    <div variant="p" className={classes.title3}>Stand a chance to win <br/>
                    <span className={classes.bold}>&#8358;3,000,000</span> everyday for the next 5 days
                    </div> 
                    <div className={classes.boxDesign}>
                        <Box display="flex" alignItems="center" flexDirection="column" p={1} m={1} >
                            <h3 style={{paddingTop:"1em"}}>🚀 How To Play</h3>
                            <ol type='1' style={{textAlign:"left"}}>
                                <li>Guess the right combination of numbers</li>
                                <li>Win <b>N3,000,000</b> instantly</li>
                            </ol>
                            <p>Sounds unbelievable? Well, guess right & see for yourself!</p>
                            <div className={classes.contentBox}>
                        <Grid container elevation={0} spacing={1} className={classes.bulbContent}>
                            <Grid elevation={2} item xs={6} sm={2} md={2} 
                                container
                                >
                                <Box p={1}>
                                    <IconButton>
                                        <EmojiObjectsIcon  className={classes.bulbIcon}/>
                                    </IconButton>
                                </Box>
                            </Grid>
                            <Grid elevation={2}  item xs={6} sm={10} md={10} 
                                container>
                                <Box p={1} className={classes.bulbtext}>
                                    <p>Think well before you guess. You have only <b>2</b> attempts per day and even after you wi, 
                                    you can come back the next day to try for another jackpot!</p>
                                </Box>
                            </Grid>
                        </Grid>
                            </div>
                        </Box> 
                    </div>
                    <div>
                    <ColorButton variant="contained" style={{color:"#fff", textTransform:"capitalize",marginTop:"1.5em"}}  endIcon={<ArrowForwardIosIcon />} color="primary" className={classes.margin}>
                        Play The Game
                    </ColorButton>
                    </div>

                    <div className={classes.bottomAnimation}>
                        <div className={classes.coinAnimation}>
                            <div>
                                    <img src={process.env.PUBLIC_URL + '/assets/1.png'} class="rotate"/>
                            </div>
                            <div>
                                    <img src={process.env.PUBLIC_URL + '/assets/2.png'} class="rotate"/>
                            </div>
                            <div>
                                    <img src={process.env.PUBLIC_URL + '/assets/3.png'} class="rotate"/>
                            </div>
                            <div>
                                    <img src={process.env.PUBLIC_URL + '/assets/4.png'} class="rotate"/>
                            </div>
                            <div>
                                    <img src={process.env.PUBLIC_URL + '/assets/5.png'} class="rotate"/>
                            </div>   
                        </div>
                                            
                    </div>         
                </div>
            </Collapse>
           
      </div>
  )
}
