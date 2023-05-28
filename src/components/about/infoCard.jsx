import React from 'react';

const InfoCard = ({ info }) => {
    return ( 
        <div className="card mb-2">
            <div className="card-body">
                <h5 className="card-title">{info.title}</h5>
                <p className="card-text">{info.body}</p>
                {info.link && <a href={info.link} className="card-link">{info.link}</a>}
            </div>
        </div>
    );
}
 
export default InfoCard;