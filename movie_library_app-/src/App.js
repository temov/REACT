
import './App.css';
import MoviesList from './components/MoviesList/movieslist.js';

function App() {

  const fullName = 'Tode Temov';
  const printMessage = (text) => {
    return text
  };
  return (
    <div className="App">
      <h1>Hello, my name is:{fullName}, and this is my first React app</h1>
      <hr/>

        <div className="container">
          <h3>Today date is: {new Date().toDateString()}</h3>
          <p>{printMessage('Below you have my 10 most popular movies')}</p>
        
        <hr/>

        
          <MoviesList />
        </div>
      
    </div>
  );
}

export default App;
