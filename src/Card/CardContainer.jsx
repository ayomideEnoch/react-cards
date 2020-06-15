import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import Cards from './Cards';
import RevenueGraph from './RevenueGraph';
import DashboardGraph from './DashboardGraph';
// import DashboardList from './DashboardList';

const CardContainer = (props) => {
    return (
        <Container>
            <Row>
                <Col xs='8'>
                    <Cards />
                </Col>
                <Col xs='4'>
                    <RevenueGraph />
                </Col>
                <Col xs='8'>
                    <DashboardGraph />
                </Col>
                <Col xs='4'>
                    {/* <DashboardList /> */}
                </Col>
            </Row>
        </Container>
    );
}
export default CardContainer;   