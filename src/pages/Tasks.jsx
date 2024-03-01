// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Helmet } from "react-helmet";
// import { TaskList } from "../components/TaskList/TaskList";
// import { TaskEditor } from "../components/TaskEditor/TaskEditor";
// import { fetchTasks } from "../redux/contacts/operations";
// import { selectLoading } from "../redux/contacts/selectors";

// export default function Tasks() {
//   const dispatch = useDispatch();
//   const isLoading = useSelector(selectLoading);

//   useEffect(() => {
//     dispatch(fetchTasks());
//   }, [dispatch]);

//   return (
//     <>
//       <Helmet>
//         <title>Your tasks</title>
//       </Helmet>
//       <TaskEditor />
//       <div>{isLoading && "Request in progress..."}</div>
//       <TaskList />
//     </>
//   );
// }
