import toast from 'react-hot-toast';
import style from '../ContactForm/ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/operations';
import { selectorContacts } from '../../redux/selectors';

function ContactForm() {
  const dispatch = useDispatch();
  const { items } = useSelector(selectorContacts);

  const handleSubmit = e => {
    e.preventDefault();
    const { name, number } = e.target;
    const contactData = {
      name: name.value,
      number: number.value,
    };

    const checkNewContact = contactName => {
      if (items.length >= 0) {
        return items.some(
          contact => contact.name.toLowerCase() === contactName.toLowerCase()
        );
      }
      return;
    };

    checkNewContact(contactData.name)
      ? toast.error(`${contactData.name} already is contact`)
      : dispatch(addContact(contactData));
    e.target.reset();
  };

  return (
    <form className={style.contact__form} onSubmit={handleSubmit}>
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
