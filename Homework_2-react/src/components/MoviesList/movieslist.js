import "./movieslist.css";

const MoviesList = () => {
  const subHeading = "My most popular movies";

  const movies = [
    { id: 1, name: 'Topgun' },
    { id: 2, name: 'Braveheart' },
    { id: 3, name: 'White man can jump'},
    { id: 4, name: 'Havana' },
    { id: 5, name: 'Terminator'},
    { id: 6, name: 'Supermen'},
    { id: 7, name: 'Dumb and dumber'},
    { id: 8, name: 'Titanic'},
    { id: 9, name: 'Rain Man'},
    { id: 10, name: 'Days of Thunder'},
  ];

  return (
    <div>
      <h3>Movies list component</h3>
      <p>{subHeading}</p>

      <hr />

      <ul className="movieContainer">
        Popular movies:
        {
            movies.map((movie) => {
          // when we iterate the returned element from
          // the iteration MUST have key property with UNIQUE value as it's value
                return (
                
                <li key={movie.id}>movieName: {movie.name} </li>

                )
          })
        
        }
      </ul>
    </div>
  )
};

export default MoviesList;
