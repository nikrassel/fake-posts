import React from 'react';

const Loader = () => {
    return (
        <div className="d-flex align-items-center">
            <h2>Идет загрузка </h2>
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
}
 
export default Loader;