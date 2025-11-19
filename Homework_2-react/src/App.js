
import './App.css';
import MoviesList from './components/MoviesList/movieslist.js';
import Academies from './components/Academies/academies.jsx';
import Counter from './components/Counter/counter.jsx'


function App() {

  const fullName = 'Tode Temov';

  const academiesArray = [
    {id:'1', name:'Web',description:'Frontend academy'},
    {id:'2', name:'Digital marketing',description:'Marketing strategies'},
    {id:'3', name:'QA',description:'Testing of software'}
]

  const name = 'Student name';

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

          <hr/>

          <Academies academies = {academiesArray} name = {name}/>

          <hr/>

          <Counter />
        </div>
      
    </div>
  );
}

export default App;
