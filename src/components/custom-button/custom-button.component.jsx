import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({children, label,handleClick}) => {
	return (
		<button className={`${label==='smallheight' ? 'button-smallheight': '' } custom-button custom-button--white custom-button--animated`} onClick={() => handleClick()}>
			{children}
		</button>
	)
}

export default CustomButton;