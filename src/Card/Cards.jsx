import React, { Component } from 'react';
import Card from './CardUI';
import trashUsers from './assets/trashUsers.png';
import users from './assets/users.png';
import trashPause from './assets/trashPause.png';

class Cards extends Component {
    render() {
        return (
            <div className='container-fluid d-flex justify-content-center'>
                <div className='row'>
                    <div className='col-md-4'>
                        <Card title='Total Companies' number='253' metric='+3.2%' imgsrc={trashUsers} />
                    </div>
                    <div className='col-md-4'>
                        <Card title='Total Employees' number='9,036' metric='+20.5%' imgsrc={users} />
                    </div>
                    <div className='col-md-4'>
                        <Card title='Paused Accounts' number='32' metric='-3.2%' imgsrc={trashPause} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Cards;