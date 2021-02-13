import { useContext } from 'react';
import ContactItem from '../../components/contacts/ContactItem';

// Context
import ContactContext from '../../context/contact/contactContext';

const Contact = () => {
	const contactContext = useContext(ContactContext);

	const { contacts } = contactContext;

	return (
		<>
			{contacts.map(contact => (
				<ContactItem key={contact.id} contact={contact} />
			))}
		</>
	);
};

export default Contact;
