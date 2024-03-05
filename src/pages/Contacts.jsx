import SearchBox from "../components/SearchBox/SearchBox";
import ContactForm from "../components/ContactForm/ContactForm";
import ContactList from "../components/ContactList/ContactList";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../redux/contacts/operations";
import { selectLoading, selectError } from "../redux/contacts/selectors";
import DocumentTitle from "../components/DocumentTitle";

export default function Contacts() {
  const dispatch = useDispatch();

  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <DocumentTitle>Phonebook</DocumentTitle>

      {loading && <p>Loading...</p>}
      {error && <p className="notification">Oops, ERROR 😨</p>}

      <>
        <SearchBox />
        <ContactForm />
        <ContactList />
      </>
    </>
  );
}
