
import './App.css';
import { useState } from "react";
import action1 from './images/Dark Knight.jpg';
import action2 from './images/lord of rings.jpg';



const movieDB = {
  Action :
  [
    { Name: "The Dark Knight (2008)", rating: "⭐⭐⭐⭐⭐ /  5⭐", image:action1 },
    { Name:"The Lord of the Rings: The Return of the King (2003)" , rating:"⭐⭐⭐⭐ / 5⭐", image:action2 }

  ],
  Comedy:
  [
    { Name: "The Chaos Class (1975)", rating: "⭐⭐⭐⭐ / 5⭐" },
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
     <div className="btnDiv">
       {Object.keys(movieDB).map((topic) =>(<button className="btn" onClick={ () => clickHandler(topic)}>{topic} </button>))}
     </div>
     <div >
       <ul >
         {movieDB[selectedTopic].map((movie)=>(
           <li className="listOutput">
             <div className="nameDiv">{movie.Name}</div>
             <div className="ratingDiv">{movie.rating} <img className="imgDiv" src={movie.image} height={200} width={170}  />
      </div>
           
           </li>
         ))}
       </ul>
     </div>
    </div>
  );
}

export default App;
