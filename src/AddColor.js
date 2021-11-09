import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { ColorBox } from "./ColorBox";

export function AddColor() {

  const [colors, setColors] = useState(['teal', 'orange', 'lavender']);


  let [color, setColor] = useState('pink');
  const Styles = { backgroundColor: color };
  return <div>
    <div className='Add-color'>
      <TextField value={color} style={Styles} onChange={(event) => setColor(event.target.value)} id="standard-basic" label="Enter a color" variant="standard" />
      <Button onClick={() => setColors([...colors, color])} variant="outlined">Add color</Button>
      {colors.map((clr, index) => <ColorBox color={clr} key={index} />)}
    </div>
  </div>;
}
