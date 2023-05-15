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

import { useState } from "react";
import emailjs from "emailjs-com";
import EngineeringOutlinedIcon from "@mui/icons-material/EngineeringOutlined";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";



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
      name: "LOUDINI Souad",
      statement:
        "As a front-end developer. I am always researching new technologies and techniques to improve the overall look of our web apps .I value collaboration with designers and backend developers to ensure the smooth integration of UI components with robust functionality.",
      image_url:
        "loudini.jpg",
    },
    {
      id: 2,
      name: "BENAMMAR khouloud",
      statement:
        "As a Solidity developer, I specialize in creating smart contracts and decentralized applications on the Ethereum blockchain. My focus is on writing efficient and secure code that can withstand attacks and protect users' assets",
      image_url:
        "khouloud.jpg",
    },
    {
      id: 3,
      name: "NOUACER Ikhlas",
      statement:
        "As a UI/UX designer, my passion is to create intuitive and engaging interfaces that meet the user's needs and exceed their expectations. I am always researching and testing design patterns and user flows to ensure a seamless and delightful experience",
      image_url:
      "ikhlas.jpg",
    },
    {
      id: 4,
      name: "TIRCHI Aymen",
      statement:
        "As a back-end developer, my focus is on building robust and scalable systems that power the frontend and provide a seamless user experience.I ensure that our products are reliable, efficient, and secure.I am committed to continuous learning, keeping up with the latest backend technologies ",
      image_url:
      "ayman.png",
    },
    {
      id: 5,
      name: "BOUKETHIR Youcef",
      statement:
        "As a front-end developer, I am passionate about creating user-friendly and responsive interfaces that provide a great experience for our users. I enjoy experimenting with new technologies and frameworks to continuously improve our products.",
      image_url:
      "team.png",
    },
  ];
  

  const sectionItems = [
    {
      id: 1,
      icon: <EngineeringOutlinedIcon sx={{ fontSize: 100, color: '#212529' }} color="primary" />,
      sentence:
        "Solving world problems through various web applications using efficient programs and tools",
    },
    {
      id: 2,
      icon: <AllInclusiveIcon sx={{ fontSize: 100, color: '#212529' }} color="primary" />,
      sentence:
        "Through team work, we collaborate and deliver quality projects of high standards",
    },
    {
      id: 3,
      icon: <PaidOutlinedIcon sx={{ fontSize: 100, color: '#212529' }} color="primary" />,
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
                  Blockchain in Supply Chain
                </Typography>
                <Typography variant="h6" className={classes.subtitle}>
                  We use blockchain technology to provide innovative solutions
                  for real-world problems. With Algeria Chain, you can trust
                  that your tracking needs are being handled with care. Now,
                  Tracking your product is just a click away.
                </Typography>
              </Grid>
              <Grid item xs={12} md={1}>
                <img
                  src="trackih.png"
                  alt="Img"
                  style={{ width: "510px", height: "auto" }} // add inline styles for the smaller image size
                />
              </Grid>
            </Grid>
          </Box>

          <Divider />
          <Box sx={{ flexGrow: 1, minHeight:"400px" }}>
            <Grid container className={classes.sectionGridContainer} >
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

          <Box className={classes.aboutUsContainer}>
            <Grid container spacing={6} className={classes.gridContainer}>
              <Grid item xs={12} md={5}>
                <img
                  src="team.png"
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
                  Our team is made up of experts in blockchain technology,
                  logistics, and software development, who are passionate about
                  creating a better future through technology. We are committed
                  to delivering high-quality solutions that meet the needs of
                  our clients.
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ width: "250px", fontSize: "16px" }}
                  href="#CONTACT US"
                >
                  CONTACT US
                </Button>
              </Grid>
            </Grid>
          </Box>
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

          <div style={{ spacing: "20px" }}>
            <Divider />

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

            <Box
              sx={{ flexGrow: 1 }}
              className={classes.footerContainer}
              id="CONTACT US"
            >
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
                <a href="https://github.com/Aymen-Tirchi/AlgeriaChain" target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
              </Box>
            </Box>
          </div>
        </Navbar>
      </div>
    </>
  );
}