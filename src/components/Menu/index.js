import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logoMarehflix.png';
import Button from '../Button';
import './Menu.css';

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img src={Logo} className="Logo" alt="logo do Marehflix" />
      </Link>
      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo vídeo
      </Button>
    </nav>
  );
}

export default Menu;