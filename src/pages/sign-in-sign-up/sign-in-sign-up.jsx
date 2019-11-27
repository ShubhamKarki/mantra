import React from 'react'


import SignUp from '../../components/sign-up/sign-up.component';
import SignInWith from '../../components/sign-in-with/sign-in-with.component';

//import './sign-in-sign-up.styles.scss';

const SignInSignUpPage = () => {
	return (
		<div className='sign-in-sign-up'>
		
		<SignUp/>
		<SignInWith/>
		</div>
	)
}

export default SignInSignUpPage;