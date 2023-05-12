import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  circle: {
    position: "relative",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    margin: "10px",
    boxShadow: "inset 0 0 0 2px #fff",
    transformOrigin: "center",
    animation: "$fill 2.5s ease-in-out infinite",
  },
  circle1: {
    animationDelay: "0s",
  },
  circle2: {
    animationDelay: "-0.4s",
  },
  circle3: {
    animationDelay: "-0.6s",
  },
  circle4: {
    animationDelay: "-1.3s",
  },
  "@keyframes fill": {
    "0%": {
      transform: "scale(1)",
    },
    "50%": {
      boxShadow: "inset 0 0 0 2px #fff, inset 0 0 0 6px #1c1c1e",
      transform: "scale(1.5)",
    },
    "100%": {
      boxShadow: "inset 0 0 0 2px #fff, inset 0 0 0 6px #fff",
      transform: "scale(1)",
    },
  },
}));

export default function Loader() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={`${classes.circle} ${classes.circle1}`}></div>
      <div className={`${classes.circle} ${classes.circle2}`}></div>
      <div className={`${classes.circle} ${classes.circle3}`}></div>
      <div className={`${classes.circle} ${classes.circle4}`}></div>
    </div>
  );
}
