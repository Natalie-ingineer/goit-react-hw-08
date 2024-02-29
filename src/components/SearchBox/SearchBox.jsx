import css from "./SearchBox.module.css";
import { useId } from "react";
import { nameFilter } from "../../redux/filtersSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectStatusFilter } from "../../redux/selectors";

export default function SearchBox() {
  const usernameFieldIdsearch = useId();
  const dispatch = useDispatch();
  const filter = useSelector(selectStatusFilter);

  return (
    <div className={css.btnWrap}>
      <label className={css.description} htmlFor={usernameFieldIdsearch}>
        Find contacts by name
      </label>
      <input
        type="text"
        value={filter}
        onChange={(e) => {
          dispatch(nameFilter(e.target.value));
        }}
        id={usernameFieldIdsearch}
      />
    </div>
  );
}
