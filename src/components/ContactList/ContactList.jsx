import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { selectVisibleContacts } from "../../redux/contacts/selectors";

export default function ContactList() {
  const dispatch = useDispatch();
  const contactsFilter = useSelector(selectVisibleContacts);

  return (
    <ul className={css.listContacts}>
      {contactsFilter.map((contact) => (
        <Contact
          key={contact.id}
          userId={contact.id}
          contact={contact.name}
          phonenumber={contact.phone}
          onDelete={() => {
            dispatch(deleteContact(contact.id));
          }}
        ></Contact>
      ))}
    </ul>
  );
}
