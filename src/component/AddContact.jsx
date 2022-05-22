import { useAddContactMutation, useDeleteContactMutation, useUpdateContactMutation } from "../services/contactsApi";

export const AddContact = () => {
  const [addContact] = useAddContactMutation();
  const [updateContact] = useUpdateContactMutation();
  const [deleteContact] = useDeleteContactMutation();

  const contact = {
    "id": '6',
    "name": 'Contact six',
    "email": 'six@gmail.com',
  }
  const contactUpdate = {
    "id": '4',
    "name": 'Contact for updated',
    "email": 'for-update@gmail.com',
  }

  const handleAdd = async () => {
    await addContact(contact);
  }
  const handleUpdate = async () => {
    await updateContact(contactUpdate);
  }
  const handleDelete = async () => {
    await deleteContact(contact.id);
  }

  return (
    <>
      <button onClick={handleAdd} > Add Contact</button>
      <button onClick={handleUpdate} > Update Contact</button>
      <button onClick={handleDelete} > Delete Contact</button>
    </>
  )
}