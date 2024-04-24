import React from 'react';
import { Brand, Container, Content,  Menu, NewNote, Search } from './styles'
import { ButtonText } from '../../components/ButtonText'
import { FiPlus, FiSearch } from 'react-icons/fi';
import  Header  from '../../components/Header'
import { Input } from '../../components/Input';

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
                <Input placeholder="Pesquisar pelo título" icon={FiSearch}/>
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