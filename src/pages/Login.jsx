import { useSelector } from "react-redux";
import DocumentTitle from "../components/DocumentTitle";
import { ErrorMessage } from "../components/ErrorMessage/ErrorMessage";
import { Loader } from "../components/Loader/Loader";
import { LoginForm } from "../components/LoginForm/LoginForm";
import { selectError, selectLoading } from "../redux/contacts/selectors";

export default function Login() {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  return (
    <div>
      {error && <ErrorMessage />}
      {loading && <Loader />}
      <DocumentTitle>Login</DocumentTitle>
      <LoginForm />
    </div>
  );
}
