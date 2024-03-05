import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { selectVisibleContacts } from "../../redux/contacts/selectors";
import EditForm from "../EditForm/EditForm";
import { addCurrentContact } from "../../redux/contacts/contactSlice";
import toast from "react-hot-toast";

export default function ContactList() {
  const dispatch = useDispatch();
  const contactsFilter = useSelector(selectVisibleContacts);

  const isEdit = useSelector((state) => state.contacts.currentContact);

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
              dispatch(deleteContact(contact.id))
                .unwrap()
                .then(() => {
                  toast.success("Contact delete");
                })
                .catch(() => {
                  toast.error("Contact undelete");
                });
            }}
            onClick={() => dispatch(addCurrentContact(contact))}
          ></Contact>
        ))}
      </ul>
    </>
  );
}
