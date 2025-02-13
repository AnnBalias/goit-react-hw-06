import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from "./ContactList.module.css"

const ContactList = () => {

    const contacts = useSelector(state => state.contacts.items);
    const filter = useSelector(state => state.filter.name) || "";

    const filteredData = contacts.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()))

    return (
        <ul className={css.contList}>
            {!filteredData.length ? <p>No suitable contacts</p> :
             filteredData.map((item) => (        
                <li key={item.id} className={css.contBox}>
                    <Contact {...item} />
                </li>
            ))}
        </ul>
    )
}

export default ContactList;