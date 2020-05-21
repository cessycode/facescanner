import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({imageURL, box}) => {
    return (
        <div className = 'center ma'>
            <div className='absolute mt2'>
                <img id='inputImage' alt ='' src={imageURL} width='500px' height='auto'/>
                <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left:box.leftCol}}></div>
                                            {/* style box properties (e.g. box.topRow) from App.js displayFacebox function */ }
            </div>
        </div>
    )
}

export default FaceRecognition;