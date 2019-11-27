import React from 'react';

import './sign-up.styles.scss';

 const SignUp = () => (

    const handleSubmit={
      
    }

		return(<div>
          <div id="login-box">
              <div class="left">
                <h1>Sign up</h1>
        
                <input type="text" name="username" placeholder="Username" />
                <input type="text" name="email" placeholder="E-mail" />
                <input type="password" name="password" placeholder="Password" />
                <input type="password" name="password2" placeholder="Retype password" />
        
                <CustomButton type="submit" onSubmit={handleSubmit}>Sign me up</CustomButton>
              </div>
            </div>
          </div>)
  
 

	);

export default SignUp;