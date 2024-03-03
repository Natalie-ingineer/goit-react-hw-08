import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = (state) => state.contacts.items;

export const selectLoading = (state) => state.contacts.isloading;

export const selectError = (state) => state.contacts.error;

export const selectFilterName = (state) => state.filters.filters.name;

export const selectFilterNumber = (state) => state.filters.filters.number;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilterName, selectFilterNumber],
  (contacts, filterName, filterNumber) => {
    contacts.filter((contact) => {
      const NameFiltered = contact.name
        .toLowerCase()
        .includes(filterName.toLowerCase());
      const NumberFiltered = contact.number.includes(filterNumber);
      return NameFiltered || NumberFiltered;
    });
  }
);
