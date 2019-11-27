import React, { Fragment,useState } from 'react';
import {Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import useAsyncHook from './use-hooks/use-fetch';
import './App.css';

import Header from './components/header/header.component';
import Homepage from './pages/homepage/homepage';
import ProfilePage from './pages/profile/profile.component';

import CustomButton from './components/custom-button/custom-button.component'
import CustomBox from './components/custom-box/custom-box.component'
import Activity from './pages/activity/activity.component';
import HistoryPage from './pages/history/history.component';



const App = () => {
	const [query, setQuery] = useState('http://www.boredapi.com/api/activity/');
	const [value, setValue] = useState('random');
	const [bool, setBool] = useState(false);
	const [result, loading] = useAsyncHook(query,bool);


	const handleSelect =(value) =>{ 
		console.log(value);

		setValue(value);

		value === 'random' ? 
				setQuery(`http://www.boredapi.com/api/activity/`)
				:
				setQuery(`http://www.boredapi.com/api/activity?type=${value}`);//"education", "recreational", "social", "diy", "charity", "cooking", "relaxation", "music", "busywork"
		
		}

	const handleClick = () => { 
		setBool(!bool);
		console.log(bool)
		}
				return (<Fragment>
    					<Header />

    	<Switch>
      		<Route exact path='/' component={Homepage} /> 
      		
      		<Route
  				path='/activity'
  					render={() => 
  						<Activity 
  						value={value}
  						result={result} 
  						handleSelect={handleSelect}  
  						handleClick={handleClick} />}/>
  						
      		{/*<Route exact path='/profile' component={ProfilePage}  />
      		
      		<Route exact path='/history' component={HistoryPage}  />*/}

      	</Switch>
  
    </Fragment>);
}

export default App;
