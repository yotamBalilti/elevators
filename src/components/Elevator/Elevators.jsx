import React, { useContext, useState } from "react";
import { Grid, Button } from "@material-ui/core";

import { ElevatorContext } from "../../context/context";
import Elevator from "./Elevator";

const Elevators = () => {
  const { floors, elevators, setFloors } = useContext(ElevatorContext);
  const [transitionTime, setTransitionTime] = useState(0.5);
  const defaultTransitionTime = 0.5;

  const findDistance = (ele, fl) => {
    return Math.abs(fl - ele.currentFloor);
  };

  const findClosestElevator = floor => {
    let minDist = 10;
    let closestElevator;
    {
      elevators.map(elevator => {
        let distance = Math.abs(floor - elevator.currentFloor);
        if (elevator.free === true && distance < minDist) {
          minDist = distance;
          closestElevator = elevator;
        }
      });
    }
    return closestElevator;
  };

  const updateButton = (btn, arr) => {
    arr[btn].buttonText = "Waiting";
    arr[btn].color = "red";
    setTimeout(() => {
      resetButton(btn, arr);
    }, 200);
  };

  const updateElevator = (ele, id, dist, arr) => {
    console.log("id:", id);
    ele.free = false;
    setTimeout(() => {
      console.log("after", ele);
      setTimeout(() => {
        ele.free = true;
        console.log("after2", ele);
      }, 2000);
    }, dist * defaultTransitionTime * 1000);
    console.log(ele);
    ele.currentFloor = id;
    ele.height = ele.currentFloor * 75;
  };

  const resetButton = (btn, arr) => {
    arr[btn].buttonText = "Call";
    arr[btn].color = "var(--button)";
  };

  const showTimer = (x, y) => {};

  const moveElevator = async e => {
    let newFloors = [...floors];
    let closestElevator = findClosestElevator(e.currentTarget.id);
    // showTimer(newFloors[e.currentTarget.id], closestElevator.id);
    // console.log("yyyyy:", e.currentTarget.id);
    let distance = findDistance(closestElevator, e.currentTarget.id);
    // console.log("closest distance is: ", distance);
    setTransitionTime(0.5 * distance);
    // console.log("trans distance is: ", transitionTime);
    // console.log("tran", transitionTime);
    // console.log("floor: ", e.currentTarget.id);
    // console.log("time: ", transitionTime);
    updateButton(9 - e.currentTarget.id, newFloors);
    updateElevator(closestElevator, e.currentTarget.id, distance, newFloors);
    setFloors(newFloors);
  };

  return (
    <Grid container className="elevators">
      <Grid item container className="floors_grid" sm={8}>
        {elevators.map(elevator => (
          <Grid item className="floor_col" sm key={elevator.id}>
            {floors.map(floor => (
              <Grid item className="floor_cell" sm key={floor.id}></Grid>
            ))}
            <Grid
              item
              className="eleicon"
              style={{
                bottom: `${elevator.height}px`,
                transition: `${transitionTime}s`,
              }}
              key={elevator.id}
            >
              <Elevator color={elevator.color} />
              {/* {elevator.id} */}
            </Grid>
          </Grid>
        ))}
      </Grid>
      <Grid item container className="floors" sm={2}>
        {floors.map(floor => (
          <Grid item container className="floor_button" sm>
            <Button
              className="floor_btn"
              style={{
                backgroundColor: `${floor.color}`,
                width: "100px",
                color: "#ffffff",
                textTransform: "capitalize",
                fontWeight: "300",
              }}
              onClick={e => moveElevator(e)}
              id={floor.id}
            >
              {floor.buttonText}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Elevators;
