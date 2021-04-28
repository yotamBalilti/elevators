import React, { useContext } from "react";
import { Grid } from "@material-ui/core";

import { ElevatorContext } from "../../context/context";

import Elevators from "../Elevator/Elevators";
const Building = () => {
  const { floors } = useContext(ElevatorContext);

  return (
    <Grid container className="App">
      <Grid item container className="building">
        <Grid item container className="floors" sm={2}>
          {floors.map(floor => (
            <Grid item container className="floor_names" sm key={floor.id}>
              {floor.name}
            </Grid>
          ))}
        </Grid>
        <Grid item container sm={10}>
          <Elevators />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Building;
