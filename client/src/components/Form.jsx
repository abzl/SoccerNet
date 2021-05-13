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
    // id,
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
      <h4>Leave your  comments</h4>
   
      <form onSubmit={handleSubmit}>
    

          <label htmlFor="content">Content:</label>
          <input type="text" id="content" value={content} onChange={(e) => setContent(e.target.value)} />
          <label htmlFor="author">Author:</label>
          <input type="text" id="author" value={author} onChange={(e) => setAuthor(e.target.value)} />
          <button type="submit">Vote!</button>
      </form>
      </div>
    
  )
}

export default Form;