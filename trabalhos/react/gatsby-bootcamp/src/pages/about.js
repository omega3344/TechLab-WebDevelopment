import { Link } from 'gatsby'
import React from 'react'
import Layout from '../components/layout'

export default function AboutPage () {
    return (
        <Layout>
            <h1>About me</h1>
            <p>Some text about me (later).</p>
            <p>Need a developer? <Link to='/contact'>Contact me</Link></p>
        </Layout>
    )
}