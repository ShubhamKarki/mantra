import React, { useState } from 'react';

import './sign-in.styles.scss';

 const SignIn = () => {
 	const [userCredentials,setuserCredentials] = useState({
 		email:'',
 		password:''
 	});

 	return(
 		<div>
 			<div id="login-box">
   				<div class="left">
     				<h1>Sign In</h1>
     				<input type="text" name="email" placeholder="E-mail" onChange={handleChange}/>
     				<input type="password" name="password" placeholder="Password" onChange={handleChange}/>
     
     				<CustomButton type='submit' onSubmit={handleSubmit}>Sign me up</CustomButton>
   				</div>
   			</div>
   		</div>
   
  
 
 	)};

export default SignIn;