import React from 'react';
import './main.scss';
import { Nav } from './components/Nav/Nav';
import {Home} from './components/Home/Home';




class App extends React.Component{
	render(){
		return(
			<>
				<Nav/>
				<Home/>
			</>
		)
	}
}

export default App;
