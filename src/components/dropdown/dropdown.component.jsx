import React, from 'react';
import './dropdown.styles.scss';


const Dropdown = ({lists, handleChange,value }) => {

	
		return( <div className="dropdown">
				<select value = {value} onChange={(e) => handleChange(e.target.value)} >
				{lists.map((list) => <option classname="dropdown-menu" value={`${list.value}`}> {list.label} </option>)}
				</select>
				</div>
				)
	}

export default Dropdown;