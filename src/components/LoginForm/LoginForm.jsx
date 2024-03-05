import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import toast from "react-hot-toast";

import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import css from "./LoginForm.module.css";
import Button from "@mui/material/Button";

const userSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(3, "Password must be at least 3 symb long")
    .max(50, "Password to long")
    .required("Please, fill in the field!"),
});

export const LoginForm = () => {
  const emailFieldId = useId();
  const passwordFieldId = useId();

  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={userSchema}
      onSubmit={(values) => {
        // same shape as initial values
        dispatch(logIn(values))
          .unwrap()
          .then(() => {
            toast.success("login success");
          })
          .catch(() => {
            toast.error("login error");
          });
      }}
    >
      <Form className={css.form}>
        <div className={css.wraper}>
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
          Log In
        </Button>
      </Form>
    </Formik>
  );
};
