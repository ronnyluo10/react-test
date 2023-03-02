import { useState } from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import MyButton from '../template/MyButton.js';
import DataTables from '../template/DataTables.js';
import IncreaseButton from '../template/IncreaseButton.js';

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error }
}) => (
	<div>
		<label>{label}</label>
		<div>
			<input {...input} type={type} placeholder={label} className="border border-slate-500 rounded-md w-full p-2" />
			{ touched && error && <span className="text-red-900">{error}</span> }
		</div>
	</div>
)

const renderTextArea = ({input, label, meta: { touched, error, warning }}) => (
    <div>
        <label>{label}</label>
        <div>
            <textarea {...input} className="border border-slate-500 rounded-md w-full p-2" />
            {touched && ((error && <span className="text-red-900">{error}</span>) || (warning && <span className="text-red-900">{warning}</span>))}
        </div>
    </div>
);

let FormComponent = props => {
	const familyMemberField = {
		"name": <Field name="family_name[]" component={ renderField } type="text" />,
		"date_of_birth": <Field name="family_date_of_birth[]" component={ renderField } type="date" />,
		"relationship_status": <select name="family_relationship_status[]" className="border border-slate-500 rounded-md w-full p-2">
			<option value=""></option>
			<option value="brother">Brother</option>
			<option value="sister">Sister</option>
			<option value="parent">Parent</option>
			<option value="child">Child</option>
		</select>
	};

	const [increasePhone, setIncreasePhone] = useState(1);
	const [phoneFields, setPhoneFields] = useState('');
	const [familyMemberFields, setFamilyMemberFields] = useState([ familyMemberField ]);
	const [familyMemberCount, setFamilyMemberCount] = useState(1);
	const { handleSubmit } = props;
	
	const increasePhoneField = () => {
		const phoneElements = [];

		for(let i = 0; i < increasePhone; i++) {
			phoneElements.push(<div className="mt-2" key={ i }><Field name="phone[]" component={ renderField } type="number" key={ i } /></div>);
		}

		setIncreasePhone(increasePhone + 1);

		setPhoneFields(phoneElements);
	}

	const increaseFamilyMember = () => {
		setFamilyMemberFields([...familyMemberFields, familyMemberField]);
		setFamilyMemberCount(familyMemberCount + 1);
	};

	return (
		<form onSubmit={handleSubmit} className="mt-4">
			<div className="grid grid-cols-2">
				<div>
					<div className="text-left flex">
						<div className="w-32">
							<label htmlFor="name">Name</label>
						</div>
						<div className="w-full">
							<Field name="name" component={ renderField } type="text" />
						</div>
					</div>

					<div className="text-left flex mt-4">
						<div className="w-32">
							<label htmlFor="address">Address</label>
						</div>
						<div className="w-full">
							<Field name="address" component={ renderTextArea } type="textarea" />
						</div>
					</div>

					<div className="text-left flex mt-4">
						<div className="w-32">
							<label htmlFor="ektp">eKTP</label>
						</div>
						<div className="w-full">
							<Field name="ektp" component={ renderField } type="number" />
						</div>
					</div>

					<div className="text-left flex mt-4">
						<div className="w-32">
							<label htmlFor="job">Job</label>
						</div>
						<div className="w-full">
							<Field name="job" component={ renderField } type="text" />
						</div>
					</div>

					<div className="text-left flex mt-4">
						<div className="w-32">
							<label htmlFor="date_of_birth">Date of Birth</label>
						</div>
						<div className="w-full">
							<Field name="date_of_birth" component={ renderField } type="date" />
						</div>
					</div>
				</div>

				<div className="text-left flex pl-4">
					<div className="w-32">
						<label htmlFor="phone">Phone</label>
					</div>
					<div className="w-full">
						<Field name="phone[]" component={ renderField } type="number" />
						
						{ phoneFields }

						<div className="mt-2">
							<IncreaseButton 
								text="Add Phone"
								buttonClickHandle={increasePhoneField}
							/>
						</div>
					</div>
				</div>
			</div>

			<div className="mt-4">
				<p className="font-bold">Family Member ({ familyMemberCount })</p>

				<DataTables 
					thead={ [ "Name", "Date of Birth", "Relationship Status" ] }
					tbody={ ["name", "date_of_birth", "relationship_status"] }
					results={ familyMemberFields }
				/>

				<IncreaseButton 
					text="Add Family Member"
					className="mt-2 w-40"
					buttonClickHandle={increaseFamilyMember}
				/>
			</div>

			<div className="mt-4 text-left">
				<MyButton text="Submit" type="submit" />
			</div>
		</form>
	)
}

FormComponent = reduxForm({
  form: 'users',
  validate,
})(FormComponent)

export default FormComponent