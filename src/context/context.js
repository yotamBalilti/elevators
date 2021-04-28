import React, { createContext, useState } from "react";

export const ElevatorContext = createContext();
export const Provider = ({ children }) => {
  const [numOfElevators, setNumOfElevators] = useState(1);
  const [numOfFloors, setNumOfFloors] = useState(10);
  const [floorNames, setFloorNames] = useState([]);
  const [floors, setFloors] = useState([
    {
      name: "9th",
      id: "9",
      buttonText: "Call",
      color: "var(--button)",
    },
    {
      name: "8th",
      id: "8",
      buttonText: "Call",
      color: "var(--button)",
    },
    {
      name: "7th",
      id: "7",
      buttonText: "Call",
      color: "var(--button)",
    },
    {
      name: "6th",
      id: "6",
      buttonText: "Call",
      color: "var(--button)",
    },
    {
      name: "5th",
      id: "5",
      buttonText: "Call",
      color: "var(--button)",
    },
    {
      name: "4th",
      id: "4",
      buttonText: "Call",
      color: "var(--button)",
    },
    {
      name: "3rd",
      id: "3",
      buttonText: "Call",
      color: "var(--button)",
    },
    {
      name: "2nd",
      id: "2",
      buttonText: "Call",
      color: "var(--button)",
    },
    {
      name: "1st",
      id: "1",
      buttonText: "Call",
      color: "var(--button)",
    },
    {
      name: "Ground Floor",
      id: "0",
      buttonText: "Call",
      color: "var(--button)",
    },
  ]);

  const [elevators, setElevators] = useState([
    { id: 0, currentFloor: 0, free: true, height: 0, color: "black" },
    { id: 1, currentFloor: 0, free: true, height: 0, color: "black" },
    { id: 2, currentFloor: 0, free: true, height: 0, color: "red" },
    { id: 3, currentFloor: 0, free: true, height: 0, color: "black" },
    { id: 4, currentFloor: 0, free: true, height: 0, color: "black" },
  ]);

  // const setFloorsNames = () => {
  //   let floorName = "";

  //   for (let i = 0; i < numOfFloors; i++) {
  //     {
  //       i === 0
  //         ? (floorName = "Ground Floor")
  //         : i === 1
  //         ? (floorName = `${i}st`)
  //         : i === 2
  //         ? (floorName = `${i}nd`)
  //         : i === 3
  //         ? (floorName = `${i}rd`)
  //         : (floorName = `${i}th`);
  //     }
  //     floorNames.unshift(floorName);
  //   }
  // };

  // setFloorsNames();
  return (
    <ElevatorContext.Provider
      value={{
        numOfElevators,
        setNumOfElevators,
        numOfFloors,
        setNumOfFloors,
        floorNames,
        setFloorNames,
        floors,
        setFloors,
        elevators,
        setElevators,
      }}
    >
      {children}
    </ElevatorContext.Provider>
  );
};
