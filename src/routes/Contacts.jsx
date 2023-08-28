import { Link } from "react-router-dom"

function Contacts() {
  return (
    <div>
        <h1>Estos son los contactos</h1>
        <p>
            <Link to="/contacts/1" >Info contacto 1</Link>
        </p>
        <p>
            <Link to="/contacts/2" >Info contacto 2</Link>
        </p>
        <p>
            <Link to="/contacts/3" >Info contacto 3</Link>
        </p>
    </div>
  )
}

export default Contacts