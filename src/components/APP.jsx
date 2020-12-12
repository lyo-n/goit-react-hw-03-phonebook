import React, {Component} from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactList from './contacts/contacts';
import ContactForm from './contactForm/contactForm';
import Filter from './filter/filter';
import  './app/app.module.css';

export default class APP extends Component {
    state = {
        contacts: [
          {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
          {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
          {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
          {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
        ],
    
        filter: "",
    };
    componentDidMount() {
        const contacts = localStorage.getItem('contacts');
        const parsedContacts = JSON.parse(contacts);
    
        if (parsedContacts) {
          this.setState({ contacts: parsedContacts });
        }
    }
    componentDidUpdate(prevState) {
        const nextContacts = this.state.contacts;
        const prevContacts = prevState.contacts;
    
        if (nextContacts !== prevContacts) {
          localStorage.setItem('contacts', JSON.stringify(nextContacts));
        }
    }
    contactAdd = (quest) => {
        const searchName = this.state.contacts.map((ques) => ques.name).includes(quest.name);
        if (searchName) {
            alert (`Контакт с именем ${quest.name} уже существует`);
        } else if (quest.name.length === 0) {
            alert (`Заполните обязательные поля!!!`)
        } else {
            const contact = {
                ...quest, id: uuidv4(),
            };
            
            this.setState((prevent) =>({
                contacts: [...prevent.contacts, contact],
            }));
        }   
    };

    onFilter = (filter) => {
        this.setState({filter});
    };

    getContacts = () => {
        const {contacts, filter} = this.state;
        return contacts.filter((contacts) =>
        contacts.name.toLowerCase().includes(filter.toLowerCase())
        );
    };

    delContacts = (contactForId) => {
        this.setState((prevent) =>{
            return {
                contacts: prevent.contacts.filter(({id}) => id !== contactForId),
            };
        });
    };

    render () {
        const recorderContact = this.getContacts();
        const {filter} = this.state;
        return (
            <div>
                <h1>Phonebook</h1>
                <ContactForm addContact = {this.contactAdd}/>
                <h2>Contacts</h2>
                {(<Filter value={filter} changeFilter={this.onFilter}/>)}
                {recorderContact.length > 0 && (<ContactList contacts = {recorderContact} removeContact = {this.delContacts}/>)}
            </div>
        );
    }
}

