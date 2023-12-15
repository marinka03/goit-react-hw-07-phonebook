import ContactList from 'components/ContactList';
import React from 'react';
import style from './ContactPage.module.css';

function ContactsPage() {
  return (
    <div className={style.wrapper}>
      <h2>Contacts:</h2>
      <ContactList />
    </div>
  );
}

export default ContactsPage;
