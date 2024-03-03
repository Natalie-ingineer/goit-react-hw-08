import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = (state) => state.contacts.items;

export const selectLoading = (state) => state.contacts.isloading;

export const selectError = (state) => state.contacts.error;

export const selectFilterName = (state) => state.filters.filters.name;

export const selectFilterNumber = (state) => state.filters.filters.number;

// export const selectVisibleContacts = createSelector(
//   [selectContacts, selectFilterName, selectFilterNumber],
//   (contacts, filterName, filterNumber) => {
//     return contacts.filter((contact) => {
//       const nameFiltered = contact.name
//         .toLowerCase()
//         .includes(filterName.toLowerCase());
//       const numberFiltered = contact.number.includes(filterNumber);
//       return nameFiltered && numberFiltered;
//     });
//   }
// );

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
