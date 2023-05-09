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
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { useState } from "react";

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

  const handleNextCard = () => {
    if (currentCard < cards.length - 1) {
      setCurrentCard(currentCard + 1);
    }
  };

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
                  What is Algeria Chain
                </Typography>
                <Typography variant="h6" className={classes.subtitle}>
                  Hire professionals who will help your business make 10X your
                  previous income. With over 5years experience in Marketing &
                  Business strategy, we are your best client.
                </Typography>
              </Grid>
              <Grid item xs={12} md={5}>
                <img
                  src="reserve/bnW1TuTV2YGcoh1HyWNQ_IMG_0207.JPG"
                  alt="Img"
                  className={classes.largeImage}
                />
              </Grid>
            </Grid>
          </Box>

          <Divider dark />
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
              <Card
                style={{
                  border: "1px solid red",
                  padding: "1rem",
                  margin: "1rem",
                }}
              >
                <CardContent>
                  <Typography variant="h5" component="h2">
                    {cards[currentCard].title}
                  </Typography>
                  <Typography color="textSecondary">
                    {cards[currentCard].content}
                  </Typography>
                </CardContent>
              </Card>
              <br />
            </Grid>
          </Grid>
          <Divider dark />
          <h1>Team Section</h1>
          <Divider dark />
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
                >
                  <TextField
                    label="Full Name"
                    variant="outlined"
                    fullWidth
                    className={classes.inputField}
                  />

                  <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    className={classes.inputField}
                  />

                  <TextField
                    label="Subject"
                    variant="outlined"
                    fullWidth
                    className={classes.inputField}
                  />

                  <TextareaAutosize
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

            <Box sx={{ flexGrow: 1 }} className={classes.footerContainer}>
              <Typography className={classes.footerText}>
                Contact us by{" "}
                <Link
                  href="https://appseed.us"
                  target="_blank"
                  underline="none"
                >
                  Email
                </Link>
              </Typography>
              <Typography className={classes.footerDate}>
                Phone: 123-456-7890
              </Typography>
              <Typography className={classes.footerDate}>
                Location: Batna, Algeria
              </Typography>
            </Box>
          </div>
        </Navbar>

        <br />
      </div>
    </>
  );
}
