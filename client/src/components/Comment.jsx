import { config } from "../services";
import axios from "axios";

function Comment(props) {

  const handleDelete = async () => {
    const commentUrl = `https://api.airtable.com/v0/appsJCXzqaQeG7qQ1/votes/${props.comment.id}`;
    await axios.delete(commentUrl, config)
    props.setToggleFetch((curr) => !curr);
}

  return (
    <div key={props.comment.id}>
      <h3>{props.comment.fields.content}</h3>
      <p>{props.comment.fields.author}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default Comment;