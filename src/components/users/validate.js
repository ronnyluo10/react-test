import moment from 'moment'

const validate = values => {
	const errors = {}

	if(!values.name) {
		errors.name = 'The name is required';
	}

	if(values.name) {
		if(values.name.length > 30) {
			errors.name = 'The name is too long (Maximum 30 characters).';
		} else if(!values.name.match(/^[A-Za-z ]+$/)) {
			errors.name = 'The name is only accept letter and space.';
		}
	}

	if(!values.address) {
		errors.address = 'The address is required';
	}

	if(values.address) {
		if(values.address.length > 100) {
			errors.address = 'The address is too long (Maximum 100 characters).';
		}
	}

	if(!values.ektp) {
		errors.ektp = 'The eKTP is required';
	}

	if(values.ektp) {
		if(!/^\d+$/.test(values.ektp)) {
			errors.ektp = 'The eKTP is only accept numeric.';
		}
	}

	if(!values.job) {
		errors.job = 'The job is required.';
	}

	if(values.job) {
		if(!values.job.match(/^[A-Za-z ]+$/)) {
			errors.job = 'The job is only accept letter and space.';
		} else if(values.job.length > 30) {
			errors.job = 'The job is too long (Maximum 30 characters).';
		}
	}

	if(!values.date_of_birth) {
		errors.date_of_birth = 'The date of birth is required.';
	}

	if(!moment(values.date_of_birth).isValid()) {
		errors.date_of_birth = 'The invalid date of birth format.';
	}

	return errors;
}

export default validate;