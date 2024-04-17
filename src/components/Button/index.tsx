import React from 'react';
import  Container  from './styles'

export const Button = ({ title, loading }) => {
    return(
      <>
      <Container 
      type="button"
      disabled={ loading ? 'Carregando...' : title }
      >
        {title} 
      </Container>
      </>
    )
  } 
