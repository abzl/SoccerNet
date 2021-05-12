import { useEffect, useState } from "react";
import axios from "axios";
import { Link, Route } from "react-router-dom";
import Match from "./components/Match";
import Stat from "./components/Stat"; 
import Nav from "./components/Nav";
import { baseURL, config } from "./services"
import Footer from "./components/Footer";
import Vote from "./components/Vote";
import Form from "./components/Form";
import './App.css';

function App() {
  const [matches, setMatches] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);
  const [posts, setPosts] = useState([]); 

  useEffect(() => {
    const fetchMatches = async () => {
      const resp = await axios.get(`${baseURL}/matches`, config);
      const sortMatches = resp.data.records.sort((a,b) => new Date(b.fields.date)-new Date(a.fields.date))
      setMatches(sortMatches);
      const voteResp = await axios.get('`${baseURL}/matches`, config)');
      setPosts(voteResp.data.records)
    }
    fetchMatches(); 
  }, [])

  return (
    <div className="App">
      <h1>SoccerNet</h1>
      <Nav />
      <Route exact path="/">
        <main>
          {matches.map((match) => (
            <Match match={match}
              setToggleFetch={setToggleFetch} />
          ))}
        </main>
      </Route>
      <Route path="/new">
      <Form setToggleFetch={setToggleFetch} />
      </Route>
      <Route path="/votes">
      <div className="vote-container">
      {posts.map((post) => (
        <Vote vote={post} />
      ))}
    </div>
      </Route>
      <Form />
      <Footer />
    </div>
  );
}

export default App;
