import style from '../ContactForm/ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';

function ContactForm() {
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const hendleSubmit = e => {
    e.preventDefault();
    const { name, number } = e.target;
    const contactData = {
      name: name.value,
      number: number.value,
    };

    const checkNewContact = contactName => {
      if (contacts.length >= 0) {
        return contacts.some(
          contact => contact.name.toLowerCase() === contactName.toLowerCase()
        );
      }
      return;
    };

    checkNewContact(contactData.name)
      ? alert(`${contactData.name} is already in contact`)
      : dispatch(addContact(contactData));
    e.target.reset();
  };

  return (
    <form className={style.contact__form} onSubmit={hendleSubmit}>
      <label className={style.name__label}>
        Name
        <input
          className={style.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>

      <label className={style.name__label}>
        Number
        <input
          className={style.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={style.add__contact__btn} type="submit">
        Add contact
      </button>
    </form>
  );
}

export default ContactForm;
