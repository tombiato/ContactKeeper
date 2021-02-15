import { useContext } from 'react';
import ContactItem from '../../components/contacts/ContactItem';

import { motion, AnimatePresence } from 'framer-motion';

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
			{filtered !== null ? (
				<AnimatePresence>
					{filtered.map(contact => (
						<motion.div
							key={contact.id}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ delay: 0.2 }}
						>
							<ContactItem contact={contact} />
						</motion.div>
					))}
				</AnimatePresence>
			) : (
				<AnimatePresence>
					{contacts.map(contact => (
						<motion.div
							key={contact.id}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ delay: 0.2 }}
						>
							<ContactItem contact={contact} />
						</motion.div>
					))}
				</AnimatePresence>
			)}
		</>
	);
};

export default Contact;
