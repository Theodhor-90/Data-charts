import React from 'react';

class Navbar extends React.Component {
    constructor(){
        super();
    }

    render(){
        return(
            <div className='flex'>
                <div>
                    COVID UK
                </div>
                <div className='flex'>
                    <div>
                        UK
                    </div>
                    <div>
                        England
                    </div>
                    <div>
                        Scotland
                    </div>
                    <div>
                        Wales
                    </div>
                    <div>
                        Northern Ireland
                    </div>
                    <div>
                        Source
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar;