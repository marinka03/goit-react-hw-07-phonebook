import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { contactsFilter, selectorContacts } from '../../redux/selectors';
import { deleteContact, fetchContacts } from '../../redux/operations';
import style from '../ContactList/ContactList.module.css';

function ContactList() {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector(selectorContacts);

  const contacts = useSelector(contactsFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <ul>
        {isLoading && <p>Loading numbers...</p>}
        {error && <p>{error}</p>}

        {contacts?.length === 0 && !isLoading && (
          <p>There are no contacts found!</p>
        )}
        {contacts?.length > 0 &&
          contacts.map(({ id, name, number }) => (
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
