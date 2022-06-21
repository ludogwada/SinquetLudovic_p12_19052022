import PropTypes from 'prop-types';

/**
 * Display welcome sentences with user data
 * @param {any} Data
 * @returns user Data
 */

function UserData({ Data }) {
	return (
		<section>
			<span className='userHello'>
				Bonjour<p className='userHello__name'>{Data.firstName}</p>
			</span>
			<span className='userCongratulation'>
				Félicitation ! Vous avez explosé vos objectifs hier 👏
			</span>
		</section>
	);
}

UserData.propTypes = {
	Data: PropTypes.any,
};

export default UserData;
