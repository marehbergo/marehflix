import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../template/PageDefault';

function CadastroVideo() {
  return (
    <PageDefault>
      <h1>Cadastre um vídeo</h1>
      <Link to="/cadastro/categoria">Cadastrar categoria</Link>
    </PageDefault>
  )
}

export default CadastroVideo;