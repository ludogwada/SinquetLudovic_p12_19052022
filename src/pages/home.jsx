import React from 'react';
import logo from '../assets/logo.svg';

function Home() {
	return (
		<section className='home'>
			<img src={logo} alt='logo' />
			<p>Choose your User</p>
			<p>Id 12 or id 18</p>
		</section>
	);
}

export default Home;
