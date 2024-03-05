import FaceIcon from "@mui/icons-material/Face";
import PhoneIcon from "@mui/icons-material/Phone";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import css from "./Contact.module.css";

export default function Contact({
  contact,
  phonenumber,
  onDelete,
  onClick,
  userId,
}) {
  return (
    <div className={css.box}>
      <div className={css.infoWrap}>
        <p className={css.text}>
          <FaceIcon color="primary" size={20} className={css.icon} /> {contact}
        </p>
        <p className={css.text}>
          <PhoneIcon color="primary" size={20} className={css.icon} />{" "}
          {phonenumber}
        </p>
      </div>
      <div>
        <button
          className={css.deleteButton}
          type="button"
          onClick={() => onDelete(userId)}
        >
          <DeleteForeverIcon color="red" size={24} />
        </button>

        <button className={css.editButton} type="button">
          <EditIcon color="green" size={24} onClick={() => onClick(userId)} />
        </button>
      </div>
    </div>
  );
}
