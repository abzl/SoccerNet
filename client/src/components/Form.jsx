import { useState } from "react";
import axios from "axios";
import { baseURL, config } from "../services";

function Form(props) { 
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [id, setId] = useState(1);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      author,
      content,
    };

    await axios.post('https://api.airtable.com/v0/appsJCXzqaQeG7qQ1/votes', { fields: newPost }, config);
    props.setToggleFetch((curr) => !curr);
    setContent('');
    setAuthor('');

  }
  
  return (
    <div>
      <h2>Champions League Final</h2>
      <h3>Man. City vs Chelsea</h3>
      <h5>Sat. May 29th</h5>
      <h4>Leave your  comments</h4>
  
      <form onSubmit={handleSubmit}>
        <div className="com-box">
          <label htmlFor="comment"></label>
          <input type="text" id="comment" placeholder="Your name..."value={content} onChange={(e) => setContent(e.target.value)} />
        </div>
        <div className="aut-box">
          <label htmlFor="author"></label>
          <input type="text" id="name" placeholder="Your comment here..." value={author} onChange={(e) => setAuthor(e.target.value)} />
        </div>
        <button type="submit">Submit!</button>
      </form>
    </div>
    
  )
}

export default Form;