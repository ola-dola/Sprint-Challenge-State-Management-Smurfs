import React from "react";

function Smurf({smurf}) {
  return (
    <div key={smurf.id} className="smurf">
      <h3>Name: {smurf.name}</h3>
      <p>Age: {smurf.age}</p>
      <p>Height: {smurf.height}</p>
    </div>
  );
}

export default Smurf;
