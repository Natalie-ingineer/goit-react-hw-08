import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact, updateContact } from "../../redux/contacts/operations";
import { selectVisibleContacts } from "../../redux/contacts/selectors";

export default function ContactList() {
  const dispatch = useDispatch();
  const contactsFilter = useSelector(selectVisibleContacts);
  console.log(contactsFilter);

  return (
    <ul className={css.listContacts}>
      {contactsFilter.map((contact) => (
        <Contact
          key={contact.id}
          userId={contact.id}
          contact={contact.name}
          phonenumber={contact.number}
          onDelete={() => {
            dispatch(deleteContact(contact.id));
          }}
          onChange={() => dispatch(updateContact(contact))}
        ></Contact>
      ))}
    </ul>
  );
}
