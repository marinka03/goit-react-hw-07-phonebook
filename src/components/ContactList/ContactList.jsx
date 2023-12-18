import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectorContacts,
  selectorContactsFilter,
} from '../../redux/selectors';
import { fetchContacts } from '../../redux/operations';
import style from '../ContactList/ContactList.module.css';
import ContactItem from 'components/ContactItem/ContactItem';

function ContactList() {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector(selectorContacts);

  const contactsFtr = useSelector(selectorContactsFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <ul>
        {isLoading && <p>Loading numbers...</p>}
        {error && <p>{error}</p>}

        {contactsFtr?.length === 0 && !isLoading && (
          <p>There are no contacts found!</p>
        )}
        {contactsFtr?.length > 0 &&
          contactsFtr.map(({ id, name, number }) => (
            <li key={id} className={style.item}>
              <ContactItem name={name} number={number} id={id} />
            </li>
          )) }
      </ul>
    </div>
  );
}

export default ContactList;
