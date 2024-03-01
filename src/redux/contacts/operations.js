import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// axios.defaults.baseURL = "https://connections-api.herokuapp.com/";
// GET @ /contacts
export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/contacts");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// POST @ /contacts
export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (newContact, thunkAPI) => {
    try {
      const response = await axios.post("/contacts", newContact);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// DELETE @ /contacts/:id
export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// // GET @ /tasks
// export const fetchTasks = createAsyncThunk(
//   "tasks/fetchAll",
//   async (_, thunkAPI) => {
//     try {
//       const res = await axios.get("/tasks");
//       return res.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// // POST @ /tasks
// export const addTask = createAsyncThunk(
//   "tasks/addTask",
//   async (text, thunkAPI) => {
//     try {
//       const response = await axios.post("/tasks", { text });
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

// // DELETE @ /tasks/:id
// export const deleteTask = createAsyncThunk(
//   "tasks/deleteTask",
//   async (taskId, thunkAPI) => {
//     try {
//       const response = await axios.delete(`/tasks/${taskId}`);
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );
