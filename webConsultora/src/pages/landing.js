import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import headerImage from '../images/header.jpg';
import { StaticImage } from "gatsby-plugin-image"

// Styled components
const Wrapper = styled.div`
  font-family: Arial, sans-serif;
  color: #333;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;
const HeaderImage = styled.img`
  width: 100%;
  height: auto;
`;
const Navigation = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  padding: 20px 0;
`;
const NavItem = styled.li`
  margin-right: 1rem;
`;
const NavLink = styled(Link)`
  color: #333;
  text-decoration: none;
  &:hover {
    color: #999;
  }
`;
const Title = styled.h1`
  font-size: 2.5em;
  text-align: center;
`;
const Subtitle = styled.h2`
  font-size: 1.5em;
  text-align: center;
`;
const Paragraph = styled.p`
  font-size: 1em;
  line-height: 1.6;
  text-align: justify;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// End of styled components

const HomePage = () => (
    <Wrapper>
        <HeaderImage src={headerImage} alt="Header" />
        <Navigation>
            <NavItem>
                <NavLink to="/">Inicio</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/about">Quiénes Somos</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/contact">Contacto</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/pricing">Precios</NavLink>
            </NavItem>
        </Navigation>
        <Title>Bienvenido a nuestra página web</Title>
        <Subtitle>Somos una compañía de ejemplo</Subtitle>
        <Paragraph>
            Gracias por visitar nuestra página web. Nos esforzamos por ofrecer el
            mejor servicio posible a nuestros clientes.
        </Paragraph>
        <Paragraph>
            Si tienes algún comentario o sugerencia, por favor no dudes en ponerte en
            contacto con nosotros.
        </Paragraph>
        <FlexContainer>
            <StaticImage
                src="../images/noflagsolution.png"
                width={300}
                quality={95}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="A Gatsby astronaut"
                style={{ marginRight: '2rem' }}
            />
            <Paragraph>
                Aquí tienes un párrafo realmente largo que se mostrará junto a la imagen en tu diseño.
                El texto será lo suficientemente largo como para demostrar cómo el texto y la imagen pueden coexistir uno al lado del otro.
            </Paragraph>
        </FlexContainer>

        <NavLink to="/about">Aprende más sobre nosotros</NavLink>
    </Wrapper>
);

export default HomePage;