import React from 'react';

const Card = props => {
    return (
        <div className='card d-flex'>
            <div className='card-body'>
                <h6 className='card-title'>
                    {props.title}
                </h6>
                <div className='card-text'>
                    <h1 className='card-number'>
                        {props.number}
                    </h1>
                    <p className='card-metric'>
                        {props.metric}
                    </p>
                </div>
                    <div className='kebab'>
                        <i className='fa fa-ellipsis-v circle-icon'></i>
                    </div>
                    <img className='icons square-icon' 
                        src={props.imgsrc} 
                        alt='bottom-icons'
                    />
            </div>
        </div> 
    );
}

export default Card;