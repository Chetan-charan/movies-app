import { useState } from 'react';
import { Counter } from './Counter';



export function Movie({ Name, poster, Rating, summary }) {
  const styles = { color: Rating > 8 ? 'green' : 'crimson', fontWeight: 'bold',fontSize: '19px'};
  const [show, setShow] = useState(false);

  const summaryStyles = {
    display: show ? 'block' : 'none', paddingTop: '.5rem'
  };
  return (<div className="one-movi">
   
    <div>
      <img className="movie-poster" src={poster} alt={Name} />
    </div>
    <div className="content">
      <div className='mv'>
      <p className='content-movie'>{Name}</p>
      <p style={styles}>⭐ {Rating}</p>
      </div> 
      <div className='mv'>
      <Counter />
      <button type="button" className='btn btn-light show-button' onClick={() => setShow(show ? false : true)} >{show ? "Hide" : "Show"} description</button>
      
      </div> 
      {show ? <p className='content-movie-desc' style={summaryStyles}> {summary}</p> : ''}
    </div>
 
  </div>);
}
