import React, { useContext } from 'react';
import smurfsContext from '../contexts/smurfsContext';

export default function Form() {
  // const data = useContext(smurfsContext);

  return (
    <form onSubmit={null}>
      <label>
        Name
        <input name="name" onChange={null} />
      </label>
      <label>
        Age
        <input name="age" onChange={null} />
      </label>
      <label>
        Height
        <input name="height" onChange={null} />
      </label>
    </form>
  );
}