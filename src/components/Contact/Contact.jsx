import { FaPhoneAlt } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import css from "./Contact.module.css"

const Contact = ({name, number, id, hendDelete}) => {
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
            <button onClick={() => hendDelete(id)} className={css.contBtn}>
                Delete
            </button>
        </>
    )
}

export default Contact;