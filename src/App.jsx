import { useEffect, useState } from 'react';
// import components
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
// import json
import contacts from "./contacts.json";
// import styles
import './App.css'

const App = () => {
  const [contactsList, setContactList] = useState(() => {
    const localData = JSON.parse(localStorage.getItem("contacts"));
      if (localData) {
        return localData;
      }
    return contacts
  });
// ooooooooooooooooooooooooooo
  const handleAdd = (newCont) => {
    setContactList((prev) => [...prev, newCont])
	};
// ooooooooooooooooooooooooooo 
  const [search, setSearch] = useState("");

  const handSearch = contactsList.filter(item => item.name.toLowerCase().includes(search.toLocaleLowerCase()))

  const hendDelete = (id) => {
    const newContactsList = contactsList.filter((item) => item.id !== id);
    setContactList(newContactsList);
  }

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contactsList))
  }, [contactsList])
  
  return (
    <div>
      <h1 className='header'>Phonebook</h1>
      <ContactForm handleAdd={handleAdd} />
      <SearchBox search={search} setSearch={setSearch}/>
      <ContactList contactArr={ handSearch } hendDelete={hendDelete} />
    </div>
  );
};

export default App
