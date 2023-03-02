const IncreaseButton = props => {
	const { text, className, buttonClickHandle } = props;

	return (
		<div className={`p-2 bg-violet-700 text-center w-32 hover:cursor-pointer rounded-md text-white ${className}`} onClick={ buttonClickHandle }>{ text }</div>
	);
};

export default IncreaseButton;