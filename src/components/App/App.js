import { Component } from 'react';
import Form from '../Form/Form';
import Contacts from "../Contacts/Contacts"

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    return (
      <div>
        <Form />
        <Contacts />

      </div>
    );
  }
}


