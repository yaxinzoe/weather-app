import React from 'react';
import './App.css';
import { parseWithOptions } from 'date-fns/fp';

function Nav(props) {
    const handleKeyPress = event => {
		if (event.key === 'Enter') {
			props.handleSearch();
		}
	};

	return (
		<nav>
		  	<div>
				<input
					className="search-input"
					onChange={props.handleInputChange}
					onKeyPress={handleKeyPress}
					value={props.input}
				/>
				<button className="search-btn" onClick={props.handleSearch}>
					<i className="fa fa-search" />
				</button>
				<button className="temp-switch" onClick={props.toggleUnit}>
					<i
						className="fa fa-thermometer-empty temp-switch__icon"
						aria-hidden="true"
					/>
				</button>
		  	</div>
		</nav>
	);
}

export default Nav;