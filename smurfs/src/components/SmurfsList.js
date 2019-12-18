import React, { useContext } from 'react';
import smurfsContext from '../contexts/smurfsContext';
import Smurf from './Smurf';

function SmurfsList() {
  const data = useContext(smurfsContext);
  
  return (
    <div className="smurfs-container" >
      {
        data.apiData.map(smurf => {
          return <Smurf smurf={smurf} key={smurf.id} />;
        })
      }
    </div>
  )
}

export default SmurfsList;