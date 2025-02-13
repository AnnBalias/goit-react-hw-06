import { useId } from "react";
import { Field, Form, Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import css from "./ContactForm.module.css"
import { nanoid } from "nanoid";

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

const ContactForm = ({ handleAdd }) => {
    
    const initialValues = {
        name: "",
        number: ""
    }
    
    const nameFieldId = useId();
    const numberFieldId = useId();

    const handSub = (values, actions) => {
        handleAdd({
            id: nanoid(),
            name: values.name,
            number: values.number,
        })
        actions.resetForm();
    }

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handSub}
            validationSchema={check}>
            <Form className={css.addForm}>
                <div className={css.formInpBox}>
                    <label className={css.formLabel} htmlFor={nameFieldId}>
                        Name
                    </label>
                    <Field className={css.formField} type="text" name="name" />
                    <ErrorMessage name="name" component="p" className={css.error} />
                </div>
                <div className={css.formInpBox}>
                    <label className={css.formLabel} htmlFor={numberFieldId}>
                        Number
                    </label>
                    <Field className={css.formField} type="text" name="number" />
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