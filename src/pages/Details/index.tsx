import React from 'react';
import { Button } from '../../components/Button'
import { ButtonText } from  '../../components/ButtonText'
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
      <ButtonText title="Excluir nota"/>
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
      <Button title="Voltar" loading />
    </Container>
    </>
  )
}

export default Details;