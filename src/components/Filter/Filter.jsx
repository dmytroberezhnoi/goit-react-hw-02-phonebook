import PropTypes from 'prop-types';
import css from './Filter.module.css';

export const Filter = ({ value, onChange }) => (
  <label className={css.filterLabel}>
    Find contacts by name
    <input
      className={css.inputLabel}
      type="text"
      value={value}
      onChange={onChange}
    />
  </label>
);

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
