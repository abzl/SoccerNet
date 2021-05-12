
function Vote(props) {

  return (
    <div key={props.vote.id}>
      <h3>{props.vote.fields.content}</h3>
      <p>{props.vote.fields.author}</p>
      <button>Delete</button>
    </div>
  )
}

export default Vote;