import { useContext } from 'react';
import ContactItem from '../../components/contacts/ContactItem';

// Context
import ContactContext from '../../context/contact/contactContext';

const Contact = () => {
	const contactContext = useContext(ContactContext);

	const { contacts, filtered } = contactContext;

	if (contacts.length === 0) {
		return <h1>Please add a contact</h1>;
	}

	return (
		<>
			{filtered !== null
				? filtered.map(contact => (
						<ContactItem key={contact.id} contact={contact} />
				  ))
				: contacts.map(contact => (
						<ContactItem key={contact.id} contact={contact} />
				  ))}
		</>
	);
};

export default Contact;
