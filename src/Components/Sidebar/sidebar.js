import React from 'react';
import './sidebar.css';

export default function Sidebar() {
	const topics = [
		{ sno: '1.', topic: 'MiniCssExtractPlugin' },
		{ sno: '2.', topic: 'File-loader' },
		{ sno: '3.', topic: 'Optimization' },
		{ sno: '4.', topic: 'Dev Server' },
		{ sno: '5.', topic: 'Resolve' },
		{ sno: '6.', topic: 'Different Plugins' }
	];
	return (
		<div className="sidebarContainer">
			<h2>{'Topics to Discuss'}</h2>
			{topics.map((topic, index) => (
				<div className="topicContainer">
					<h5>{topic.sno}</h5>
					<h5>{topic.topic}</h5>
				</div>
			))}
		</div>
	);
}
