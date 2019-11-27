import React from 'react'
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import CustomButton from '../../components/custom-button/custom-button.component';

import lists from '../../utils/lists.js';

import './activity.styles.scss';

const Activity = ({value,result,handleSelect,handleClick}) => {

	return (
		<div className='activity-page'>

				<div className='activity-header' >
				<DropdownButton size="lg" id="dropdown-basic-button" className='drop-button' title={value.toUpperCase()}  >
				{lists.map((list) => <Dropdown.Item key={list.value}  eventKey={`${list.value}`}
				 onSelect={(eventKey: any, event: Object) =>{handleSelect(eventKey)}}  > {list.label.toUpperCase() } </Dropdown.Item>)}
  				
				</DropdownButton>

				 <CustomButton label={'smallheight'} handleClick={handleClick} >
				 Next
				 </CustomButton>

				 </div>

				 <div className='result-primary'>
				 <h1 >&#65282;{result.activity}&#65282; </h1>
				 </div>

				 <div className='result-secondary'>
				 <span className='result-secondary--main'>Accessibility : {result.accessibility}</span>
				
				 
				 <span className='result-secondary--main' >Type : {result.type}</span>
				
				 
				 <span className='result-secondary--main'>Participants : {result.participants}</span>
				 
				
				 <span className='result-secondary--main'>Price : {result.price}</span>
				 
				

				 </div>



		</div>




	)
};

export default Activity;