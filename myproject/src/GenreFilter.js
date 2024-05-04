import React from 'react';
import './index.css'
//import MoviesList from './MovieList'
//const [value,setValue]=useState[""];
const sytel={
    textAlign: 'center',
    border: '1px solid #E1E1E1',
    borderRadius: '5px',
    transform: 'scale(1.5)',
    gap: '30px',
    backgroundColor: '#E1E1E1',
    display:'flex',
    cursor:'pointer',
}
const handleMouseEnter=(event)=>{
    event.target.backgroundColor=' #afadad';
}
const handleMouseLeave=(event)=>{
    event.target.backgroundColor='#E1E1E1';
}


 function GenreFilter({genres, onSelectGenre}){
//     function handleClick(genre){
//     console.log(`Selected genre: ${genre}`)
    

// }
    return(
        <>
        <div id="cont">
        <h1>Filter By Genre</h1>
        <div id="genre">
          
       {
        
        genres.map((genre,index)=>(
           < button 
           style={sytel} 
           onClick={() => onSelectGenre(genre)}
           onMouseEnter={handleMouseEnter} 
           onMouseLeave={handleMouseLeave}>
            {genre} </button>
            
        ))
       }
       </div>
       </div>
      
        </>
    )
}
export default GenreFilter;
