import css from "./EditForm.module.css";
import { RiSaveLine } from "react-icons/ri";
import { MdOutlineCancel } from "react-icons/md";
import { updateCurrentContact } from "../../redux/contacts/operations";
// import { selectCurrentContact } from "../../redux/contacts/selectors";
import { useDispatch, useSelector } from "react-redux";
import { addCurrentContact } from "../../redux/contacts/contactSlice";

// export default function EditForm() {
//   const currentContactName = useSelector(
//     (state) => state.contacts.currentContact.name
//   );
//   // console.log(currentContactName);
//   const currentContactNumber = useSelector(
//     (state) => state.contacts.currentContact.number
//   );
//   // console.log(currentContactNumber);

//   const currentContactId = useSelector(
//     (state) => state.contacts.currentContact.id
//   );
//   // console.log(currentContactId);

//   const dispatch = useDispatch();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const valueName = e.target.elements.name.value;
//     console.log(valueName);
//     const valueNumber = e.target.elements.number.value;
//     console.log(valueNumber);
//     const valueId = e.target.elements.id.value;
//     console.log(valueId);
//     dispatch(updateCurrentContact({ valueName, valueNumber, valueId }));
//     dispatch(addCurrentContact(null));
//   };

//   return (
//     <form className={css.form} onChange={handleSubmit}>
//       <input
//         className={css.input}
//         placeholder="What do you want to write?"
//         name="name"
//         required
//         defaultValue={currentContactName}
//         autoFocus
//       />

//       <input
//         className={css.input}
//         onChange={handleSubmit}
//         placeholder="What do you want to write?"
//         name="number"
//         required
//         defaultValue={currentContactNumber}
//         autoFocus
//       />
//       <button className={css.submitButton} type="submit">
//         <RiSaveLine color="green" size="16px" />
//       </button>

//       <button
//         className={css.editButton}
//         type="button"
//         onClick={() => dispatch(addCurrentContact(null))}
//       >
//         <MdOutlineCancel color="red" size="16px" />
//       </button>
//     </form>
//   );
// }

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

    if (
      valueName !== currentContactName ||
      valueNumber !== currentContactNumber
    ) {
      dispatch(
        updateCurrentContact({
          name: valueName,
          number: valueNumber,
          id: valueId,
        })
      );
    } else {
      dispatch(addCurrentContact(null));
    }
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.input}
        placeholder="Name"
        name="name"
        required
        defaultValue={currentContactName}
        autoFocus
      />
      <input
        className={css.input}
        placeholder="Phone Number"
        name="number"
        required
        defaultValue={currentContactNumber}
      />
      <input type="hidden" name="id" value={currentContactId} />
      <button className={css.submitButton} type="submit">
        <RiSaveLine color="green" size="16px" />
      </button>
      <button
        className={css.editButton}
        type="button"
        onClick={() => dispatch(addCurrentContact(null))}
      >
        <MdOutlineCancel color="red" size="16px" />
      </button>
    </form>
  );
}
