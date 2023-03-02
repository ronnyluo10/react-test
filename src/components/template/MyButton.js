const MyButton = (props) => {
	const { type, text } = props;

	return (
		<button type={ type } className="bg-violet-700 text-white text-center p-2 rounded-md">{ text }</button>
	);
};

export default MyButton;