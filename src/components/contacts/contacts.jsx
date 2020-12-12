import React from 'react';
import propTypes from 'prop-types';
import styles from './contacts.module.css';

const ContactList = ({contacts, removeContact}) => (
    <ul className={styles.list}>
       {contacts.map((contact) => (
       <li key={contact.id} className={styles.item}>
           {contact.name + ": " + contact.number}
           {<button className={styles.btn} type="button" name="delete" onClick={() => removeContact(contact.id)}>Delete</button>}
       </li>
       ))} 
    </ul>
);  

ContactList.propTypes = {
    removeContact: propTypes.func.isRequired,
    contacts: propTypes.arrayOf(propTypes.shape({
        id: propTypes.string.isRequired,
        name: propTypes.string.isRequired,
        number: propTypes.string.isRequired,
    })),
}

export default ContactList;
