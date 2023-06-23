import { Component } from 'react';
import { ContactList } from './ContactList/ContactList';
import { ContactSection } from './ContactSection/ContactSection';
import { ContactsSerchField } from './ContactsSerchField/ContactsSerchField';
import { PhoneBookForm } from './PhoneBookForm/PhoneBookForm';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
    filter: '',
  };

  onInfoChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  onAddContact = e => {
    const { name, contacts } = this.state;
    e.preventDefault();
    const isExist = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    isExist
      ? alert(`${name} is already in contacts`)
      : this.setState(prevState => ({
          contacts: [
            ...prevState.contacts,
            {
              id: crypto.randomUUID(),
              name: prevState.name,
              number: prevState.number,
            },
          ],
          name: '',
          number: '',
        }));
  };
  handleContactsFilter = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  handleDeleteContact = id => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== id),
    });
  };
  render() {
    const { contacts, name, number, filter } = this.state;
    const filteredData = this.handleContactsFilter();
    return (
      <div>
        <PhoneBookForm
          nameField={name}
          numberField={number}
          onInfoChange={this.onInfoChange}
          addContact={this.onAddContact}
        />
        <ContactSection>
          <ContactsSerchField value={filter} onInfoChange={this.onInfoChange} />
          <ContactList
            contacts={filteredData}
            deleteContact={this.handleDeleteContact}
          />
        </ContactSection>
      </div>
    );
  }
}
