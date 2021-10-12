import React from 'react';

class Images extends React.Component{
	render(){
		const {image} = this.props;
		return(
				<div className="col-md-3 mb-3 mt-3 h-100">
					<img src={image.src.large} alt="Not Found" className="img-fluid"/>
				</div>
		)
	}
}

export default Images