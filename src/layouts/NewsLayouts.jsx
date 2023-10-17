import React from 'react';
import Header from '../pages/Shared/Header/Header';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../pages/Shared/LeftNav/LeftNav';
import { Outlet } from 'react-router-dom';
import RightNav from '../pages/Shared/RightNav/RightNav';
import Footer from '../pages/Shared/Footer/Footer';

const NewsLayouts = () => {
    return (
        <>
           <Header />
      <Container>
        <Row>
            
         

          <Col lg={9}>

            <Outlet />

          </Col>

          <Col lg={3}>

              <RightNav />

          </Col>
        </Row>
      </Container>
      <Footer />  
        </>
    );
};

export default NewsLayouts;