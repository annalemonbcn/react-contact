import React from 'react'
import { Contact } from '../../models/contact.class'
import ContactComponent from '../pure/contact'

const ContactListComponent = () => {

  const defaultContact = new Contact('Anna', 'Esteve', 'aesteve8@gmail.com', false)

  const changeConnected = (id) => {
    console.log('TODO: Cambiar estado de un contact')
  }

  return (
    <div>
      <div>
        <h1>Users:</h1>
      </div>

      {/* TODO: Aplicar un For/Map para renderizar lista de contacts */}
      <ContactComponent contact = { defaultContact } />
    </div>
  )
}

export default ContactListComponent