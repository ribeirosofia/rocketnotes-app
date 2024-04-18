import React from 'react';
import { Container } from './styles'
import Header  from '../../components/Header'
import { Button } from '../../components/Button'

 const Details: React.FC<{}> = () => {
  return(
    <>
    <Container>
      <Header></Header>
      <Button title="Voltar"/>
    </Container>
    </>
  )
}

export default Details;