import React, { useState } from 'react';

const Footer = props => {
    return (
        <footer id="footer">
			<div className="column lg:w-3/5">
				<h3 className="header">About us</h3>
				<p>We are a team of nurses, doctors, technologists and executives dedicated to help nurses find jobs that they love.</p>
				<p>All copyrights reserved ©2020 - Health Explore</p>
			</div>
			<div className="column lg:w-1/5">
				<h3 className="header">Sitemap</h3>
				<a href="#">Nurces</a>
				<a href="#">Employes</a>
				<a href="#">Social Networking</a>
				<a href="#">Jobs</a>
			</div>
			<div className="column lg:w-1/5">
				<h3 className="header">Privacy Policy</h3>
				<a href="#">Terms of Use</a>
				<a href="#">Privacy Policy</a>
				<a href="#">Cookie Policy</a>
			</div>
		</footer>
    )
}

export default Footer;