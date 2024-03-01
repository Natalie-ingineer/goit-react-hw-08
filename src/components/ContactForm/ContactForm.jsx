import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import { selectContacts } from "../../redux/contacts/selectors";

const userSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name must be at least 3 symb long")
    .max(50, "Name to long")
    .required("Please, fill in the field!"),
  number: Yup.number()
    .min(0, "Number must be at least 3 symb long")
    .required("Please, fill in the field!"),
});

export default function ContactForm() {
  const usernameFieldId = useId();
  const numberFieldId = useId();
  const dispatch = useDispatch();

  // const contacts = useSelector((state) => state.contacts.items);
  // console.log(contacts);

  // const handleSubmit = (values, { resetForm }) => {
  //   dispatch(addContact({ values }));
  //   resetForm();
  // };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={userSchema}
      onSubmit={(contacts, actions) => {
        dispatch(addContact({ ...contacts }));
        actions.resetForm();
      }}
    >
      <Form className={css.form}>
        <div className={css.formWrap}>
          <label className={css.description} htmlFor={usernameFieldId}>
            Username
          </label>
          <Field
            className={css.fieldInput}
            type="text"
            name="name"
            id={usernameFieldId}
          ></Field>
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>
        <div className={css.formWrap}>
          <label className={css.description} htmlFor={numberFieldId}>
            Number
          </label>
          <Field
            className={css.fieldInput}
            type="number"
            name="number"
            id={numberFieldId}
          ></Field>
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>
        <button className={css.button} type="submit">
          Add user
        </button>
      </Form>
    </Formik>
  );
}
