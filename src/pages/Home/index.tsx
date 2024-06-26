import React from 'react';
import { Brand, Container, Content,  Menu, NewNote, Search } from './styles'
import { ButtonText } from '../../components/ButtonText'
import { FiPlus, FiSearch } from 'react-icons/fi';
import  Header  from '../../components/Header'
import { Input } from '../../components/Input';
import { LinkSection } from '../../components/LinkSection';
import { Note } from '../../components/Note';

export function Home() {
    return(
        <>
        <Container>
            <Brand>
                <h1>Rocketnotes</h1>
            </Brand>
            <Header />
            <Menu>
                <li><ButtonText title="Todos" isactive={true}/></li>
                <li><ButtonText title="React"/></li>
                <li><ButtonText title="Node.js"/></li>
            </Menu>
            <Search>
                <Input placeholder="Pesquisar pelo título" icon={FiSearch}/>
            </Search>
            <Content>
                <LinkSection title="Minhas notas">
                    <Note data={{
                        title: 'React',
                        tags: [
                            {id:'1', name: 'react'},
                            {id:'2', name: 'frameworks'},
                        ] 
                        }}
                    />
                        <Note data={{
                        title: 'Node.js',
                        tags: [
                            {id:'1', name: 'node.js'},
                            {id:'2', name: 'Javascript'},
                        ] 
                        }}
                    />
                </LinkSection>
            </Content>
            <NewNote to="/new">
                <FiPlus />
                Criar nota
            </NewNote>
        </Container>
        </>
    );
}