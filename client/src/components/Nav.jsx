import { Link } from "react-router-dom";


function Nav() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/">Stats</Link>
      <Link to="/">Schedule</Link>
    </nav>
  )
}



export default Nav;