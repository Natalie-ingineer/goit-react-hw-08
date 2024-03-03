import css from "./SearchBox.module.css";
import { useId } from "react";
import { nameFilter, numberFilter } from "../../redux/contacts/filterSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  selectFilterName,
  selectFilterNumber,
} from "../../redux/contacts/selectors";

export default function SearchBox() {
  const usernameFieldIdsearch = useId();
  const dispatch = useDispatch();
  const filterName = useSelector(selectFilterName);
  const filterNumber = useSelector(selectFilterNumber);

  return (
    <div className={css.btnWrap}>
      <label className={css.description} htmlFor={usernameFieldIdsearch}>
        Find contacts by name
      </label>
      <input
        type="text"
        value={(filterName, filterNumber)}
        onChange={(e) => {
          dispatch(nameFilter || numberFilter(e.target.value));
        }}
        id={usernameFieldIdsearch}
      />
    </div>
  );
}
