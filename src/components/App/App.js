import { Component } from 'react';
import { nanoid } from 'nanoid';
import Form from '../Form/Form';
import Contacts from '../Contacts/Contacts';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  addContacts = (name, number) => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id: nanoid(), name, number }],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { contacts } = this.state;
    return (
      <div>
        <h1>Phonebook</h1>
        <Form onSubmit={this.addContacts} />
        <h2>Contacts</h2>

        {contacts.length > 0 && (
          <Contacts
            items={contacts}
            id={this.id}
            onDelete={this.deleteContact}
          />
        )}
      </div>
    );
  }
}
