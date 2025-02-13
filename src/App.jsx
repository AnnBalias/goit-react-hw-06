import { useEffect, useState } from 'react';
// import components
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
// import json
import contacts from "./contacts.json";
// import styles
import './App.css'
import { useDispatch, useSelector } from 'react-redux';
// import { addContact } from './redux/contactsSlice';


const App = () => {
  
  return (
    <div>
      <h1 className='header'>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default App
