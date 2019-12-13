import React, { useContext } from 'react';
import smurfsContext from '../contexts/smurfsContext';

function SmurfsList() {
  const data = useContext(smurfsContext);

  // console.log(data);
  
  return (
    <div>
      {
        data.apiData.map(smurf => {
          return (
            <div key={smurf.id}>
              <h2>Name: {smurf.name}</h2>
              <p>Age: {smurf.age}</p>
              <p>Height: {smurf.height}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default SmurfsList;