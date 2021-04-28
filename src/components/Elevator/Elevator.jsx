import React from "react";
import { Grid } from "@material-ui/core";
import Icon from "../Icons/Icons";

const Elevator = ({ color }) => {
  return (
    <Grid container style={{ width: "30px" }}>
      <Icon fill={color} />
    </Grid>
  );
};

export default Elevator;
