import React from 'react';
import { Button } from '../../components/Button'
import { Container, Form } from './styles'
import  Header  from '../../components/Header'
import { Input } from '../../components/Input';
import  Tag  from '../../components/Tag'
import { Textarea } from '../../components/Textarea/index.jsx';

const New: React.FC<{}> = () => {
    return(
        <>
            <Container>
                <Header />
                <main>
                    <Form>
                        <header>
                            <h1>Criar nota</h1>
                            <a href="/">Voltar</a>
                        </header>
                        <Input placeholder="Título" type="text" icon={""}/>
                        <Textarea placeholder="Observações" value=""/>

                    </Form>
                </main>
            </Container>
        </>
    )
}

export default New;