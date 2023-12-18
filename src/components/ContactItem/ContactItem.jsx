import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/operations';
import style from './ContactItem.module.css';

function ContactItem({ name, number, id }) {
  const dispatch = useDispatch();
  return (
    <>
      <span>{name + ': '}</span>
      {number}
      <button
        className={style.delete__btn}
        type="reset"
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </>
  );
}

export default ContactItem;
