// page.tsx
"use client";

import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import HelpIcon from "@mui/icons-material/Help";
import PeopleIcon from "@mui/icons-material/People";
import StarIcon from "@mui/icons-material/Star";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import LoginIcon from "@mui/icons-material/Login";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styles from "./page.module.css";
import Link from "next/link";
import About from "@/components/About";
import Team from "@/components/Team";
import Faq from "@/components/Faq";
import Skills from "@/components/Skills";
import Statistics from "@/components/Statistics";

const Page = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const navLinks = (
    <>
      <Button href="" color="inherit">
        <HomeIcon /> HOME
      </Button>
      <Button href="#aboutus" color="inherit">
        <InfoIcon /> ABOUT US
      </Button>
      <Button href="#faq" color="inherit">
        <HelpIcon /> F.A.Q
      </Button>
      <Button href="#team" color="inherit">
        <PeopleIcon /> TEAM
      </Button>
      <Button href="#testimonials" color="inherit">
        <StarIcon /> TESTIMONIALS
      </Button>
      <Button href="#contactus" color="inherit">
        <ContactMailIcon /> CONTACT US
      </Button>
    </>
  );

  return (
    <div className={styles.root}>
      <AppBar position="fixed" className={styles.appBar}>
        <Toolbar className={styles.toolbar}>
          <Typography variant="h6">FTP</Typography>
          <div className={styles.navLinks}>
            {navLinks}
            <Link href="/student/login">
              <Button color="inherit" startIcon={<LoginIcon />}>
                SIGN IN
              </Button>
            </Link>
          </div>
          <IconButton
            edge="end"
            className={styles.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          className={styles.drawerContent}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <div className={styles.drawerHeader}>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="close"
              onClick={toggleDrawer(false)}
            >
              <CloseIcon />
            </IconButton>
          </div>
          <List>
            <ListItem button component="a" href="#home">
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="HOME" />
            </ListItem>
            <ListItem button component="a" href="#aboutus">
              <ListItemIcon>
                <InfoIcon />
              </ListItemIcon>
              <ListItemText primary="ABOUT US" />
            </ListItem>
            <ListItem button component="a" href="#faq">
              <ListItemIcon>
                <HelpIcon />
              </ListItemIcon>
              <ListItemText primary="F.A.Q" />
            </ListItem>
            <ListItem button component="a" href="#team">
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText primary="TEAM" />
            </ListItem>
            <ListItem button component="a" href="#testimonials">
              <ListItemIcon>
                <StarIcon />
              </ListItemIcon>
              <ListItemText primary="TESTIMONIALS" />
            </ListItem>
            <ListItem button component="a" href="#contactus">
              <ListItemIcon>
                <ContactMailIcon />
              </ListItemIcon>
              <ListItemText primary="CONTACT US" />
            </ListItem>
            <ListItem button component="a" href="/signin">
              <ListItemIcon>
                <LoginIcon />
              </ListItemIcon>
              <ListItemText primary="SIGN IN" />
            </ListItem>
          </List>
        </Box>
      </Drawer>

      <div className={styles.header}>
        <Typography variant="h1"className={styles.tj1}>
          Foreign Training Program
        </Typography>
        <Typography variant="h5" className={styles.subtitle}>
          Your Gateway to Global Excellence
        </Typography>
        <Typography variant="body1" className={styles.tj2}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
          perspiciatis sed veritatis maxime quas, deleniti reprehenderit porro
          voluptatibus quis ut tenetur, vero ipsa dolore rem. Et tempore officia
          inventore rerum.
        </Typography>
        <center>
          <Button variant="contained" className={styles.button}>
            <strong>Apply Now</strong>
          </Button>
        </center>
      </div>

      <Container className={styles.content}>
        <div id="aboutus" className={styles.section}>
          <Typography variant="h4" className={styles.sectionHeading}>
            About Us
          </Typography>
          <About />

          {/* <Typography variant="body1" className={styles.sectionContent}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.
          </Typography> */}
        </div>
        {/* <Skills/> */}
        {/* <div id="faq" className={styles.section}>
          <Typography variant="h4" className={styles.sectionHeading}>
            F.A.Q
          </Typography>
          {Array.from({ length: 5 }).map((_, index) => (
            <Accordion key={index} className={styles.accordion}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                className={styles.accordionSummary}
              >
                <Typography>Question {index + 1}</Typography>
              </AccordionSummary>
              <AccordionDetails className={styles.accordionDetails}>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))} */}
        {/* </div> */}
        <div id="team" className={styles.section}>
          <Typography variant="h4" className={styles.sectionHeading}>
            Team
          </Typography>
          <Team />
        </div>
        <div id="testimonials" className={styles.section}>
          <Typography variant="h4" className={styles.sectionHeading}>
            Testimonials
          </Typography>
          <Typography variant="body1" className={styles.sectionContent}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.
          </Typography>
        </div>
        <Statistics/>
        <Faq/>
        <div id="contactus" className={styles.section}>
          <Typography variant="h4" className={styles.sectionHeading}>
            Contact Us
          </Typography>
          <Card className={styles.contactCard}>
            <CardContent>
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                margin="normal"
                className={styles.textField}
              />
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                margin="normal"
                className={styles.textField}
              />
              <TextField
                label="Subject"
                variant="outlined"
                fullWidth
                margin="normal"
                className={styles.textField}
              />
              <TextField
                label="Message"
                variant="outlined"
                fullWidth
                margin="normal"
                multiline
                rows={4}
                InputProps={{ className: styles.messageField }}
              />
            </CardContent>
            <CardActions>
              <Button variant="contained" color="primary">
                Submit
              </Button>
            </CardActions>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default Page;
