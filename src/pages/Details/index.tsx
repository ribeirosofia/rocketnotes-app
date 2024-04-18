import React from 'react';
import { Button } from '../../components/Button'
import { ButtonText } from  '../../components/ButtonText'
import { Container, Content} from './styles'
import Header  from '../../components/Header'
import { Links } from '../../components/LinkSection/styles'
import { LinkSection } from '../../components/LinkSection'
import { Tag } from '../../components/Tag'

 const Details: React.FC<{}> = () => {
  return(
    <>
    <Container>
      <Header />
            <main>
              <Content>
                <ButtonText title="Excluir nota"/>
                <h1>
                  Introdução ao React
                </h1>

                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <LinkSection title="Links úteis">
                <Links>
                <li>
                  <a href="#">Link 1</a>
                </li>
                </Links>
                <Links>
                <li>
                  <a href="#">Link 2</a>
                </li>
                </Links>
                </LinkSection>
                <LinkSection title="Marcadores">
                <Tag title="Express"/>
                <Tag title="Node.js"/>
                </LinkSection>
                <Button title="Voltar" loading />
              </Content>  
            </main>      
            
    </Container>
    </>
  )
}

export default Details;