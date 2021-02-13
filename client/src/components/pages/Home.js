import Contacts from '../contacts/Contact';

const Home = () => {
	return (
		<div className='grid-2'>
			<div>{/* Contect Form*/}</div>
			<div>
				<Contacts />
			</div>
		</div>
	);
};

export default Home;
