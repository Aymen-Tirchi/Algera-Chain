import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useStyles } from "../components/Styles";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import AboutUs from "../components/AboutUs";

export default function Home() {
  const classes = useStyles();
  const navItem = [];

  const [currentCard, setCurrentCard] = useState(0);

  const handleNextCard = () => {
    setCurrentCard((currentCard + 1) % cards.length);
  };

  const handlePrevCard = () => {
    setCurrentCard((currentCard + cards.length - 1) % cards.length);
  };

  return (
    <>
      <div className={classes.pageWrap}>
        <Navbar navItems={navItem}>
          <h1>This is the home page</h1>
          <Grid
            container
            spacing={3}
            style={{ height: "100%", minHeight: "90vh", width: "100%" }}
          >
            <Grid
              item
              xs={12}
              sm={6}
              style={{
                minHeight: "100%",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
            
              <img
                alt="."
                src="/track.png"
                style={{ width: "75%", height: "auto" }}
              />
            </Grid>
            

            <Grid
              item
              xs={12}
              sm={6}
              style={{
                minHeight: "100%",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "wrap",
                flexDirection: "column",
              }}
            >
              <h1 className={classes.pageHeading}>Set Roles</h1>
              
            </Grid>
          </Grid>
        </Navbar>
        <div>
        
        <h1>This is the description of what is Algeria Chain </h1>
        <p>Some more content here...</p>
        <h2> Contact us part</h2>
        <p>Phone: 123-456-7890</p>
        <p>Location: New York, NY</p>
      </div>
        <br />

                <AboutUs />
      </div>
    </>
  );
}
