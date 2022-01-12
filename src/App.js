
import './App.css';
import { useState } from "react";


const movieDB = {
  Action :
  [
    { Name: "The Dark Knight (2008)", rating: "9/10" },
    { Name:"The Lord of the Rings: The Return of the King (2003)" , rating:"8.9/10" }

  ],
  Comedy:
  [
    { Name: "The Chaos Class (1975)", rating: "9.3/10" },
    { Name:"Parasite (2019)", rating:"8.6/10" }

  ],

  SciFi:
  [
    { Name: "Inception (2010)", rating: "8.8/10" },
    { Name:"Spider-Man: No Way Home (2021)" , rating:"8.8/10" }

  ]

};

function App() {
  const [selectedTopic,setTopic] = useState("Action");
  function clickHandler(topic){
      setTopic(topic);
     
   }
  
  return (
    <div className="App">

      <div className="Header">
     <h1>Movie Recommender</h1>
     </div>
     <div className="btnList">
       {Object.keys(movieDB).map((topic) =>(<button onClick={ () => clickHandler(topic)}>{topic}</button>))}
     </div>
     <div className="listOutput">
       <ul>
         {movieDB[selectedTopic].map((movie)=>(
           <li>
             <div>{movie.Name}</div>
             <div>{movie.rating}</div>

           </li>
         ))}
       </ul>
     </div>
    </div>
  );
}

export default App;
