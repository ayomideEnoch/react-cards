import React from 'react';
import users from './assets/users.png';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';

const TotalEmployees = props => {
    return (
        <div className='TotalEmployees'>
            <Card>
                <CardBody>
                    <CardTitle>
                        Total Employees
                    </CardTitle>
                    <CardText>
                        <h2>9036</h2>
                        <h6>+20.5%</h6>
                        <div>
                            <i className='fa fa-ellipsis-v circle-icon'></i>
                        </div>
                            <img className='users'
                                src={users} 
                                alt='users'
                            />
                    </CardText>
                </CardBody>
            </Card>
        </div>
    );
}

export default TotalEmployees;