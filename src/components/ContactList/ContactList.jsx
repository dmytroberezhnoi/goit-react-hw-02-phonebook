import PropTypes from 'prop-types';
import { ContactListItem } from '../ContactListItem/ContactListItem';

import css from './ContactList.module.css';

export const СontactList = ({ visibleCont, deleteContacts }) => (
  <ul className={css.list}>
    {visibleCont.map(({ id, name, number }) => (
      <ContactListItem
        key={id}
        id={id}
        name={name}
        number={number}
        deleteContacts={deleteContacts}
      />
    ))}
  </ul>
);

СontactList.propTypes = {
  visibleCont: PropTypes.array,
  deleteContacts: PropTypes.func,
};
