import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({imageUrl, boxes}) => {
	return (
		<div className='center ma'>
		  <div className='absolute mt3'>
		    <img id='inputImage' alt='' src={imageUrl} width='600px' heigh='auto'/>
		      {
		      	boxes.map((box,i) => {
		      	const { topRow, rightCol, bottomRow, leftCol } = box;
		      	return (<div key={i} className='bounding-box' style={{top: topRow, right: rightCol, bottom: bottomRow, left: leftCol}}></div>)
		      	})
		  	  }
		    </div>
		</div>
	);
}

export default FaceRecognition;