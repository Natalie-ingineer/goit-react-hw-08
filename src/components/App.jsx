import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../redux/operations";
import { selectContacts, selectLoading, selectError } from "../redux/selectors";

export default function App() {
  const dispatch = useDispatch();

  const items = useSelector(selectContacts);

  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1>Phonebook</h1>

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
