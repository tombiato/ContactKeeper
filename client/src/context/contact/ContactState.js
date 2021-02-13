import { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
	ADD_CONTACT,
	DELETE_CONTACT,
	SET_CURRENT,
	CLEAR_CURRENT,
	UPDATE_CONTACT,
	FILTER_CONTACTS,
	CLEAR_FILTER,
} from '../types';

const ContactState = props => {
	const initialState = {
		contacts: [
			{
				id: 1,
				name: 'Tom Biato',
				email: 'tom.biato@ynov.com',
				phone: '0606060606',
				type: 'personal',
			},
			{
				id: 2,
				name: 'Laura Tru',
				email: 'lauratru@gmail.com',
				phone: '0808080808',
				type: 'profesional',
			},
			{
				id: 3,
				name: 'Juan Carlot',
				email: 'juan.pro@secret.com',
				phone: '0808080808',
				type: 'personal',
			},
		],
	};

	const [state, dispatch] = useReducer(contactReducer, initialState);

	// Add contact

	// Delete contact

	// Set current contact

	// Clear current contact

	// Update contact

	// Filter contacts

	// Clear filter

	return (
		<ContactContext.Provider
			value={{
				contacts: state.contacts,
			}}
		>
			{props.children}
		</ContactContext.Provider>
	);
};

export default ContactState;
