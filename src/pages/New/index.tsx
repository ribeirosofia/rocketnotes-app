import React from 'react';
import { Link } from 'react-router-dom'
import { Button } from '../../components/Button'
import { Container, Form } from './styles'
import  Header  from '../../components/Header'
import { Input } from '../../components/Input';
import { LinkSection } from '../../components/LinkSection'
import  NoteItem  from '../../components/NoteItem/index.jsx';
import { Textarea } from '../../components/Textarea/index.jsx';

export function New() {
    return(
        <>
            <Container>
                <Header />
                <main>
                    <Form>
                        <header>
                            <h1>Criar nota</h1>
                            <Link to="/">Voltar</Link>
                        </header>
                        <Input placeholder="Título" type="text" icon={""}/>
                        <Textarea placeholder="Observações" value=""/>
                        <LinkSection title="Links úteis">
                            <NoteItem 
                            value="https://www.w3schools.com/" 
                            />
                            <NoteItem 
                            isNew placeholder="Novo link"
                            />
                        </LinkSection>
                        <LinkSection title="Marcadores">
                            <div className='tags'>
                                <NoteItem 
                                value="React.js" 
                                />
                                <NoteItem 
                                isNew placeholder="Nova Tag"
                                />
                            </div>
                        </LinkSection>
                            <Button title="Salvar" loading={false}/>
                    </Form>
                </main>
            </Container>
        </>
    )
}
