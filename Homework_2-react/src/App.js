
import './App.css';
import MoviesList from './components/MoviesList/movieslist.js';
import Todos from './components/Todos/todos';
import Academies from './components/Academies/academies.jsx';


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

          <Todos fullname = 'Tode Temov' message = 'This todos are for' color = 'red' />

          <hr/>

          <Academies academies = {academiesArray} name = {name}/>
        </div>
      
    </div>
  );
}

export default App;
