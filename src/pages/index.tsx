import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';

export const TopBar = styled.div`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavBar = styled.nav`
  background-color: white;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 2px 4px rgba(0,0,0,.1);

  a {
    margin-right: 15px;
    text-decoration: none;
    color: black;

    &:last-child {
      margin-right: 0;
    }
  }
`;

export const Logo = styled.img`
  height: 50px;
`;

export const SearchInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const ContentZone = styled.div`
  position: relative;
  text-align: center;
  color: white;
`;

const BackgroundImage = styled.img`
  width: 100%;
  height: 600px;
  opacity: 0.7;
`;

const TextOverImage = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 24px;
`;

export const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  margin-top: 20px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Web Store</title>
      </Head>
      <TopBar>
        <div></div>
        <div>
          <a href="#">Carrito</a>
          <a> </a> 
          <a href="#">Registrarse</a>
        </div>
      </TopBar>
      <NavBar>
        <Logo src="https://graphicdesignbylisa.com/wp-content/uploads/generic-logo.jpg" alt="logo" />
        <div>
          <a href="#">Inicio</a>
          <a href="#">Productos</a>
          <a href="#">Nosotros</a>
          <a href="#">Contacto</a>
        </div>
        <SearchInput type="text" placeholder="Buscar..."/>
      </NavBar>
      <ContentZone>
        <BackgroundImage src="https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?cs=srgb&dl=pexels-bri-schneiter-346529.jpg&fm=jpg" alt="Background Image" />
        <TextOverImage>
          Aventúrate al aire libre
          <br></br>
          <Link href={'product'}><Button>Explorar</Button></Link>
        </TextOverImage>
      </ContentZone>
    </>
  );
};

