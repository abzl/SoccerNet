import react from "react";

function Match(props) {

  const { date, location, match, logo, logo2 } = props.match.fields;

  return (
    <div>
      <img src={logo} alt="club-logo" />
      <img src={logo2} alt="club-logo" />

      <h4>{match}</h4>
      <h5>{date}</h5>
      <h6>{location}</h6>
  </div>
)
}

export default Match;