import { useNavigate, useParams } from "react-router-dom"

function ContactDetails() {

    const {id} = useParams()

    const navigate = useNavigate()

    const handleContact = () =>{
        console.log("Enviado")
        return navigate("/")
    }

  return (
    <div>
        <h1>Pag de contactos</h1>
        <h3>mostrando info contacto {id}</h3>
        <button onClick={handleContact}>Enviar</button>
    </div>
  )
}

export default ContactDetails