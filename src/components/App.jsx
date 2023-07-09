import React from 'react';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';

export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  handleChange = event => {
    this.setState({ [event.currentTarget.name]: event.currentTarget.value });
  };

  addContact = data => {
    const contact = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    };

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  handleSubmit = event => {
    event.preventDefault();

    const contactNames = this.state.contacts.map(contact => contact.name);
    const currentName = this.state.name;

    if (contactNames.includes(currentName)) {
      alert(currentName + 'is already in contacts');
    }
    if (this.state.name.length > 0 || this.state.number.length > 0) {
      this.addContact();
      this.setState({ name: '', number: '' });
    } else {
      Notiflix.Notify.info('Заполните все поля');
    }
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getVisibleContacts = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const visibleContacts = this.getVisibleContacts();

    return (
      <>
        <div>
          <h2>Phonebook</h2>
          <form onSubmit={this.handleSubmit}>
            <label>
              Name
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
              />
            </label>
            <label>
              Number
              <input
                type="tel"
                name="number"
                value={this.state.number}
                onChange={this.handleChange}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
            </label>
            <button type="submit">Add contact</button>
          </form>
        </div>
        <div>
          <h2>Contacts</h2>
          <label>
            Find contacts by name
            <input
              type="text"
              value={this.state.filter}
              onChange={this.changeFilter}
            />
          </label>
          <ul>
            {visibleContacts.map(({ id, name, number }) => (
              <li key={id}>
                {name}: {number}
                <button type="button" onClick={() => this.deleteContact(id)}>
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}
