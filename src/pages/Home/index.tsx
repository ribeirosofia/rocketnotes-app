import React from 'react';
import { Brand, Container, Content,  Menu, NewNote, Search } from './styles'
import { ButtonText } from '../../components/ButtonText'
import { FiPlus } from 'react-icons/fi';
import  Header  from '../../components/Header'

const Home: React.FC<{}> = () => {
    return(
        <>
        <Container>
            <Brand>
                <h1>Rocketnotes</h1>
            </Brand>
            <Header />
            <Menu>
                <li><ButtonText title="Todos" isactive/></li>
                <li><ButtonText title="React"/></li>
                <li><ButtonText title="Node.js"/></li>
            </Menu>
            <Search>

            </Search>
            <Content>

            </Content>
            <NewNote>
                <FiPlus />
                Criar nota
            </NewNote>
        </Container>
        </>
    );
}

export default Home;