// create app page components
// import react
import React from 'react';
import AppDetail from './app_detail';

// dummy data
const APP = [
	{appTitle : 'app1', appIcon: 'http://dummyimage.com/200x200/000/fff'},
	{appTitle : 'app2', appIcon: 'http://dummyimage.com/200x200/000/fff'},
	{appTitle : 'app3', appIcon: 'http://dummyimage.com/200x200/000/fff'}
];

// create our component
const AppPage = () => {
	const RenderedApp = APP.map((app) => {
		return <AppDetail app={app}/>
	});

	return (
			<ul>
				{RenderedApp}
			</ul>
		);
};

// export component
export default AppPage;

