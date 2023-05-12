import React from "react";
import Navbar from "../components/Navbar";
import { useStyles } from "../components/Styles";
import Grid from "@material-ui/core/Grid";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Divider,
  TextField,
  TextareaAutosize,
  Avatar,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { useState } from "react";
import emailjs from "emailjs-com";
import EngineeringOutlinedIcon from "@mui/icons-material/EngineeringOutlined";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
const cards = [
  {
    title: "Step 1",
    content: "The Manufacturer adds a product to the system",
  },
  {
    title: "Step 2",
    content: "The warehouse sellers buy the product from the manufacturer",
  },
  {
    title: "Step 3",
    content:
      "After the warehouse sellers purchase the product from the manufacturer, the manufacturer will ship the product to the warehouse",
  },
  {
    title: "Step 4",
    content:
      "The customer purchases a product from the list of available products",
  },
  {
    title: "Step 5",
    content:
      "The warehouse  ships the bought product to delivery hub  and the delivery hub  verifies and receives it",
  },
  {
    title: "Step 6",
    content:
      "the delivery hub  ships the bought product to the customer and the customer verifies and receives it",
  },
];

export default function Home() {
  const classes = useStyles();
  const navItem = [1];
  const [currentCard, setCurrentCard] = useState(0);
  const reviews = [
    {
      id: 1,
      name: "Karl Brighton",
      statement:
        "The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.",
      image_url:
        "https://sweta-myteam-website-fm.netlify.app/static/media/avatar-kady.78fc482c.jpg",
      position: "Software Engineer at Kadex",
    },
    {
      id: 2,
      name: "Krishna Bells",
      statement:
        "We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!",
      image_url:
        "https://sweta-myteam-website-fm.netlify.app/static/media/avatar-aiysha.e119a0c1.jpg",
      position: "Product Manager at Google",
    },
    {
      id: 3,
      name: "Ben Spiff",
      statement:
        "Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.",
      image_url:
        "https://sweta-myteam-website-fm.netlify.app/static/media/avatar-arthur.098c2e26.jpg",
      position: "Founder of Crypto",
    },
  ];

  const sectionItems = [
    {
      id: 1,
      icon: <EngineeringOutlinedIcon sx={{ fontSize: 100 }} color="primary" />,
      sentence:
        "Solving world problems through various web applications using efficient programs and tools",
    },
    {
      id: 2,
      icon: <AllInclusiveIcon sx={{ fontSize: 100 }} color="primary" />,
      sentence:
        "Through team work, we collaborate and deliver quality projects of high standards",
    },
    {
      id: 3,
      icon: <PaidOutlinedIcon sx={{ fontSize: 100 }} color="primary" />,
      sentence: "Flexible payment plan is applicable to all our services",
    },
  ];

  const [currentPairIndex] = useState(0);
  const renderCards = () => {
    const pair1Index = currentPairIndex;
    const pair2Index = currentPairIndex + 2;

    return (
      <TransitionGroup>
        <CSSTransition key={pair1Index} classNames="card" timeout={500}>
          <Card>
            <CardContent>
              <h2>{cards[pair1Index].title}</h2>
              <p>{cards[pair1Index].content}</p>
            </CardContent>
          </Card>
        </CSSTransition>
        {pair2Index < cards.length && (
          <CSSTransition key={pair2Index} classNames="card" timeout={500}>
            <Card>
              <CardContent>
                <h2>{cards[pair2Index].title}</h2>
                <p>{cards[pair2Index].content}</p>
              </CardContent>
            </Card>
          </CSSTransition>
        )}
      </TransitionGroup>
    );
  };

  function handleFormSubmit(event) {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_49bsonr",
        "template_itbbmql",
        event.target,
        "7ObymWDiECp3Fahev",
        { to_email: "algeriachain@gmail.com" }
      )
      .then((response) => {
        console.log("Email sent successfully!", response.text);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });

    // Clear the form fields after submission if needed
    event.target.reset();
  }

  return (
    <>
      <div className={classes.pageWrap}>
        <Navbar navItems={navItem}>
          <Box className={classes.heroBox}>
            <Grid container spacing={6} className={classes.gridContainer}>
              <Grid item xs={12} md={7}>
                <Typography
                  variant="h3"
                  fontWeight={700}
                  className={classes.title}
                >
                  About Us
                </Typography>
                <Typography variant="h6" className={classes.subtitle}>
                Algeria Chain is a startup that uses blockchain technology to provide innovative solutions for real-world problems.
                With Algeria Chain, You can trust that your tracking needs are in good hands. 

                </Typography>
              </Grid>
              <Grid item xs={12} md={1}>
                <img
                  src="track.png"
                  alt="Img"
                  style={{ width: "580px", height: "auto" }} // add inline styles for the smaller image size
                />
              </Grid>
            </Grid>
          </Box>

          <Divider dark />
          <Box sx={{ flexGrow: 1, minHeight: "400px" }}>
            <Grid container className={classes.sectionGridContainer}>
              {sectionItems.map((item) => (
                <Grid
                  item
                  xs={12}
                  md={3.5}
                  minHeight={300}
                  key={item.id}
                  className={classes.sectionGridItem}
                >
                  {item.icon}
                  <Typography>{item.sentence}</Typography>
                </Grid>
              ))}
            </Grid>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              padding: "20px",
              alignItems: "center",
              justifyContent: "center",
              minHeight: "300px",
            }}
          >
            <Grid container spacing={2}>
              {reviews.map((review) => (
                <Grid item sm={12} md={4} key={review.id}>
                  <Card className={classes.testimonialCard}>
                    <CardContent>
                      <Typography className={classes.testimonialStatement}>
                        "{review.statement}"
                      </Typography>
                      <Box sx={{ display: "flex" }}>
                        <Avatar
                          src={review.image_url}
                          size="large"
                          className={classes.avatar}
                        />
                        <Box>
                          <Typography>{review.name}</Typography>
                          <Typography className={classes.testimonialPosition}>
                            {review.position}
                          </Typography>
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
          <Box className={classes.aboutUsContainer}>
            <Grid container spacing={6} className={classes.gridContainer}>
              <Grid item xs={12} md={5}>
                <img
                  src="https://as2.ftcdn.net/v2/jpg/02/91/22/93/1000_F_291229378_TfiyQrIPqpvmKvTREuWSZkxLGbb4eHEy.jpg"
                  alt="My Team"
                  className={classes.largeImage}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <Typography
                  variant="h3"
                  fontWeight={700}
                  className={classes.title}
                >
                  We build, We revive
                </Typography>
                <Typography className={classes.aboutUsSubtitle}>
                Our team is made up of experts in blockchain technology, logistics, and software development,
                 who are passionate about creating a better future through technology. We are
                 committed to delivering high-quality solutions that meet the needs of our clients. 
                 
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ width: "200px", fontSize: "16px" }}
                  href="#CONTACT US"
                >
                  CONTACT US
                </Button>
              </Grid>
            </Grid>
          </Box>
          <Grid
            container
            spacing={3}
            style={{ height: "100%", minHeight: "90vh", width: "100%" }}
          >
            <Grid
              item
              xs={false}
              sm={3}
              style={{
                height: "100%",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            ></Grid>

            <Grid
              item
              xs={12}
              sm={12}
              style={{
                height: "100%",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "scroll",
              }}
            >
              <br />
            </Grid>
          </Grid>
          <Divider />

          <Divider />
          <div style={{ spacing: "20px" }}>
            <Divider dark />

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "30px",
                marginBottom: "30px",
              }}
            >
              <Box className={classes.formContainer}>
                <Typography variant="h4" className={classes.formHeading}>
                  Contact Us
                </Typography>
                <Box
                  className={classes.form}
                  component="form"
                  noValidate
                  autoComplete="off"
                  onSubmit={handleFormSubmit}
                >
                  <TextField
                    name="fullName"
                    label="Full Name"
                    variant="outlined"
                    fullWidth
                    className={classes.inputField}
                  />

                  <TextField
                    name="email"
                    label="Email"
                    variant="outlined"
                    fullWidth
                    className={classes.inputField}
                  />

                  <TextField
                    name="subject"
                    label="Subject"
                    variant="outlined"
                    fullWidth
                    className={classes.inputField}
                  />

                  <TextareaAutosize
                    name="message"
                    aria-label="minimum height"
                    minRows={6}
                    placeholder="Enter a message"
                    className={classes.textArea}
                    spellCheck
                  />

                  <Button
                    variant="contained"
                    type="submit"
                    color="primary"
                    sx={{ width: "200px", fontSize: "16px" }}
                  >
                    Submit
                  </Button>
                </Box>
              </Box>
            </div>
            <Divider />
            

            <Box sx={{ flexGrow: 1 }} className={classes.footerContainer} id="CONTACT US">
              <Typography className={classes.footerText}>
                Contact us by{" "} 
              
              </Typography>
              <Typography className={classes.footerDate}>
                Phone: 123-456-7890
              </Typography>
              <Typography className={classes.footerDate}>
                Location: Batna, Algeria
              </Typography>
              <Box className={classes.socialIcons}>
               <FaFacebook />
               <FaTwitter />
              <FaInstagram />
              </Box>
            </Box>
          </div>
        </Navbar>
      </div>
    </>
  );
}
