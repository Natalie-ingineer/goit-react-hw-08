import Fuse from "fuse.js";
import css from "./SearchBox.module.css";
import { useId, useState } from "react";
import { nameFilter, numberFilter } from "../../redux/contacts/filterSlice";
import { useDispatch, useSelector } from "react-redux";

export default function SearchBox() {
  const usernameFieldIdsearch = useId();
  const dispatch = useDispatch();
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fuse = new Fuse(contacts, {
    key: ["name", "number"],
  });

  const results =
    contacts.length > 0 && searchTerm !== ""
      ? fuse.search(searchTerm)
      : contacts;
  const searchValue = results.map((result) => result.item);
  console.log(searchValue);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    dispatch(nameFilter(e.target.value));
    dispatch(numberFilter(e.target.value));
  };

  return (
    <div className={css.btnWrap}>
      <label className={css.description} htmlFor={usernameFieldIdsearch}>
        Find contacts by name
      </label>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search by name and number"
        id={usernameFieldIdsearch}
      />
    </div>
  );
}
