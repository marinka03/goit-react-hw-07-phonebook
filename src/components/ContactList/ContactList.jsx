import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import style from '../ContactList/ContactList.module.css';

function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const contactsFilter = contacts.filter((contact = {}) =>
    contact.name?.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <ul>
        {contactsFilter.length === 0 && <p>There are no contacts found!</p>}
        {contactsFilter.length > 0 &&
          contactsFilter.map(({ id, name, number }) => (
            <li key={id} className={style.item}>
              <span className="contact-name">{name + ': '}</span>
              {number}
              <button
                className={style.delete__btn}
                type="reset"
                onClick={() => dispatch(deleteContact(id))}
              >
                Delete
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default ContactList;
