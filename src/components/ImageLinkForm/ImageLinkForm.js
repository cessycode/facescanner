import React from 'react';
import './ImageLink.css';

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
                    // destructuring. allows access onInputChange directly 
                    // instead of passing props and accessing object as props.onInputChange
    return (
        <div>
            <p className='f3'>
                {'Magic Brain detects faces in your pictures. Give it a try!'}
            </p>
            <div className='center'>
                <div className='form center pa4 br3 shadow-5'>
                    <input className='f4 pa2 w-70 center' 
                           type='text' 
                           onChange={onInputChange}/>
                    <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
                            onClick={onButtonSubmit}
                    >Detect</button>
                </div>
            </div>
        </div>
    )
}


export default ImageLinkForm;