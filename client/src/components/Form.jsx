import { useState } from "react";
import axios from "axios";
import { baseURL, config } from "../services";

function Form(props) { 
  const [content, setContent] = useState("");
    const [author, setAuthor] = useState("");
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const newPost = {
        author,
        content,
      }
      await axios.post('https://api.airtable.com/v0/appsJCXzqaQeG7qQ1', { fields: newPost }, config);
      props.setToggleFetch((curr)=> !curr); 
    } 
  
  return (
     
      <form onSubmit={handleSubmit}>
          <h4>Vote</h4>
          <label htmlFor="content">Content:</label>
          <input type="text" id="content" value={content} onChange={(e) => setContent(e.target.value)} />
          <label htmlFor="author">Author:</label>
          <input type="text" id="author" value={author} onChange={(e) => setAuthor(e.target.value)} />
          <button type="submit">Vote!</button>
        </form>
    
  )
}

export default Form;