import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../redux/auth/selectors";
import { updateUserName } from "../redux/auth/operations";

export default function Profile() {
  const dispatch = useDispatch();
  const userDataName = useSelector(selectUser);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUserName({ name: e.target.elements.name.value }));
  };

  console.log(userDataName);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="UpdateName">
          Name:
          <input type="text" name="name" />
        </label>
        <button>Submit</button>
      </form>

      <div>
        Name:
        <p>{userDataName.name}</p>
        Email:
        <p>{userDataName.email}</p>
      </div>
    </>
  );
}
