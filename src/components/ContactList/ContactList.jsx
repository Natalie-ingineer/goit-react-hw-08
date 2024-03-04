import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useDispatch, useSelector } from "react-redux";
import {
  addCurrentContact,
  deleteContact,
  // updateContact,
} from "../../redux/contacts/operations";
import {
  selectCurrentContact,
  // selectContacts,
  selectVisibleContacts,
} from "../../redux/contacts/selectors";
import EditForm from "../EditForm/EditForm";
// import { useState } from "react";

export default function ContactList() {
  const dispatch = useDispatch();
  const contactsFilter = useSelector(selectVisibleContacts);

  const isEdit = useSelector(selectCurrentContact);

  return (
    <>
      {isEdit && <EditForm />}
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
            onClick={() => dispatch(addCurrentContact(contact))}
            // onChange={handleContactChange}
          ></Contact>
        ))}
      </ul>
    </>
  );
}
