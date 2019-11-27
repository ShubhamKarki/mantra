import React from 'react';
import './custom-box.styles.scss';

const CustomBox = ({children}) => {
	return (
		<div className={'box box--purple'}>
				{children}
		</div>
	)
}

export default CustomBox