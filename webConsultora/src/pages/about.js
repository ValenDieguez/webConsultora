import React from 'react';
import Layout from '../components/layoutInicio';
import {Link} from "gatsby";

const About = () => (
    <Layout>
        <h1>About</h1>
        <p>Somos una compañía de ejemplo, mostrando cómo construir una landing page en Gatsby.</p>
        <Link to="/about">Aprenda más sobre nosotros</Link>
    </Layout>
);

export default About;