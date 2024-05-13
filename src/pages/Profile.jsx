import { useSelector } from "react-redux";
import { selectUser } from "../redux/auth/selectors";

export default function Profile() {
  const userDataName = useSelector(selectUser);
  console.log(userDataName);
  return (
    <>
      <div>
        Name:
        <h2>{userDataName.name}</h2>
      </div>
      <div>
        Email:
        <p>{userDataName.email}</p>
      </div>
    </>
  );
}
