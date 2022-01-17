import React from 'react';
import webpackImg from './Assets/webpack.png';
import Header from 'webComp/header/header';
import Sidebar from 'webComp/Sidebar/sidebar';
import './App.css';

export default function App() {
	return (
		<div className="mainContainer">
			<Header />
			<div className="contentContainer">
				<Sidebar />
				<div className="webpackContainer">
					<h1>{'Webpack Session'}</h1>
					<img src={webpackImg} alt="webpack image" />
				</div>
			</div>
		</div>
	);
}
