// ФИЛЬТРАЦИЯ
const filterContacts = (contacts, filters) => {
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filters.toLowerCase()),
  );
};

// СОВПАДЕНИЕ
const findToMatch = (contacts, contact) => {
  return contacts.find(
    element => element.name.toLowerCase() === contact.name.toLowerCase(),
  );
};

export { filterContacts, findToMatch };
