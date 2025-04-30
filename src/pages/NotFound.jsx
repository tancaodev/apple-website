import { Link } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import React, { useState, useEffect } from 'react';

const ErrorBoundary = ({ children }) => {
	const [hasError, setHasError] = useState(false);

	useEffect(() => {
		const handleError = (error, errorInfo) => {
			setHasError(true);
			console.error('Error in NotFound component:', error, errorInfo);
		};

		window.addEventListener('error', handleError);
		return () => window.removeEventListener('error', handleError);
	}, []);

	if (hasError) {
		return <h1>An error occurred. Please try again later.</h1>;
	}

	return children;
};

const NotFound = () => (
	<ErrorBoundary>
		<div className='bg-black'>
			<Navbar />

			<Link to='/' className='link-home'>
				Go Home
			</Link>
			<Footer />
		</div>
	</ErrorBoundary>
);

export default NotFound;
