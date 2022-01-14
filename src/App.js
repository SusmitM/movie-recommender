
import './App.css';
import { useState } from "react";
import action1 from './images/Dark Knight.jpg';
import action2 from './images/lord of rings.jpg';
import comedy1 from './images/The chaos.jpg';
import comedy2 from './images/parasite.jpg';
import sci1 from './images/inception.jpg';
import sci2 from './images/spiderman.jpg';



const movieDB = {
  Action :
  [
    { Name: "The Dark Knight (2008)", rating: "⭐⭐⭐⭐⭐ /  5⭐", image:action1 },
    { Name:"The Lord of the Rings: The Return of the King (2003)" , rating:"⭐⭐⭐⭐ / 5⭐", image:action2 }

  ],
  Comedy:
  [
    { Name: "The Chaos Class (1975)", rating: "⭐⭐⭐⭐⭐ / 5⭐", image:comedy1  },
    { Name:"Parasite (2019)", rating:"⭐⭐⭐⭐ / 5⭐", image:comedy2  }

  ],

  SciFi:
  [
    { Name: "Inception (2010)", rating: "⭐⭐⭐⭐⭐ / 5⭐", image:sci1  },
    { Name:"Spider-Man: No Way Home (2021)" , rating:"⭐⭐⭐⭐ / 5⭐", image:sci2  }

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
