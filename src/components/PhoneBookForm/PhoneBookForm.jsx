import PropTypes from 'prop-types';
import { Form, FormTitle } from './PhoneBookForm.styled';

export const PhoneBookForm = ({
  nameField,
  numberField,
  onInfoChange,
  addContact,
}) => {
  return (
    <>
      <FormTitle>Phonebook</FormTitle>
      <Form>
        <span>Name:</span>
        <input
          type="text"
          value={nameField}
          onChange={onInfoChange}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <span>Number:</span>
        <input
          type="tel"
          name="number"
          value={numberField}
          onChange={onInfoChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button onClick={addContact} type="submit">
          Add contact
        </button>
      </Form>
    </>
  );
};

PhoneBookForm.propTypes = {
  nameField: PropTypes.string,
  numberField: PropTypes.string,
};
