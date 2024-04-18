import React from 'react';
import { Button } from '../../components/Button'
import { Container} from './styles'
import Header  from '../../components/Header'
import { Links } from '../../components/LinkSection/styles'
import { LinkSection } from '../../components/LinkSection'


 const Details: React.FC<{}> = () => {
  return(
    <>
    <Container>
      <Header />
      <LinkSection title="Links úteis">
        <Links>
        <li>
          <a href="#">Link 1</a>
        </li>
        </Links>
      </LinkSection>
      <Button title="Voltar"/>
    </Container>
    </>
  )
}

export default Details;