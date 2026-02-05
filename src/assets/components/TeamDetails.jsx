import React from "react";
import { useParams } from "react-router-dom";

export const TeamDetails = () => {
  //url -->:name --> fetch.. reuse

  const teamsName = useParams().name // .name -->/watch/:name
  //const movieName = useParams().id // .name -->/watch/:id

  return (
    <div style={{textAlign:"center"}}>
      <h1>playing....{teamsName}</h1>
    </div>
  );
};