import { BsPersonLinesFill } from "react-icons/bs";
import { GiRotaryPhone } from "react-icons/gi";
import { TbHttpDelete } from "react-icons/tb";
import { RiEdit2Line } from "react-icons/ri";
import css from "./Contact.module.css";
// import { useState } from "react";
// import { addCurrentContact } from "../../redux/contacts/operations";

export default function Contact({
  contact,
  phonenumber,
  onDelete,
  onClick,
  // onChange,
  userId,
}) {
  // const [contactCurrent, setContactCurrent] = useState({
  //   name: contact,
  //   number: phonenumber,
  // });

  // const handleNameChange = (e) => {
  //   onChange(e.target.value, phonenumber);
  // };

  // const handleNumberChange = (e) => {
  //   onChange(contact, e.target.value);
  // };

  return (
    <div className={css.wraper}>
      <div className={css.infoWrap}>
        <p className={css.userName}>
          <BsPersonLinesFill className={css.icon} /> {contact}
        </p>
        <p className={css.userPhone}>
          <GiRotaryPhone className={css.icon} /> {phonenumber}
        </p>
      </div>
      <div>
        <button
          className={css.button}
          type="button"
          onClick={() => onDelete(userId)}
        >
          <TbHttpDelete size={20} />
        </button>

        <button className={css.button} type="button">
          <RiEdit2Line size={20} onClick={() => onClick(userId)} />
        </button>
      </div>
    </div>
  );
}
