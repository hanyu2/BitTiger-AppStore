import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import AppPage from './components/app_page';

// create components
class App extends Component {
	constructor(props) {
		super(props);

		this.state = { images: [] };
	}

	componentWillMount() {
		// fantastic place to load data!
		// call one time!
		axios.get('https://api.imgur.com/3/gallery/hot/viral/0')
			.then(response => this.setState({ images : response.data.data }));
	}
	
	render() {
		return (
			<div>
				<AppPage images={this.state.images}/>
			</div>
			);
	}
};

// render the component on the screen
// 
Meteor.startup(() => {
	ReactDOM.render(<App />, document.querySelector('.container'));
});


