import React from 'react';
import { Button } from '../../components/Button'
import { Container} from './styles'
import Header  from '../../components/Header'
import { Links } from '../../components/LinkSection/styles'
import { LinkSection } from '../../components/LinkSection'
import { Tag } from '../../components/Tag'

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
      <LinkSection title="Marcadores">
       <Tag title="Express"/>
       <Tag title="Node.js"/>
      </LinkSection>
      <Button title="Voltar"/>
    </Container>
    </>
  )
}

export default Details;