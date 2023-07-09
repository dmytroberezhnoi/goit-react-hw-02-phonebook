import PropTypes from 'prop-types';
import css from './ContactListItem.module.css';

export const ContactListItem = ({ id, name, number, deleteContacts }) => (
  <li className={css.listItem} key={id}>
    {name}: {number}
    <button
      className={css.button}
      type="button"
      onClick={() => deleteContacts(id)}
    >
      Delete
    </button>
  </li>
);

ContactListItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  deleteContacts: PropTypes.func,
};
