import { ImTerminal } from 'react-icons/im';
import Contact from '../Contact/Contact';
import css from "./ContactList.module.css"

const ContactList = ({ contactArr, hendDelete }) => {

    return (
        <ul className={css.contList}>
            {!contactArr.length ? <p>No suitable contacts</p> :
             contactArr.map((item) => (        
                <li key={item.id} className={css.contBox}>
                    <Contact {...item} hendDelete={hendDelete} />
                </li>
            ))}
        </ul>
    )
}

export default ContactList;