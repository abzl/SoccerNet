function Match(props) {

  const { date, location, match } = props.match.fields;

  return (
    <div>
      <h4>{match}</h4>
      <h5>{date}</h5>
      <h6>{location}</h6>
  </div>
)
}

export default Match;