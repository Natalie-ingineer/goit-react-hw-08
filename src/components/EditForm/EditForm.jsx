import css from "./EditForm.module.css";
import { RiSaveLine } from "react-icons/ri";
import { MdOutlineCancel } from "react-icons/md";
import { updateCurrentContact } from "../../redux/contacts/operations";
import { useDispatch, useSelector } from "react-redux";
import { addCurrentContact } from "../../redux/contacts/contactSlice";
import toast from "react-hot-toast";

export default function EditForm() {
  const currentContactName = useSelector(
    (state) => state.contacts.currentContact.name
  );

  const currentContactNumber = useSelector(
    (state) => state.contacts.currentContact.number
  );

  const currentContactId = useSelector(
    (state) => state.contacts.currentContact.id
  );

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const valueName = e.target.elements.name.value;
    console.log(valueName);
    const valueNumber = e.target.elements.number.value;
    console.log(valueNumber);
    const valueId = e.target.elements.id.value;
    console.log(valueId);

    dispatch(
      updateCurrentContact({
        name: valueName,
        number: valueNumber,
        contactId: valueId,
      })
    )
      .unwrap()
      .then(() => {
        toast.success("Contact update!");
      })
      .catch(() => {
        toast.error("Contact don't update!");
      });

    dispatch(addCurrentContact(null));
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label>
        Edit name
        <input
          className={css.input}
          placeholder="Name"
          name="name"
          required
          defaultValue={currentContactName}
          autoFocus
        />
      </label>
      <label>
        Edit phone number
        <input
          className={css.input}
          placeholder="Phone Number"
          name="number"
          required
          defaultValue={currentContactNumber}
        />
        <input type="hidden" name="id" value={currentContactId} />
      </label>
      <div className={css.wrapBtn}>
        <button className={css.submitButton} type="submit">
          <RiSaveLine color="green" size="20px" />
        </button>
        <button
          className={css.deleteButton}
          type="button"
          onClick={() => dispatch(addCurrentContact(null))}
        >
          <MdOutlineCancel color="red" size="20px" />
        </button>
      </div>
    </form>
  );
}
