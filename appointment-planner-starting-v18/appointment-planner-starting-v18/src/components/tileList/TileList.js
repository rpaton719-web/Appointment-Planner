import React from "react";
import { Tile } from "../tile/Tile";
import { RelativeRoutingType } from "react-router-dom";

export const TileList = (props) => {
  const array = props.arrayProp;

  return (
    <div>
      {array.map((object, index) => {
        const { name, ...description } = object;
        return <Tile name={name} description={description} key={index} />;
      })}
    </div>
  );
};
