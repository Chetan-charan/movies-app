
import './App.css';
import { Movie } from './Movie';
// import { AddColor } from './AddColor';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Button from '@mui/material/Button';

function App() {
  const [movies,setMovies] = useState([
   
    {
      Name: 'Inception',
      poster: 'https://m.media-amazon.com/images/M/MV5BMTM0MjUzNjkwMl5BMl5BanBnXkFtZTcwNjY0OTk1Mw@@._V1_.jpg',
      Rating: 8.3,
      summary: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster."
    },
    {
      Name: 'Once Upon a Time... In Hollywood',
      poster: 'https://m.media-amazon.com/images/M/MV5BOTg4ZTNkZmUtMzNlZi00YmFjLTk1MmUtNWQwNTM0YjcyNTNkXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_UY1200_CR90,0,630,1200_AL_.jpg',
      Rating: 7.6,
      summary: "A faded television actor and his stunt double strive to achieve fame and success in the final years of Hollywood's Golden Age in 1969 Los Angeles."
    },
    
    {
      Name: 'Titanic',
      poster: 'https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg',
      Rating: 8.3,
      summary: "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic."
    },
    {
      Name: 'The Great Gatsby',
      poster: 'https://elabraveandtrue.files.wordpress.com/2021/05/10015929995_79899f4b44_b.jpg?w=1024',
      Rating: 7.2,
      summary: "A writer and wall street trader, Nick, finds himself drawn to the past and lifestyle of his millionaire neighbor, Jay Gatsby."
    },
    {
      Name: 'Interstellar',
      poster: 'https://pbs.twimg.com/profile_images/558490159834857472/gpoC7V0X_400x400.jpeg',
      Rating: 8.6,
      summary: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival."
    },{
      Name: 'Avatar',
      poster: 'https://cdna.artstation.com/p/assets/images/images/031/645/214/large/shreyas-raut-avatar-2.jpg?1604210989&dl=1',
      Rating: 7.8,
      summary: 'A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.'
    },
    {
      Name:'The Revenant',
      poster: 'https://m.media-amazon.com/images/M/MV5BMDE5OWMzM2QtOTU2ZS00NzAyLWI2MDEtOTRlYjIxZGM0OWRjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg',
      Rating: 8.1,
      sumamry: 'A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team.'
    },
    {
      Name: 'Shutter Island',
      poster: 'https://m.media-amazon.com/images/M/MV5BYzhiNDkyNzktNTZmYS00ZTBkLTk2MDAtM2U0YjU1MzgxZjgzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg',
      Rating: 8.2,
      summary: "In 1954, a U.S. Marshal investigates the disappearance of a murderer who escaped from a hospital for the criminally insane.",
    },
    {
      Name: 'Avengers: End Game',
      poster: 'https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0%2C0%2C540%2C810',
      Rating: 7.7,
      summary: "In the 1970s, a fierce rebel rises against brutal oppression and becomes the symbol of hope to legions of downtrodden people."
    },
  ]);


  const [Name,setMovie] = useState('');
  const [Rating,setRating] = useState('');
  const [summary,setDesc] = useState('');
  const [poster,setPic] = useState('');
  const [showAdd,setShowAdd] = useState(false);
  const addStyles = { display: showAdd ? 'block':'none' }
  const addStyles2 = { display: showAdd ? 'none':'block', width: '200px', marginLeft:'5rem' }
  return (
    <div className="App">
      <div className='header'>
        <h1>MOVIES</h1>
      </div>
      <button style={addStyles2} className='btn btn-primary btn-lg' onClick={() => { setShowAdd(true)}}>New Movie </button>
      <div style={addStyles}  >
        <div className='add-fields' >
    <TextField onChange={(event) => setMovie(event.target.value)}  id="standard-basic" label="Movie" variant="standard" />
    <TextField onChange={(event) => setRating(event.target.value)} id="standard-basic" label="Rating" variant="standard" />
    <TextField onChange={(event) => setDesc(event.target.value)} id="standard-basic" label="Summary" variant="standard" />
    <TextField onChange={(event) => setPic(event.target.value)} id="standard-basic" label="Poster url" variant="standard" />
    <Button onClick={() => {
      setMovies([...movies, {Name,Rating,summary,poster}]);
      setShowAdd(false);
      }} variant="outlined">Add Movie</Button>
      </div>
      </div>
      <div className='movi-list'>

      {movies.map(({Name,poster,Rating,summary}) => 
      <Movie 
      Name={Name} 
      poster={poster} 
      Rating={Rating} 
      summary={summary}
      key= {Name}
      />)}
     {/* <AddColor /> */}
     </div>
    </div>
  );
}





export default App;
