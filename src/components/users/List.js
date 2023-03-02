import { Link } from 'react-router-dom';
import Header from '../layouts/Header.js';
import DataTables from '../template/DataTables.js';
import { useSelector } from 'react-redux';

const List = () => {
	const users = useSelector(state => state.form.users);
	
	return (
		<div>
			<Header />
			
			<div className="max-w-6xl mx-auto sm:px-6 lg:px-8 mt-6">
				<div className="grid grid-cols-2">
					<div className="flex justify-start items-center font-bold">List Users</div>
					<div className="flex justify-end items-center">
						<Link to="/form/users" className="bg-violet-700 text-white text-center p-2 rounded-md">Create New User</Link>
					</div>
				</div>

				<div className="mt-2">
					<DataTables 
						thead={ [ "Name", "eKTP", "Address", "Job", "Date of Birth", "Phone Number", "Family" ] }
						tbody={ ["name", "id_number", "address", "job", "date_of_birth", "phone_number"] }
						results={ typeof users !== 'undefined' ? users : [] }
					/>
				</div>
			</div>
		</div>
	);
};

export default List;