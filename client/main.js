import React from 'react';
import ReactDOM from 'react-dom';
import AppPage from './components/app_page';

// create components
const App = () => {
	return (
		<div>
			<AppPage />
		</div>
		);
};

// render the component on the screen
// 
Meteor.startup(() => {
	ReactDOM.render(<App />, document.querySelector('.container'));
});
