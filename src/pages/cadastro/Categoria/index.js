import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../template/PageDefault';

function CadastroCategoria() {
  return (
    <PageDefault>
      <h1>Cadastre uma categoria</h1>
      <Link to="/">Ir para Home</Link>
    </PageDefault>
  )
}

export default CadastroCategoria;