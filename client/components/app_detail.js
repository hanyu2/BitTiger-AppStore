import React from 'react';


const AppDetail = (props) => {
	// props.app this is the app object
	// 
	// 
	return(
			<li className="media list-group-item">
				<div className="media-left">
					<img src={props.app.appIcon} />
				</div>
				<div className="media-body">
					<h4 className="media-heading"
						{props.app.appTitle}
					</h4>
				</div>
			</li>
		);
};

export default AppDetail;

