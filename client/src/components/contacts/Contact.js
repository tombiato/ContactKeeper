import { Fragment, useContext, useEffect } from 'react';
import ContactItem from '../../components/contacts/ContactItem';
import Spinner from '../layout/Spinner';

import { motion, AnimatePresence } from 'framer-motion';

// Context
import ContactContext from '../../context/contact/contactContext';

const Contact = () => {
	const contactContext = useContext(ContactContext);

	const { contacts, filtered, getContacts, loading } = contactContext;

	useEffect(() => {
		getContacts();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (contacts !== null && contacts.length === 0 && !loading) {
		return <h1>Please add a contact</h1>;
	}

	return (
		<>
			{contacts !== null && !loading ? (
				<>
					{filtered !== null ? (
						<AnimatePresence>
							{filtered.map(contact => (
								<motion.div
									key={contact._id}
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
									key={contact._id}
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
			) : (
				<Spinner />
			)}
		</>
	);
};

export default Contact;
