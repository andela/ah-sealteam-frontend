import React from 'react';
import '../../assets/styles/generalLoader.scss';

const GeneralLoader = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="animationload">
                    <div className="osahanloading" />
                </div>
            </div>
        </div>
    );
};

export default GeneralLoader;
