import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = (state) => state.contacts.items;

export const selectLoading = (state) => state.contacts.isloading;

export const selectError = (state) => state.contacts.error;

export const selectFilterName = (state) => state.filters.filters.name;

export const selectFilterNumber = (state) => state.filters.filters.number;

// export const selectCurrentContact = (state) =>
//   state.contacts.currentContact.name;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilterName],
  (contacts, filterName) => {
    return contacts.filter((contact) => {
      const nameFiltered = contact.name
        .toLowerCase()
        .includes(filterName.toLowerCase());
      const numberFiltered = contact.number.includes(filterName);
      return nameFiltered || numberFiltered;
    });
  }
);
