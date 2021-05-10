import { useEffect } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import Nav from "./components/Nav";
import { baseURL, config } from "./services"
import './App.css';


function App() {
  useEffect(() => {
    const fetchMatches = async () => {
      
      const resp = await axios.get(baseURL, config);
      console.log(resp.data);
    }
    fetchMatches();
  }, [])

  return (
    <div className="App">
      <h1>SoccerNet</h1>
      <Nav />
      <Route exact path="/">
        <h3>text here</h3>
      </Route>
      <Route exact path="/new">
        <h3>text2</h3>
      </Route>
      <Route exact path="/edit/:id">
        <h3>text3</h3>
      </Route>
    </div>
  );
}

export default App;
