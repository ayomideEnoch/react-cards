import React from 'react';
import trashPause from './assets/trashPause.png';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';

const PausedAccounts = props => {
    return (
        <div className='PausedAccounts'>
            <Card>
                <CardBody>
                    <CardTitle>
                        PausedAccounts
                    </CardTitle>
                    <CardText>
                        <h2>32</h2>
                        <h6>-32%</h6>
                        <div>
                            <i className='fa fa-ellipsis-v circle-icon'></i>
                        </div>
                            <img className='trashPause'
                                src={trashPause} 
                                alt='trashPause'
                            />
                    </CardText>
                </CardBody>
            </Card>
        </div>
    );
}

export default PausedAccounts;