import React from 'react'
import { Row, Col } from 'react-bootstrap'

import Plan from './Plan'

const Plans = props => {

    return (
        <section className="product-features">
            <h1>Plans & Pricing</h1>
            <div className="pricing">
                <Row>
                    <Col><Plan title={'Basic'} price={20}/></Col>
                    <Col><Plan title={'Professional'} price={50}/></Col>
                    <Col><Plan title={'Corporate'} price={100}/></Col>
                </Row>
            </div>
        </section>
    )
}

export default Plans
