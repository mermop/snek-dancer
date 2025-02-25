import React, { useState, useEffect } from "react";
import Snek from "./Snek";

const Farm = ({ farm }) => {
  const defaultValues = {
    micropythons: 0,
    curlyboi_snektions: 0,
    up: true
  }

  const [state, setState] = useState(defaultValues)
  const {name, micropythons, curlyboi_snektions, up} = state

  useEffect(() => {
    farm ? setState(farm) : null
    }, []
  )

  console.log("Data", state);
  const updateSneks = () => {
    let micros = state.micropythons;
    let boi = state.curlyboi_snektions;
    let uppy = state.up;
      if (micros < 10 ) {
        micros += 1;
        uppy = !uppy;
      } else  {
        micros = 0;
        boi += 1;
        uppy = !uppy;
      }
      setState(
        { ...state, micropythons: micros, curlyboi_snektions: boi, up: uppy }
      )
    console.log("New state: ", state)
  }

  console.log("Data", state);
  let micropython_array = [];
  let curlyboi = null;
  for (var i = 0; i < micropythons; i++) {
    micropython_array.push(<Snek size="micropython" length={5} up={i%2==0 ? state.up : !state.up}/>)
  }

  if(state.curlyboi_snektions > 0) {
    curlyboi = <Snek size="curlyboi" length={state.curlyboi_snektions}  up={state.up}/>
  }

  return(
    <div>
      <div>
        <h1>Welcome to {name} farm</h1>
        <p>You have collected {micropythons} micropythons</p>
        <button onClick={updateSneks}>Moar sneks, please!</button>
      </div>
      <h2>Micropythons</h2>
      <div className="micropythons">
        { micropython_array }
      </div>
      <h2>Curlyboi</h2>
      { curlyboi }
      <p>You have cultivated a curlyboi that is {curlyboi_snektions} units long. That's a solid effort!</p>
    </div>
  )
}

export default Farm;
