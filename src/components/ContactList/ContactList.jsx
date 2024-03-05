import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import {
  // selectCurrentContact,
  selectVisibleContacts,
} from "../../redux/contacts/selectors";
import EditForm from "../EditForm/EditForm";
import { addCurrentContact } from "../../redux/contacts/contactSlice";
// import { useState } from "react";

export default function ContactList() {
  const dispatch = useDispatch();
  const contactsFilter = useSelector(selectVisibleContacts);

  const isEdit = useSelector((state) => state.contacts.currentContact);
  console.log(isEdit);

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
