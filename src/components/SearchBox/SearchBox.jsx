import css from "./SearchBox.module.css";
import { useId, useState } from "react";
import { nameFilter, numberFilter } from "../../redux/contacts/filterSlice";
import { useDispatch, useSelector } from "react-redux";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";

export default function SearchBox() {
  const usernameFieldIdsearch = useId();
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState("");

  // const handleSearchChange = (e) => {
  //   setSearchTerm(e.target.value);
  //   dispatch(nameFilter(e.target.value));
  //   dispatch(numberFilter(e.target.value));
  // };

  const handleSearchChange = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);
    dispatch(nameFilter(searchTerm)); // Фільтрувати за ім'ям
    dispatch(numberFilter(searchTerm)); // Фільтрувати за номером
  };

  return (
    <div className={css.btnWrap}>
      <label className={css.description} htmlFor={usernameFieldIdsearch}>
        <PersonSearchIcon color="primary" />
      </label>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search by name or number"
        id={usernameFieldIdsearch}
      />
    </div>
  );
}
