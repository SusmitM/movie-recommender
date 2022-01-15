
import './App.css';
import { useState } from "react";
import action1 from './images/Dark Knight.jpg';
import action2 from './images/lord of rings.jpg';
import comedy1 from './images/The chaos.jpg';
import comedy2 from './images/parasite.jpg';
import sci1 from './images/inception.jpg';
import sci2 from './images/spiderman.jpg';
import crime1 from './images/crime1.jpg';
import crime2 from './images/crime2.jpg';
import rom1 from './images/rom1.jpg';
import rom2 from './images/rom2.jpg';



const movieDB = {
  Action :
  [
    { Name: "The Dark Knight (2008)", rating: "⭐⭐⭐⭐⭐ /  5⭐", image:action1 },
    { Name:"The Lord of the Rings: The Return of the King (2003)" , rating:"⭐⭐⭐⭐ / 5⭐", image:action2 }

  ],
  Crime :
  [
    { Name: "Jai Bhim (2021)", rating: "⭐⭐⭐⭐⭐ /  5⭐", image:crime1 },
    { Name:"The Godfather (1972)" , rating:"⭐⭐⭐⭐ / 5⭐", image:crime2 }

  ],
  Comedy:
  [
    { Name: "The Chaos Class (1975)", rating: "⭐⭐⭐⭐⭐ / 5⭐", image:comedy1  },
    { Name:"Parasite (2019)", rating:"⭐⭐⭐⭐ / 5⭐", image:comedy2  }

  ],
  Romance:
  [
    { Name: "The French Dispatch (2021)", rating: "⭐⭐⭐⭐⭐ / 5⭐", image:rom1  },
    { Name:" Titanic (1997)" , rating:"⭐⭐⭐⭐ / 5⭐", image:rom2  }

  ],
  

  SciFi:
  [
    { Name: "Inception (2010)", rating: "⭐⭐⭐⭐⭐ / 5⭐", image:sci1  },
    { Name:"Spider-Man: No Way Home (2021)" , rating:"⭐⭐⭐⭐ / 5⭐", image:sci2  }

  ]

};

function App() {
  const [selectedTopic,setTopic] = useState("Action");
  const [darkMode, setDarkMode] = useState(true);
  function clickHandler(topic){
      setTopic(topic);
     
   }
  
  return (
      

      <div width="100vh" className={darkMode ? "dark" : "light"}>
         <h1 className="Header">Movie Recommender</h1>
       <div className="container">
        <span style={{ color: darkMode ? "grey" : "yellow" }}>☀︎</span>
        <div className="switch-checkbox">
          <label className="switch">
            <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
            <span className="slider round"> </span>
          </label>
        </div>
        <span style={{ color: darkMode ? "#c96dfd" : "grey" }}>☽</span>
    
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
     <h3>Made with ❤️ by Susmit </h3>
    </div>
    
  );
}

export default App;
