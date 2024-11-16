    /**
     * @author Tan Dat
     */
    import React from "react";
    import Container from 'react-bootstrap/Container';
    import Row from 'react-bootstrap/Row';
    import Col from 'react-bootstrap/Col';

    import "./FlightSearchBar.scss"

    const FlightSearchBar = () => {
        return (
            <div className="flight-search-bar-container">
                <div className="search-container">
                    <Container fluid>
                        <Row className="search-row1">
                            <Col xs={12} md={8} className="flight-location-container">hi1</Col>
                            <Col className="quantity-container">hi2</Col>
                        </Row>
                        <Row className="search-row2">
                            <Col xs={12} md={8} className="flight-time-container">hi3</Col>
                            <Col className="seacrh-btn-container">hi4</Col>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }

    export default FlightSearchBar;