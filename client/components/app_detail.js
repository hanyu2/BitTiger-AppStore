import React from 'react';


const AppDetail = (props) => {
	// props.app this is the app object
	return(
			<div>
				
				<img src={props.app.appIcon} />
				{props.app.appTitle}

			</div>
		);
};

export default AppDetail;

