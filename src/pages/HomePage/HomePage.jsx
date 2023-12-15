import ContactForm from 'components/ContactForm';
import React from 'react';
import style from './HomePage.module.css';

function HomePage() {
  return (

      <div className={style.container}>
      <h1 className={style.title}>Phonebook</h1>
      <p className={style['add-contact-text']}>
        This is your phone book. Quickly add new contacts...
      </p>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM804esPS1wqsxTHaK8wXq1p_wDtD15hJLUw&usqp=CAU"
        alt="Cat"
        className={style.picture}
      />
      <ContactForm />
    </div>
    
  );
}

export default HomePage;
