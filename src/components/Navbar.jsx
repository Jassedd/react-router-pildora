import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav>
    <p>
        <Link to= "/">Home </Link>
    </p>
    <p>
        <Link to= "/contacts">Contacts </Link>
    </p>
  </nav>
  )
}

export default Navbar