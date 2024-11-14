import React from 'react';
import { Link } from 'gatsby';
import headerImage from '../images/header.jpg';  // path to your header image

const ListLink = props => (
    <li style={{ display: `inline-block`, marginRight: `1rem` }}>
        <Link to={props.to}>{props.children}</Link>
    </li>
)

export default function Layout({ children }) {
    return (
        <div>
            <img src={headerImage} alt="header" style={{width: '100%'}}/>
            <ul style={{ listStyle: `none`, float: `right` }}>
                <ListLink to="/landing">Inicio</ListLink>
                <ListLink to="/about/">Quiénes Somos</ListLink>
                <ListLink to="/contact/">Contacto</ListLink>
                <ListLink to="/pricing/">Pricing</ListLink>
            </ul>
            {children}
        </div>
    )
}