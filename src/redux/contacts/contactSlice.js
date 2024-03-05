import { createSlice } from "@reduxjs/toolkit";
import {
  addContact,
  // addCurrentContact,
  deleteContact,
  fetchContacts,
  updateCurrentContact,
  // updateContact,
} from "./operations";
import { logOut } from "../auth/operations";

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [
      // { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      // { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      // { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      // { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    currentContact: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    addCurrentContact: (state, action) => {
      state.currentContact = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;

        // state.items = [...action.payload];

        state.items.push(action.payload);
        // state.items = [...state.items, action.payload];
      })
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          (item) => item.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addCase(deleteContact.rejected, handleRejected)

      .addCase(updateCurrentContact.pending, handlePending)
      .addCase(updateCurrentContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        // state.items = state.items.map((item) => {
        //   return item.id === state.currentContact.id
        //     ? {
        //         name: action.payload,
        //         number: action.payload,
        //         id: state.currentContact.id,
        //       }
        //     : item;
        // });
        state.items = state.items.map((item) => {
          return item.id === action.payload.id ? action.payload : item;
        });
      })
      .addCase(updateCurrentContact.rejected, handleRejected)

      .addCase(logOut.fulfilled, (state) => {
        state.items = [];
        state.isLoading = false;
        state.error = null;
      }),
});

export const { addCurrentContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
