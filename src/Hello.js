import moment from 'moment';

const Hello = ({ name, age }) => {

	const increment = 1;
	const date_format = 'MMM Do YY';

	const today_date = moment().format(date_format);
	const tomorrow_date = moment().add(increment, 'days').format(date_format);
	// 18 de diciembre de 2015
	const star_wars_release_date = moment('20151218', 'YYYYMMDD').fromNow();
	const birth_year = moment().subtract(39, 'years').format('YYYY');

	return (
		<div>
			<p>
				Hello <b>{name}</b>, today is {today_date} and tomorrow will be{' '}
				{tomorrow_date}.
			</p>
			<p>
				Now you have {age} years old, you were probably born in {birth_year} and
				Star Wars: The Force Awakens was released {star_wars_release_date}.
			</p>
		</div>
	);
};

export default Hello;
