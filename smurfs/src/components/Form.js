import React, { useContext } from 'react';
import smurfsContext from '../contexts/smurfsContext';

export default function Form() {
  const {handleChange, handleSubmit, formValues} = useContext(smurfsContext);

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input name="name" onChange={handleChange} value={formValues.name}/>
      </label> <br />
      <label>
        Age
        <input name="age" onChange={handleChange} value={formValues.age}/>
      </label> <br />
      <label>
        Height
        <input name="height" onChange={handleChange} value={formValues.height} />
      </label> <br />
      <button type='submit'>Add a Smurf</button>
    </form>
  );
}