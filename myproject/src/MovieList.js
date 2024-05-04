import React from 'react';
import './index.css'
const tablesytel={
     // border:'2px solid black',
      padding:'6px',
      textAlign:'left',
      }


function MovieList  ({ movies, selectedGenre }) {
  return (
    <div className="movie-list">
      <table style={tablesytel} id="table1">
        <thead id="tablehead">
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody id="tablebody">
          {movies.map((movie, index) => {
            if (!selectedGenre || movie.genre === selectedGenre) {
              return (
                <tr >
                  <td>{movie.title}</td>
                  <td>{movie.genre}</td>
                  <td>{movie.year}</td>
                </tr>
              );
            }
            return null;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MovieList;
