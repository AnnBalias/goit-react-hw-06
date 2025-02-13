import { FaPhoneAlt } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import css from "./Contact.module.css"

const Contact = ({ name, number, id }) => {
    
    const dispatch = useDispatch()

    return (
        <>
            <div className={css.contInfoBox}>
                <div className={css.contInfoItem}>
                    <IoPerson />
                    <p>{name}</p>
                </div>
                <div className={css.contInfoItem}>
                    <FaPhoneAlt />
                    <p>{number}</p>
                </div>
            </div>
            <button onClick={() => dispatch(deleteContact(id))} className={css.contBtn}>
                Delete
            </button>
        </>
    )
}

export default Contact;
