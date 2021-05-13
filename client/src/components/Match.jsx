function Match(props) {

  const { date, location, match, logo, logo2,logo3, logo4 } = props.match.fields;
  console.log(logo);
  return (
    <div>
      <img src={logo} alt="" />
      <img src={logo2} alt="" />

      <h4>{match}</h4>
      <h5>{date}</h5>
      <h6>{location}</h6>
  </div>
)
}

export default Match;