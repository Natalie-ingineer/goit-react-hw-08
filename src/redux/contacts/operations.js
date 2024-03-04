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

// // UPDATE @ /contacts/:id
// export const updateContact = createAsyncThunk(
//   "contacts/updateContact",
//   async (contactId, thunkAPI) => {
//     try {
//       const response = await axios.patch(`/contacts/${contactId}`);
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// // UPDATE @ /contacts/:id
export const addCurrentContact = createAsyncThunk(
  "contacts/addCurrentContact",
  async (newContact, thunkAPI) => {
    try {
      const response = await axios.post(`/contacts`, newContact);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateCurrentContact = createAsyncThunk(
  "contacts/updateCurrentContact",
  async ({ contactName, contactNumber, contactId }, thunkAPI) => {
    try {
      console.log(contactName);
      console.log(contactNumber);
      console.log(contactId);
      const response = await axios.patch(`/contacts/${{ contactId }}`, {
        name: contactName,
        number: contactNumber,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
