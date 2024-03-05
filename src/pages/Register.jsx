import { useSelector } from "react-redux";
import DocumentTitle from "../components/DocumentTitle";
import { ErrorMessage } from "../components/ErrorMessage/ErrorMessage";
import { Loader } from "../components/Loader/Loader";
import { RegisterForm } from "../components/RegisterForm/RegisterForm";
import { selectError, selectLoading } from "../redux/contacts/selectors";

export default function Register() {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  return (
    <div>
      {error && <ErrorMessage />}
      {loading && <Loader />}
      <DocumentTitle>Registration</DocumentTitle>
      <RegisterForm />
    </div>
  );
}
