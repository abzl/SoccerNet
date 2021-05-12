import { Link } from "react-router-dom";


function Nav() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/stats">Stats</Link>
      <Link to="/schedule">Schedule</Link>
      <Link to="/vote">Vote</Link>

    </nav>
  )
}

export default Nav;