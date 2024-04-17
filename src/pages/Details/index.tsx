import React from 'react';
import { Container } from './styles'
import { Button } from '../../components/Button'

 const Details: React.FC<{}> = () => {
  return(
    <>
    <Container>
      <h1>Teste</h1>
      <Button title="Login" loading/>
      <Button title="Cadastrar"/>
    </Container>
    </>
  )
}

export default Details;