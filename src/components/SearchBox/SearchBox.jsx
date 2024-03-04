import css from "./SearchBox.module.css";
import { useId, useState } from "react";
import { nameFilter, numberFilter } from "../../redux/contacts/filterSlice";
import { useDispatch, useSelector } from "react-redux";

export default function SearchBox() {
  const usernameFieldIdsearch = useId();
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState("");

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
