import React from 'react';

const Navigation = ({onRouteChange, isSignedIn}) => {
    if (isSignedIn) {
        return (
            <nav style={{display: 'flex'  , justifyContent:'flex-end'}}>
                <p onClick={() => onRouteChange('signout')} className='f3 link dim black underline pa3 pointer'>Sign Out</p>
                                {/*runs after onClick happens*/}
            </nav>
        )
    }
    else {
        return (
            <nav style={{display: 'flex'  , justifyContent:'flex-end'}}>
                <p onClick={() => onRouteChange('signin')} className='f3 link dim black underline pa3 pointer'>Sign In</p>
                            {/*runs after onClick happens*/}
                <p onClick={() => onRouteChange('register')} className='f3 link dim black underline pa3 pointer'>Register</p>
                            {/*runs after onClick happens*/}
            </nav>  
        )
    }
}

export default Navigation;