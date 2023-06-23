import PropTypes from 'prop-types';

export const ContactsSerchField = ({ value, onInfoChange }) => {
  return (
    <>
      <span>Find contacts by name</span>
      <input type="text" name="filter" onChange={onInfoChange} value={value} />
    </>
  );
};

ContactsSerchField.propTypes = {
  value: PropTypes.string,
};
