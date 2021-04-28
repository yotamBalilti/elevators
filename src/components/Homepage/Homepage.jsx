import React from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <Grid container className="homepage">
      <Grid item container className="homepage_content">
        <Typography component="h1" variant="h2">
          Welcome to the Elevators game
        </Typography>
        <Link to="/game">
          <button className="home_btn">start</button>
        </Link>
        <Grid item>
          <Typography component="h4" variant="body1">
            Yotam Balilti
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Homepage;
