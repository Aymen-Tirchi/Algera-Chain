import React from "react";
import Navbar from "../components/Navbar";
import { useStyles } from "../components/Styles";
import Grid from "@material-ui/core/Grid";


export default function Home() {
  const classes = useStyles();
  const navItem = [];

  return (
    <>
      <div className={classes.pageWrap}>
        <Navbar navItems={navItem}>
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
                // change and animation would be here
              >
               
              <h1 className={classes.pageHeading}>  . </h1>
                        
            </Grid>
          </Grid>
        </Navbar>
        <br />

         
      </div>
    </>
  );
}
