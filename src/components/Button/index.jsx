import React from 'react';
import  Container  from './styles'

export const Button = ({ title, loading, ...rest }) => {
    return(
      <>
      <Container 
      type="button"
      disabled={loading}
      {...rest}
      > 
      {loading ? 'Carregando' : title}
      </Container>
      </>
    )
  } 
