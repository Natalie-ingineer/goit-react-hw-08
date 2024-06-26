import { useDispatch } from "react-redux";
import { logOut } from "../../redux/auth/operations";
import { useAuth } from "../../hooks";
import css from "./UserMenu.module.css";
import { Button } from "@mui/material";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.wrapper}>
      <Link to="/profile">Profile</Link>
      <Button
        variant="outlined"
        href="#contained-buttons"
        type="button"
        onClick={() =>
          dispatch(logOut())
            .unwrap()
            .then(() => {
              toast.error("You are logged out!");
            })
            .catch(() => {
              toast.error("You are don't logged out!");
            })
        }
      >
        Logout
      </Button>
    </div>
  );
};
