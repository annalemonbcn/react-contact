import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../../models/contact.class'

const ContactComponent = ({ contact }) => {

  let [isConnected,setConnected] = useState(false);

  // actualizamos el state
  const changeConnected = () => {
    setConnected(isConnected = !isConnected)
  }

  return (
    <div>
      <h2>
        Name: { contact.name }
      </h2>
      <h3>
        Surname: { contact.surname }
      </h3>
      <h4>
        Email: { contact.email }
      </h4>
      <h5>
        Is connected: {isConnected ? 'Contacto En Línea' : 'Contacto No Disponible' }
      </h5>

      <button onClick = { changeConnected }>
        Conectar/desconectar
      </button>
    </div>
  )
}

ContactComponent.propTypes = {
  contact: PropTypes.instanceOf(Contact)
}

export default ContactComponent
