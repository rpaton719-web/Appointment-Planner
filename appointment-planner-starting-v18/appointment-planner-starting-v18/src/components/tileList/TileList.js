import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = (props) => {
  const array = props.contacts;
  array.map((object, index) => {
    const { name, ...description } = object;
    return (
      <div>
        <Tile name={name} description={description} key={index} />
      </div>
    );
  });
};
