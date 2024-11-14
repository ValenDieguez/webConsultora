import React from 'react';
import Layout from '../components/layoutInicio';
import {Link} from "gatsby";

const Contact = () => (
    <Layout>
        <h1>Contact</h1>
        <p>Somos una compañía de ejemplo, mostrando cómo construir una landing page en Gatsby.</p>
        <Link to="/about">Aprenda más sobre nosotros</Link>
    </Layout>
);

export default Contact;