import spinner from './spinner.gif';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
	return (
		<>
			<img
				src={spinner}
				alt='Loading...'
				style={{ width: '200px', margin: 'auto', display: 'block' }}
			/>
		</>
	);
};
