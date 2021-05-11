import { useEffect, useState } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { baseURL, config } from "./services";
import './App.css';


function App() {
  const [matches, setMatches] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);

  useEffect(() => {
    const fetchMatches = async () => {
      
      const resp = await axios.get(baseURL, config);
      setMatches(resp.data.records);
    }
    fetchMatches();
  }, [toggleFetch]);

  return (
    <div className="App">
      <Nav />
      <h1>SoccerNet</h1>
      <Route exact path="/">
        <main>
          {matches.map((match) => (
            <p>{match.fields.date}</p>
          ))}
        </main>
      </Route>
      <Route path="/new">
        <h3>text2</h3>
      </Route>
      <Route path="/edit/:id">
        <h3>text3</h3>
      </Route>
    </div>
  );
}

export default App;
