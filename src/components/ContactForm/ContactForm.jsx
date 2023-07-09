import React from 'react';
import PropTypes from 'prop-types';

import css from './ContactForm.module.css';

export class ContactForm extends React.Component {
  state = { name: '', number: '' };

  handleChange = event => {
    this.setState({ [event.currentTarget.name]: event.currentTarget.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const contactNames = this.props.contacts.map(contact => contact.name);
    const currentName = this.state.name;

    if (contactNames.includes(currentName)) {
      alert(currentName + ' is already in contacts');
      this.setState({ name: '', number: '' });
      return;
    }

    this.props.onSubmit(this.state);
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={css.contactForm}>
        <label className={css.label}>
          Name
          <input
            className={css.input}
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <label className={css.label}>
          Number
          <input
            className={css.input}
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <button type="submit" className={css.button}>
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
  contacts: PropTypes.array,
};
