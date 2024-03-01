import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = (state) => state.contacts.items;

export const selectLoading = (state) => state.contacts.loading;

export const selectError = (state) => state.contacts.error;

export const selectStatusFilter = (state) => state.filters.filters.name;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectStatusFilter],
  (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

// export const selectLoading = (state) => state.tasks.loading;

// export const selectFilter = (state) => state.tasks.filter;

// export const selectAllTasks = (state) => state.tasks.items;
