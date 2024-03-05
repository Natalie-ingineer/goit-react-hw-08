import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";

import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import css from "./RegisterForm.module.css";
import Button from "@mui/material/Button";

const userSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name must be at least 3 symb long")
    .max(50, "Name to long")
    .required("Please, fill in the field!"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(3, "Password must be at least 3 symb long")
    .max(50, "Password to long")
    .required("Please, fill in the field!"),
});

export const RegisterForm = () => {
  const usernameFieldId = useId();
  const emailFieldId = useId();
  const passwordFieldId = useId();

  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      validationSchema={userSchema}
      onSubmit={(values) => {
        // same shape as initial values
        dispatch(register(values));
        console.log(values);
      }}
    >
      <Form className={css.form}>
        <div className={css.wraper}>
          <div className={css.formWrap}>
            <label className={css.description} htmlFor={usernameFieldId}>
              Username
            </label>
            <Field
              className={css.fieldInput}
              type="text"
              name="name"
              id={usernameFieldId}
              placeholder="Please, write your name!"
            ></Field>
            <ErrorMessage className={css.error} name="name" component="span" />
          </div>
          <div className={css.formWrap}>
            <label className={css.description} htmlFor={emailFieldId}>
              Email
            </label>
            <Field
              className={css.fieldInput}
              type="email"
              name="email"
              id={emailFieldId}
              placeholder="Please, write your email!"
            ></Field>
            <ErrorMessage className={css.error} name="email" component="span" />
          </div>
          <div className={css.formWrap}>
            <label className={css.description} htmlFor={passwordFieldId}>
              Password
            </label>
            <Field
              className={css.fieldInput}
              type="password"
              name="password"
              id={passwordFieldId}
              placeholder="Please, write your password!"
            ></Field>
            <ErrorMessage
              className={css.error}
              name="password"
              component="span"
            />
          </div>
        </div>
        <Button variant="outlined" type="submit" className={css.btn}>
          Register
        </Button>
      </Form>
    </Formik>
  );
};
