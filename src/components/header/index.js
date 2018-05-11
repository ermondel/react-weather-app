import React, { Component } from 'react'

class Header extends Component {
    render() {
        const city = ''

        return (
		<header>
			<div id="header-inner">
				<h1>Weather forecast for the city up to 2 weeks</h1>
				<form id="form">
		    		<div className="left">
			    		<div id="search-box">
				    		<label htmlFor="city" className="visuallyhidden" tabIndex="0">Choose the city of your interest</label>
				    		<input type="text" name="city" id="city" value={city} placeholder="e.g. New York" required />
			    		</div>
						<div id="options">
						<div id="options-period">
							<label className="common-radio" tabIndex="0">
								<input type="radio" name="period" value="1" required /><span>day</span>
        					</label>
        					<label className="common-radio" tabIndex="0">
            					<input type="radio" name="period" value="3" required /><span>3 days</span>
        					</label>
        					<label className="common-radio" tabIndex="0">
            					<input type="radio" name="period" value="7" required /><span>week</span>
        					</label>
        					<label className="common-radio" tabIndex="0">
            					<input type="radio" name="period" value="14" required /><span>2 weeks</span>
        					</label>
        				</div>
        				<div id="options-unit">
        					<label className="common-radio" tabIndex="0">
            					<input type="radio" name="unit" value="celsius" required /><span>Celsius</span>
        					</label>
        					<label className="common-radio" tabIndex="0">
            					<input type="radio" name="unit" value="fahrenheit" required /><span>Fahrenheit</span>
        					</label>
        				</div>
        			</div>
					</div>
					<div className="right">
						<input type="submit" value="Submit" id="submit" tabIndex="0" />
					</div>
				</form>
			</div>
		</header>
        )
    }
}

export default Header