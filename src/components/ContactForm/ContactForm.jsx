import { useId } from "react";
import { useDispatch } from "react-redux";
import { Field, Form, Formik, ErrorMessage } from 'formik';
import { nanoid } from "nanoid";
import * as Yup from 'yup'
import { addContact } from "../../redux/contactsSlice";
import css from "./ContactForm.module.css"

const check = Yup.object({
    name: Yup.string()
        .trim()
        .min(3, "Too short!")
        .max(30, "Too long!")
        .required("Required")
        .matches(/^[A-Za-z\s]+$/, 'Only letters and spaces can be entered')
    ,
    number: Yup.string()
        .trim()
        .min(9, "Too short!")
        .max(9, "Too long!")
        .required("Required")
        .matches(/^[0-9]+-/, "Number must contain only digits" )
})

const ContactForm = () => {

    const dispatch = useDispatch();
    const handSub = (values, actions) => {
        const newCont = {
            id: nanoid(),
            name: values.name,
            number: values.number,
        }
        dispatch(addContact(newCont));
        actions.resetForm();
    }
    
    const nameFieldId = useId();
    const numberFieldId = useId();

    return (
        <Formik
            onSubmit={handSub}
            validationSchema={check}
            initialValues={{ name: "", number: "" }}>
            <Form className={css.addForm}>
                <div className={css.formInpBox}>
                    <label className={css.formLabel} htmlFor={nameFieldId}>
                        Name
                    </label>
                    <Field
                        className={css.formField}
                        id={nameFieldId}
                        type="text"
                        name="name"
                    />
                    <ErrorMessage name="name" component="p" className={css.error} />
                </div>
                <div className={css.formInpBox}>
                    <label className={css.formLabel} htmlFor={numberFieldId}>
                        Number
                    </label>
                    <Field
                        className={css.formField}
                        id={numberFieldId}
                        type="text"
                        name="number"
                    />
                    <ErrorMessage name="number" component="p" className={css.error} />
                </div>
                <button type='submit' className={css.formBtn}>
                    Add contact
                </button>
            </Form>
        </Formik>
    );
}

export default ContactForm;