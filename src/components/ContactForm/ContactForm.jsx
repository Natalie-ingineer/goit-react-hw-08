import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
// import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";

import toast from "react-hot-toast";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";

import { Button } from "@mui/material";

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

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={userSchema}
      onSubmit={(contacts, actions) => {
        dispatch(addContact({ ...contacts }))
          .unwrap()
          .then(() => {
            toast.success("New contact add success");
          })
          .catch(() => {
            toast.error("New contact don't add");
          });
        actions.resetForm();
      }}
    >
      <Form className={css.form}>
        <div className={css.wraper}>
          <div className={css.formWrap}>
            <label className={css.description} htmlFor={usernameFieldId}>
              Name contact
            </label>

            <Field
              className={css.fieldInput}
              type="text"
              name="name"
              id={usernameFieldId}
              placeholder="Please, write name new contact!"
            ></Field>
            <ErrorMessage className={css.error} name="name" component="span" />
          </div>
          <div className={css.formWrap}>
            <label className={css.description} htmlFor={numberFieldId}>
              Phone number
            </label>
            <Field
              className={css.fieldInput}
              type="number"
              name="number"
              id={numberFieldId}
              placeholder="Please, write phone number new contact!"
            ></Field>
            <ErrorMessage
              className={css.error}
              name="number"
              component="span"
            />
          </div>
        </div>

        <Button variant="outlined" type="submit">
          <AddIcCallIcon />
        </Button>

        {/* <Button variant="outlined" type="submit" className={css.btn}>
          Register
        </Button> */}
      </Form>
    </Formik>
  );
}
