import SearchBox from "../components/SearchBox/SearchBox";
import ContactForm from "../components/ContactForm/ContactForm";
import ContactList from "../components/ContactList/ContactList";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../redux/contacts/operations";
import {
  selectContacts,
  selectLoading,
  selectError,
} from "../redux/contacts/selectors";

export default function Contacts() {
  const dispatch = useDispatch();

  const items = useSelector(selectContacts);

  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Phonebook</title>
      </Helmet>

      {loading && <p>Loading...</p>}
      {error && <p className="notification">Oops, ERROR 😨</p>}

      {items.length > 0 && JSON.stringify(items, null, 2) && (
        <>
          <ContactForm />
          <SearchBox />
          <ContactList />
        </>
      )}
    </>
  );
}
