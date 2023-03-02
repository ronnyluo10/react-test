import { Link } from 'react-router-dom';
import Header from '../layouts/Header.js';
import FormComponent from './FormComponent.js';
import { useNavigate } from "react-router-dom";

let Form = () => {
	const navigate = useNavigate();
	
	const submit = values => {
		navigate("/");
	}

	return (
		<div>
			<Header />
			
			<div className="max-w-6xl mx-auto sm:px-6 lg:px-8 mt-6">
				<div className="grid grid-cols-2">
					<div className="flex justify-start items-center font-bold">Create New User</div>
					<div className="flex justify-end items-center">
						<Link to="/" className="bg-violet-700 text-white text-center p-2 rounded-md">Back</Link>
					</div>
				</div>
				
				<FormComponent onSubmit={submit} />
			</div>
		</div>
	)
}

export default Form