import './Hero.css';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import line from '../images/line.png';

function Hero() {
    return (
        <section className='hero'>
            <Container>
                <Row>
                    <Col md={12}>
                        <div className='hero-content'>
                            <div className='explore-container'>
                              <a href='#' className='explore'>Explore</a>
                            </div>
                            
                            <h2 className='hero-title'>
                              Unlock the secrets of the ultimate vegetable salad and become a hero to your taste buds and body"
                            </h2>

                            <div className='date-container'>
                                <div className='date-box'>
                                  <date className='date'>28.06.2024</date>
                                </div>
                                

                                <div className='dash-container'>
                                    <img src={line}alt='' className='img' />
                                </div>

                                <div className='join-container'>
                                    <h2 className='join'>Join the movement and experience the delicious and nutritious benefits of vegetable salads.</h2>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Hero