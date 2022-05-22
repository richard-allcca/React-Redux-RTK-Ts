import { useContactQuery } from "../services/contactsApi";

export const ContactDetail = ({ id }) => {
  const { data } = useContactQuery(id);
  return (
    <pre>{JSON.stringify(data, undefined, 2)}</pre>
  )
}
