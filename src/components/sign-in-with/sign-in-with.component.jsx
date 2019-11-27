import React from 'react';

import './sign-in-with.styles.scss';

const SignInWith = () => {
	return (
		<div>
			<div class="right">
    <span class="loginwith">Sign in with<br />social network</span>
    
    <button class="social-signin facebook">Log in with facebook</button>
    <button class="social-signin twitter">Log in with Twitter</button>
    <button class="social-signin google">Log in with Google+</button>
  </div>
  <div class="or">OR</div>
</div>
		
	)
}

export default SignInWith;