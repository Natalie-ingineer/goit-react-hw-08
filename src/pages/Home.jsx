import { useSelector } from "react-redux";
import DocumentTitle from "../components/DocumentTitle";
import { ErrorMessage } from "../components/ErrorMessage/ErrorMessage";
import { Loader } from "../components/Loader/Loader";
import { selectError, selectLoading } from "../redux/contacts/selectors";

const styles = {
  container: {
    minHeight: "calc(100vh - 50px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "azure",
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: "center",
  },
};

export default function Home() {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  return (
    <>
      {error && <ErrorMessage />}
      {loading && <Loader />}
      <DocumentTitle>Home</DocumentTitle>
      <div style={styles.container}>
        <h1 style={styles.title}>My Phonebook</h1>
      </div>
    </>
  );
}
