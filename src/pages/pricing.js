import React from 'react'
import { Jumbotron, Button } from 'react-bootstrap'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import ValueProp from '../components/ValueProp'
import Plans from '../components/pricing/Plans'
import CallToAction from '../components/CallToAction'

const IndexPage = () => (
    <Layout>
        <Jumbotron>
            <h1>Get to know all of our plans</h1>
            <p>Subtitle Text</p>
            <Button bsStyle="primary">Buy now</Button>
        </Jumbotron>
        <SEO title="Pricing"/>
        <ValueProp/>
        <Plans/>
        <CallToAction/>
    </Layout>
)

export default IndexPage
